import styles from './ContactsSection.module.css';
import Htag from '@/components/htag/htag';

import Image from 'next/image';

export default function ContactsSection() {
  return (
    <section>
      <div className={styles.contacts}>
        <div className={styles.contacts_data}>
          <Image src={'/Logo1.png'} alt={'Cosmomix'} width={128} height={112} className={styles.contacts_data_image} />
          <Htag tag={'h2'} color={'white'} className={styles.contacts_data_title} uppercase={true}>
              Ваша идея +<br />наша экспертиза
          </Htag>
          <div className={styles.contacts_data__credentials}>
            <div>
              <Htag tag={'h3'} color={'white'} className={styles.contacts_data__h3}>Телефон</Htag>
              <a href="tel:+74951200596" className={styles.contacts_data__a}>
                  +7 (495) 120-05-96
              </a>
            </div>
            <div>
              <Htag tag={'h3'} color={'white'} className={styles.contacts_data__h3}>Электронная почта</Htag>
              <a href="mailto:odm@cosmo-mix.ru" className={styles.contacts_data__a}>
                  odm@cosmo-mix.ru
              </a>
            </div>
            <div>
              <Htag tag={'h3'} color={'white'} className={styles.contacts_data__h3}>Адрес</Htag>
              <div className={styles.contacts_data__a}>г. Москва, 2-я Мытищинская ул., 2C1</div>
            </div>
          </div>
          <div>ССЫЛКИ НА СОЦСЕТИ</div>
        </div>

        <div className={styles.contacts_form__wrapper}>
          <Htag tag={'h2'} color={'gradient'} uppercase={true} className={styles.contacts_form__title}>
            <span>Как</span><br/>мы можем вам помочь?
          </Htag>

          <form className={styles.contacts_form}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className={styles.contacts_form__input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Электронная почта"
              className={styles.contacts_form__input}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className={styles.contacts_form__input}
            />
            <textarea
              name="message"
              placeholder="Сообщение"
              className={styles.contacts_form__textarea}
              rows={5}
              required
            />

          </form>
          <button type={'submit'} className={styles.contacts_form__button}>Отправить</button>
        </div>
      </div>
    </section>
  );
}
