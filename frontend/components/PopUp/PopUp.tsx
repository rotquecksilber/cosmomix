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
    email: string;
    comment?: string;
};

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const togglePopup = () => {
    setIsOpen(prev => !prev);
    setStatus(null); // сбрасываем статус при открытии/закрытии
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(
        'https://api.directual.com/good/api/v5/data/PopUp_Requests/new_request?appID=5f093c7f-d044-4f52-b15b-8f6c2ea44cf1&sessionID=',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email,
            comment: data.comment,
          }),
        }
      );

      if (!res.ok) throw new Error('Ошибка сети');

      const result = await res.json();
      console.log('Ответ API:', result);

      setStatus('success');
      reset();

      // Закрыть окно через 2 сек после успеха
      setTimeout(() => {
        setIsOpen(false);
        setStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setStatus('error');
    }
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

              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Введите email',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Некорректный формат email',
                  },
                })}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
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

              {/* Сообщения пользователю */}
              {status === 'success' && (
                <p className={styles.success}>✅ Спасибо, заявка отправлена!</p>
              )}
              {status === 'error' && (
                <p className={styles.error}>❌ Ошибка, попробуйте снова.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

