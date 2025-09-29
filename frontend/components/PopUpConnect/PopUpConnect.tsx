'use client';

import { useState, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../PopUp/PopUp.module.css';
import cn from 'classnames';
import { jura } from '@/lib/fonts';
import Image from 'next/image';

type FormData = {
    name: string;
    phone: string;
    comment?: string;
};

type PopUpProps = {
    trigger: ReactNode; // любая кнопка/элемент, который открывает попап
    onSubmitCallback?: (data: FormData) => void; // дополнительный callback при отправке
};

export default function PopUp({ trigger, onSubmitCallback }: PopUpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const togglePopup = () => setIsOpen(prev => !prev);

  const onSubmit = (data: FormData) => {
    console.log('Форма отправлена:', data);
    if (onSubmitCallback) onSubmitCallback(data);
    reset();
    setIsOpen(false);
  };

  return (
    <div>
      {/* Триггер попапа */}
      <div
        onClick={(e) => {
          e.preventDefault(); // предотвращаем возможный submit
          togglePopup();
        }}
        style={{ display: 'inline-block', cursor: 'pointer' }}
      >
        {trigger}
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={togglePopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            {/* Декоративный фон */}
            <Image
              src="/logo.png"
              alt="Логотип"
              className={styles.logo}
              width={300}
              height={300}
            />

            <button
              type="button" // обязательно, чтобы не было submit
              className={styles.closeButton}
              onClick={togglePopup}
            >
                            ×
            </button>

            <h2 className={styles.title}>Оставить заявку</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn(styles.form, styles.inputBox)}
              noValidate
              suppressHydrationWarning
            >
              <input
                type="text"
                placeholder="Имя"
                {...register('name', { required: 'Введите имя' })}
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}

              <input
                type="tel"
                placeholder="Телефон"
                {...register('phone', {
                  required: 'Введите телефон',
                  pattern: {
                    value: /^[0-9+()\-\s]*$/,
                    message: 'Некорректный формат телефона',
                  },
                })}
              />
              {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}

              <textarea placeholder="Комментарий" {...register('comment')} />

              <button
                type="submit"
                className={cn(styles.submitButton, jura.className)}
                suppressHydrationWarning
              >
                                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
