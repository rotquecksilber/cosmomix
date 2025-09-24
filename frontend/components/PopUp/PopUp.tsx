'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './PopUp.module.css';
import cn from 'classnames';
import { jura } from '@/lib/fonts';
import Image from 'next/image';

type FormData = {
    name: string;
    phone: string;
    comment?: string;
};

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const togglePopup = () => setIsOpen(prev => !prev);

  const onSubmit = (data: FormData) => {
    console.log('Форма отправлена:', data);
    reset();
    setIsOpen(false);
  };

  return (
    <div>
      {/* Кнопка для десктопа */}
      <button
        onClick={togglePopup}
        className={cn(styles.openButton, jura.className)}
        suppressHydrationWarning
      >
                Оставить заявку
      </button>

      {/* Кнопка для мобилы с иконкой */}
      <button
        onClick={togglePopup}
        className={cn(styles.openButtonMobile)}
        suppressHydrationWarning
      >
        <Image src="/Vector.svg" alt="Заявка" width={25} height={25} />
      </button>

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

            <button className={styles.closeButton} onClick={togglePopup}>
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
              {errors.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}

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
              {errors.phone && (
                <span className={styles.error}>{errors.phone.message}</span>
              )}

              <textarea
                placeholder="Комментарий"
                {...register('comment')}
              />

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
