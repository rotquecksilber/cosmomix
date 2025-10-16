'use client';
import Link from 'next/link'; // Импорт стилей библиотеки
import { useState, useEffect, ReactNode, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form'; // !!! ДОБАВЛЕН Controller
import styles from '../PopUp/PopUp.module.css';
import cn from 'classnames';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2'; // !!! ДОБАВЛЕН PhoneInput
import 'react-phone-input-2/lib/style.css';


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
    control, // !!! ДОБАВЛЕН control
  } = useForm<FormData>({
    // Устанавливаем телефон в '7' (код России) для корректного отображения PhoneInput
    defaultValues: { name: '', email: '', comment: '', phone: '7' }
  });

  /* ==========================
       Управление попапом
    ========================= */
  const togglePopup = () => {
    setIsOpen((prev) => {
      if (!prev) {
        // Сброс формы и статуса при открытии, чтобы телефон не "ломался"
        reset({ name: '', email: '', comment: '', phone: '7' });
        setStatus(null);
      }
      return !prev;
    });
  };

  // Закрытие по Escape и блокировка фокуса внутри модалки
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') togglePopup();
    };

    const focusableElements = popupRef.current?.querySelectorAll<HTMLElement>(
      'input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), button:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
    );

    // Фильтруем элементы, чтобы исключить скрытые или неактивные
    const filteredElements = Array.from(focusableElements || []).filter(el =>
      el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0
    );

    const firstEl = filteredElements?.[0];
    const lastEl = filteredElements?.[filteredElements.length - 1];


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

    // Устанавливаем фокус на первый элемент формы, если он есть
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

      await res.json();
      setStatus('success');

      // !!! ИСПРАВЛЕНИЕ: Сброс на '7' для PhoneInput
      reset({ name: '', email: '', comment: '', phone: '7' });

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
              src="/Logo.webp"
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
              {/* Имя */}
              <input
                type="text"
                placeholder="Имя"
                {...register('name', {required: 'Введите имя'})}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'nameError' : undefined}
              />
              {errors.name && (
                <span id="nameError" className={styles.error}>
                  {errors.name.message}
                </span>
              )}

              {/* Телефон (Controller с PhoneInput) */}
              <Controller
                control={control}
                name="phone"
                rules={{
                  validate: (value) =>
                    (value && value.length > 1) || 'Введите телефон',
                }}
                render={({field: {onChange, value}}) => (
                  <PhoneInput
                    country="ru"
                    value={value}
                    onChange={(val: string) => onChange(val)}
                    countryCodeEditable={false}
                    enableAreaCodes={false}
                    // Используем классы для стилизации
                    inputClass={styles.inputBox__input_phone}
                    containerClass={styles.inputBox__phone_container}
                  />
                )}
              />
              {errors.phone && (
                <span id="phoneError" className={styles.error}>
                  {errors.phone.message}
                </span>
              )}

              {/* Email */}
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

              {/* Комментарий */}
              <textarea
                placeholder="Комментарий"
                {...register('comment')}
              />
              <div className={styles.privacy}>
                <span>Нажимая кнопку отправить, вы соглашаетесь<br/> с <Link href={'/privacy'}
                  className={styles.privacy_link}>Политикой
                  конфиденциальности</Link></span>
              </div>
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
