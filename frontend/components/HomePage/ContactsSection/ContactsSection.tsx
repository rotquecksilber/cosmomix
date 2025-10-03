'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactsSection.module.css';
import Htag from '@/components/htag/htag';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactsSection() {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

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
            comment: data.message,
          }),
        }
      );

      if (!res.ok) throw new Error('Ошибка сети');

      await res.json();
      setStatus('success');
      reset();

      setTimeout(() => setStatus(null), 2000);
    } catch (err) {
      console.error('Ошибка при отправке формы:', err);
      setStatus('error');
    }
  };

  return (
    <section>
      <div className={styles.contacts}>
        <div className={styles.contacts_data}>
          <Htag tag="h2" color="white" className={styles.contacts_data_title} uppercase>
              Ваша идея +<br />наша экспертиза
          </Htag>

          <div className={styles.contacts_data__credentials}>
            <div>
              <Htag tag="h3" color="white" className={styles.contacts_data__h3}>
                  Телефон
              </Htag>
              <a href="tel:+74951200596" className={styles.contacts_data__a}>
                  +7 (495) 120-05-96
              </a>
            </div>
            <div>
              <Htag tag="h3" color="white" className={styles.contacts_data__h3}>
                  Электронная почта
              </Htag>
              <a href="mailto:odm@cosmo-mix.ru" className={styles.contacts_data__a}>
                  odm@cosmo-mix.ru
              </a>
            </div>
            <div>
              <Htag tag="h3" color="white" className={styles.contacts_data__h3}>
                  Адрес
              </Htag>
              <div className={styles.contacts_data__a}>
                  г. Москва, 2-я Мытищинская ул., 2C1
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contacts_form__wrapper}>
          <Htag tag="h2" color="gradient" uppercase className={styles.contacts_form__title}>
            <span>Как</span>
            <br />мы можем вам помочь?
          </Htag>

          <form
            className={styles.contacts_form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles.contacts_form__input}
              {...register('name', { required: 'Введите имя' })}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}

            <input
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
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}

            <input
              type="tel"
              placeholder="Телефон"
              className={styles.contacts_form__input}
              {...register('phone')}
            />

            <textarea
              placeholder="Сообщение"
              className={styles.contacts_form__textarea}
              rows={5}
              {...register('message', { required: 'Введите сообщение' })}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message.message}</span>
            )}

            <button type="submit" className={styles.contacts_form__button}>
                Отправить
            </button>

            {/* Статусы */}
            {status === 'success' && (
              <p className={styles.success}>✅ Спасибо, сообщение отправлено!</p>
            )}
            {status === 'error' && (
              <p className={styles.error}>❌ Ошибка, попробуйте снова.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
