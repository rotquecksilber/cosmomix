'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './ContactsSection.module.css';
import Htag from '@/components/htag/htag';
import Link from 'next/link';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export default function ContactsSection() {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    // Устанавливаем телефон в '7' (код России, поскольку country="ru"),
    // чтобы PhoneInput всегда начинал с него.
    defaultValues: { name: '', email: '', message: '', phone: '7' }
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(
        `https://api.directual.com/good/api/v5/data/PopUp_Requests/new_request?appID=${process.env.NEXT_PUBLIC_DIRECTUAL_APP_ID}&sessionID=`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email,
            comment: data.message,
            chat_key: process.env.NEXT_PUBLIC_DIRECTUAL_CHAT_KEY,
          }),
        }
      );

      if (!res.ok) throw new Error('Ошибка сети');

      await res.json();
      setStatus('success');

      // !!! ИЗМЕНЕНИЕ: Явный сброс поля phone на '7' (код России)
      // Это заставляет PhoneInput вернуться в исходное состояние.
      reset({
        name: '',
        email: '',
        message: '',
        phone: '7',
      });

      setTimeout(() => setStatus(null), 2000);
    } catch (err) {
      console.error('Ошибка при отправке формы:', err);
      setStatus('error');
    }
  };

  return (
    <section className={styles.contacts} aria-labelledby="contact-title">
      <div className={styles.contacts_data}>
        <Htag tag="h2" color="white" className={styles.contacts_data_title} uppercase>
            Ваша идея +<br />наша экспертиза
        </Htag>

        <div className={styles.contacts_data__credentials}>
          <div>
            <Htag tag="h3" color="white" className={styles.contacts_data__h3}>Телефон</Htag>
            <a href="tel:+74951200596" className={styles.contacts_data__a}>+7 (495) 120-05-96</a>
          </div>
          <div>
            <Htag tag="h3" color="white" className={styles.contacts_data__h3}>Электронная почта</Htag>
            <a href="mailto:info@cosmo-mix.ru" className={styles.contacts_data__a}>info@cosmo-mix.ru</a>
          </div>
          <div>
            <Htag tag="h3" color="white" className={styles.contacts_data__h3}>Адрес</Htag>
            <p className={styles.contacts_data__a}>г. Москва, 2-я Мытищинская ул., 2C1</p>
          </div>
        </div>
      </div>

      <div className={styles.contacts_form__wrapper}>
        <Htag tag="h2" color="gradient" uppercase className={styles.contacts_form__title}>
          <span>Как</span><br />мы можем вам помочь?
        </Htag>

        <form
          className={styles.contacts_form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-describedby="form-status"
        >
          <input
            id="name"
            type="text"
            placeholder="Ваше имя"
            className={styles.contacts_form__input}
            {...register('name', {required: 'Введите имя'})}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}

          <input
            id="email"
            type="email"
            placeholder="Электронная почта"
            className={styles.contacts_form__input}
            {...register('email', {
              required: 'Введите email',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Некорректный формат email',
              },
            })}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}

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
              />
            )}
          />
          {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}

          <textarea
            id="message"
            placeholder="Комментарий"
            className={styles.contacts_form__textarea}
            rows={5}
            {...register('message')}
            aria-invalid={!!errors.message}
          />
          <div className={styles.privacy}>
            <span>Нажимая кнопку отправить, вы соглашаетесь<br/> с <Link href={'/privacy'}
              className={styles.privacy_link}>Политикой
                  конфиденциальности</Link></span>
          </div>
          <button type="submit" className={styles.contacts_form__button}>Отправить</button>

          {/* Статусы */}
          {status === 'success' && (
            <p id="form-status" className={styles.success} role="status">
                ✅ Спасибо, сообщение отправлено!
            </p>
          )}
          {status === 'error' && (
            <p id="form-status" className={styles.error} role="alert">
                ❌ Ошибка, попробуйте снова.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
