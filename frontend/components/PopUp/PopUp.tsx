'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './PopUp.module.css';
import cn from 'classnames';
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
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const togglePopup = () => {
    setIsOpen(prev => !prev);
    setStatus(null); // сбрасываем статус при открытии/закрытии
  };

  // --- Управление фокусом при открытии/закрытии ---
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(
        `https://api.directual.com/good/api/v5/data/PopUp_Requests/new_request?appID=${process.env.NEXT_PUBLIC_DIRECTUAL_APP_ID}&sessionID=`,
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
            chat_key: process.env.NEXT_PUBLIC_DIRECTUAL_CHAT_KEY,
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
        className={cn(styles.openButton)}
        suppressHydrationWarning
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="popup-dialog"
      >
                Оставить заявку
      </button>

      {/* Кнопка для мобилы с иконкой */}
      <button
        onClick={togglePopup}
        className={cn(styles.openButtonMobile)}
        suppressHydrationWarning
        aria-label="Открыть форму заявки"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="popup-dialog"
      >
        <Image src="/Vector.svg" alt="" width={25} height={25} role="presentation"  />
      </button>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={togglePopup}
          role="presentation"
          aria-hidden={!isOpen}
        >
          <div
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            id="popup-dialog"
            aria-labelledby="popup-title"
            aria-describedby="popup-description"
          >

            {/* Декоративный фон */}
            <Image
              src="/Logo.png"
              alt=""
              className={styles.logo}
              width={300}
              height={300}
              role="presentation"
            />

            <button
              className={styles.closeButton}
              onClick={togglePopup}
              aria-label="Закрыть форму"
              ref={closeButtonRef}
            >
                            ×
            </button>

            <h2 className={styles.title} id="popup-title">
                            Оставить заявку
            </h2>



            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn(styles.form, styles.inputBox)}
              noValidate
              suppressHydrationWarning
              aria-live="polite"
            >
              {/* Имя */}

              <input
                id="name"
                type="text"
                placeholder="Имя"
                {...register('name', { required: 'Введите имя' })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className={styles.error} role="alert">
                  {errors.name.message}
                </span>
              )}

              {/* Телефон */}

              <input
                id="phone"
                type="tel"
                placeholder="Телефон"
                {...register('phone', {
                  required: 'Введите телефон',
                  pattern: {
                    value: /^[0-9+()\-\s]*$/,
                    message: 'Некорректный формат телефона',
                  },
                })}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className={styles.error} role="alert">
                  {errors.phone.message}
                </span>
              )}

              {/* Email */}

              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Введите email',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Некорректный формат email',
                  },
                })}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className={styles.error} role="alert">
                  {errors.email.message}
                </span>
              )}

              {/* Комментарий */}

              <textarea
                id="comment"
                placeholder="Комментарий"
                {...register('comment')}
              />

              {/* Кнопка отправки */}
              <button
                type="submit"
                className={cn(styles.submitButton)}
                suppressHydrationWarning
              >
                                Отправить
              </button>

              {/* Сообщения пользователю */}
              {status === 'success' && (
                <p className={styles.success} role="status" aria-live="assertive">
                                    ✅ Спасибо, заявка отправлена!
                </p>
              )}
              {status === 'error' && (
                <p className={styles.error} role="alert" aria-live="assertive">
                                    ❌ Ошибка, попробуйте снова.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

