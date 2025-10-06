'use client';

import { useState, useEffect, ReactNode, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../PopUp/PopUp.module.css';
import cn from 'classnames';
import Image from 'next/image';

type FormData = {
    name: string;
    phone: string;
    email: string;
    comment?: string;
};

type PopUpConnectProps = {
    trigger: ReactNode;
};

export default function PopUpConnect({ trigger }: PopUpConnectProps) {
  /* ==========================
       Состояния и ссылки
    ========================= */
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  /* ==========================
       React Hook Form
    ========================= */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  /* ==========================
       Управление попапом
    ========================= */
  const togglePopup = () => {
    setIsOpen((prev) => !prev);
    setStatus(null);
  };

  // Закрытие по Escape и блокировка фокуса внутри модалки
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') togglePopup();
    };

    const focusableElements = popupRef.current?.querySelectorAll<HTMLElement>(
      'input, textarea, button, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableElements?.[0];
    const lastEl = focusableElements?.[focusableElements.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (!firstEl || !lastEl) return;

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', trapFocus);

    firstEl?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isOpen]);

  /* ==========================
       Отправка формы
    ========================= */
  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(
        'https://api.directual.com/good/api/v5/data/PopUp_Requests/new_request?appID=5f093c7f-d044-4f52-b15b-8f6c2ea44cf1&sessionID=',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email,
            comment: data.comment,
            chat_key: 'CosmomixRequests_-1002783575555',
          }),
        }
      );

      if (!res.ok) throw new Error('Ошибка сети');

      await res.json();
      setStatus('success');
      reset();

      setTimeout(() => {
        setIsOpen(false);
        setStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setStatus('error');
    }
  };

  /* ==========================
       JSX
    ========================= */
  return (
    <div>
      {/* Триггер */}
      <div
        onClick={togglePopup}
        style={{ display: 'inline-block', cursor: 'pointer' }}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
        onKeyDown={(e) => e.key === 'Enter' && togglePopup()}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={togglePopup}
          role="presentation"
        >
          <div
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
            ref={popupRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popupTitle"
            aria-describedby="popupDesc"
          >
            {/* Декоративный фон */}
            <Image
              src="/Logo.png"
              alt="Логотип"
              className={styles.logo}
              width={300}
              height={300}
            />

            <button
              className={styles.closeButton}
              onClick={togglePopup}
              aria-label="Закрыть попап"
            >
                            ×
            </button>

            <h2 id="popupTitle" className={styles.title}>
                            Оставить заявку
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={cn(styles.form, styles.inputBox)}
              noValidate
              suppressHydrationWarning
              aria-describedby="formStatus"
            >
              <input
                type="text"
                placeholder="Имя"
                {...register('name', { required: 'Введите имя' })}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'nameError' : undefined}
              />
              {errors.name && (
                <span id="nameError" className={styles.error}>
                  {errors.name.message}
                </span>
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
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phoneError' : undefined}
              />
              {errors.phone && (
                <span id="phoneError" className={styles.error}>
                  {errors.phone.message}
                </span>
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
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'emailError' : undefined}
              />
              {errors.email && (
                <span id="emailError" className={styles.error}>
                  {errors.email.message}
                </span>
              )}

              <textarea
                placeholder="Комментарий"
                {...register('comment')}
              />

              <button
                type="submit"
                className={cn(styles.submitButton)}
                suppressHydrationWarning
              >
                                Отправить
              </button>

              {/* Сообщения пользователю */}
              {status === 'success' && (
                <p id="formStatus" className={styles.success}>
                                    ✅ Спасибо, заявка отправлена!
                </p>
              )}
              {status === 'error' && (
                <p id="formStatus" className={styles.error}>
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
