'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import styles from './page.module.css'
import Banner from "@/components/banner/banner";
import Link from "next/link";

type FormData = {
    fullName: string;
    position: string;
    email: string;
    phone: string;
    messenger: string;
    preferredContact: string[];
    companyName: string;
    registeredBrand: string;
    cityRegion: string;
    foundationYear: string;
    websiteSocial: string;
    mainBusiness: string[];
    otherBusiness: string;
    previousManufacturers: string[];
    otherManufacturer: string;
    faceCare: boolean;
    faceCareDetails: string;
    decorativeCosmetics: boolean;
    decorativeDetails: string;
    otherCategory: boolean;
    otherCategoryDetails: string;
    startVolume: string;
    monthlyVolume: string;
    assortment: string;
    projectStage: string[];
    salesChannels: string;
    targetPrice: string;
}

const businessOptions = [
    'Продажа косметики под собственным брендом',
    'Ритейл (магазин/сеть/онлайн-магазин)',
    'Запуск нового бренда (стартап)',
    'Дистрибуция/оптовая торговля',
    'Салон красоты/спа/клиника'
];

const manufacturerOptions = ['Россия', 'Европа', 'Китай', 'Нет'];

const stageOptions = [
    'Идея/исследование рынка',
    'Подбор производителя',
    'Готовы к запуску производства в ближайшие 1-2 месяца',
    'Разработка концепции бренда',
    'Уже есть формулы/дизайн упаковки'
];

export default function Questionnaire() {
    const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(null);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            fullName: '',
            position: '',
            email: '',
            phone: '',
            messenger: '',
            preferredContact: [],
            companyName: '',
            registeredBrand: '',
            cityRegion: '',
            foundationYear: '',
            websiteSocial: '',
            mainBusiness: [],
            otherBusiness: '',
            previousManufacturers: [],
            otherManufacturer: '',
            faceCare: false,
            faceCareDetails: '',
            decorativeCosmetics: false,
            decorativeDetails: '',
            otherCategory: false,
            otherCategoryDetails: '',
            startVolume: '',
            monthlyVolume: '',
            assortment: '',
            projectStage: [],
            salesChannels: '',
            targetPrice: '',
        }
    });

    const onSubmit = async (data: FormData) => {
        setStatus('loading');
        try {
            const res = await fetch('/api/questionnaire', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.error || 'Ошибка при отправке');
            }

            setStatus('success');
            reset();
            setTimeout(() => setStatus(null), 5000);
        } catch (err: any) {
            console.error('Ошибка:', err);
            setStatus('error');
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <main>
            <Banner title={'Анкета для нового клиента'} />

            <div className={styles.formIntro}>
                Заполнение анкеты займет 5–7 минут. Полученные данные помогут нам предложить вам персональное коммерческое предложение и оптимальные условия сотрудничества.
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                {/* 1. Контактная информация */}
                <div className={styles.group}>
                    <div className={styles.sectionHeader}>1 Контактная информация (или визитка)</div>
                    <div className={styles.inputGrid}>
                        <div className={styles.inputField}>
                            <label>ФИО</label>
                            <input {...register('fullName', {required: "Введите ФИО"})} placeholder="ФИО"/>
                            {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
                        </div>

                        <div className={styles.inputField}>
                            <label>Должность</label>
                            <input {...register('position')}
                                   placeholder="Владелец / Директор по развитию / Бренд-менеджер"/>
                        </div>

                        <div className={styles.inputField}>
                            <label>E-mail</label>
                            <input type="email" {...register('email', {required: "Укажите email"})}
                                   placeholder="email@mybrand.ru"/>
                            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                        </div>

                        <div className={styles.inputField}>
                            <label htmlFor="phone">Номер телефона</label>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{required: "Укажите номер телефона"}}
                                render={({field}) => (
                                    <PhoneInput
                                        {...field}
                                        country="ru"
                                        preferredCountries={['ru', 'ge', 'kz', 'ua', 'by']}
                                        enableSearch
                                        inputProps={{
                                            name: 'phone',
                                            id: 'phone',
                                            placeholder: "+7 (999) 123-45-67"
                                        }}
                                        inputClass={styles.phoneInput}
                                        containerClass={styles.phoneContainer}
                                    />
                                )}
                            />
                            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                        </div>

                        <div className={styles.inputField}>
                            <label>WhatsApp / Telegram / WeChat</label>
                            <input {...register('messenger')} placeholder="@username или +7 (999) 123-45-67"/>
                        </div>
                    </div>

                    <div className={styles.preferredContact}>
                        <label className={styles.preferredLabel}>Предпочитаемый способ связи</label>
                        <div className={styles.optionGroup}>
                            {['E-mail', 'Звонок', 'Мессенджер'].map((option) => (
                                <label key={option} className={styles.checkboxLabel}>
                                    <input type="checkbox" value={option} {...register('preferredContact')} />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Общая информация */}
                <div className={styles.group}>
                    <div className={styles.sectionHeader}>2 Общая информация о компании (или визитка)</div>
                    <div className={styles.inputGrid}>
                        <div className={styles.inputField}>
                            <label>Название компании</label>
                            <input {...register('companyName')} placeholder="ООО «Мой Бренд»"/>
                        </div>
                        <div className={styles.inputField}>
                            <label>Ваш зарегистрированный бренд</label>
                            <input {...register('registeredBrand')} placeholder="BeautyGlow / LumiSkin"/>
                        </div>
                        <div className={styles.inputField}>
                            <label>Город/регион основной деятельности</label>
                            <input {...register('cityRegion')} placeholder="Москва, Россия / Ереван, Армения"/>
                        </div>
                        <div className={styles.inputField}>
                            <label>Год основания компании</label>
                            <input {...register('foundationYear')} placeholder="2018"/>
                        </div>
                        <div className={`${styles.inputField} ${styles.fullWidth}`}>
                            <label>Сайт / соцсети (если есть)</label>
                            <input {...register('websiteSocial')} placeholder="www.mybrand.ru, t.me/mybrand..."/>
                        </div>
                    </div>
                </div>

                {/* 3. Основной бизнес */}
                <div className={styles.group}>
                    <div className={styles.sectionHeader}>3 Какой у вас основной бизнес? (можно выбрать несколько
                        вариантов)
                    </div>
                    <div className={styles.optionGroup}>
                        {businessOptions.map((v) => (
                            <label key={v}><input type="checkbox" value={v} {...register('mainBusiness')} /> {v}</label>
                        ))}
                    </div>
                    <div className={styles.otherField}>
                        <label>Другое:</label>
                        <input {...register('otherBusiness')}
                               placeholder="Укажите, если не подходит под перечисленные варианты"/>
                    </div>
                </div>

                {/* 4. Контрактные производители */}
                <div className={styles.group}>
                    <div className={styles.sectionHeader}>4 Работали ли вы ранее с контрактными производителями?</div>
                    <div className={styles.optionGroup}>
                        {manufacturerOptions.map((v) => (
                            <label key={v}><input type="checkbox"
                                                  value={v} {...register('previousManufacturers')} /> {v}</label>
                        ))}
                    </div>
                    <div className={styles.otherField}>
                        <label>Другое:</label>
                        <input {...register('otherManufacturer')}
                               placeholder="Укажите страну или название производителя"/>
                    </div>
                </div>

                {/* 5. Категории продукции */}
                <div className={styles.group}>
                    <div className={styles.sectionHeader}>5 Какие категории продукции вы рассматриваете для
                        производства
                    </div>
                    <div className={styles.categoryGroup}>
                        <ProductCategoryRow
                            checkboxLabel="Уход за лицом (напишите подробнее)"
                            checkboxName="faceCare"
                            detailsName="faceCareDetails"
                            placeholder="Например: кремы, сыворотки, маски, тоники, очищающие средства..."
                            register={register}
                        />
                        <ProductCategoryRow
                            checkboxLabel="Декоративная косметика (напишите подробнее)"
                            checkboxName="decorativeCosmetics"
                            detailsName="decorativeDetails"
                            placeholder="Например: помады, тени для век, туши, тональные кремы, румяна..."
                            register={register}
                        />
                        <ProductCategoryRow
                            checkboxLabel="Другое"
                            checkboxName="otherCategory"
                            detailsName="otherCategoryDetails"
                            placeholder="Укажите категорию и подробности (например: шампуни, средства для тела...)"
                            register={register}
                        />
                    </div>
                </div>

                {/* 6-8. Объемы */}
                <SectionRadio
                    title="6 Планируемый стартовый объем заказа (на первую партию)"
                    name="startVolume"
                    options={['До 500 шт.', '500 - 2 000 шт.', '2 000 - 5 000 шт.', '5 000 - 10 000 шт.', 'Более 10 000 шт.', 'Более 100 000 шт.']}
                    register={register}
                />
                <SectionRadio
                    title="7 Планируемый ежемесячный объем (в перспективе 6-12 месяцев)"
                    name="monthlyVolume"
                    options={['До 1 000 шт.', '1 000 - 5 000 шт.', '5 000 - 10 000 шт.', 'Более 10 000 шт.']}
                    register={register}
                />
                <SectionRadio
                    title="8 Планируемый ассортимент"
                    name="assortment"
                    options={['1 - 3 SKU', '4 - 10 SKU', 'Более 10 SKU']}
                    register={register}
                />

                {/* 9. Этап */}
                <SectionCheckbox title="9 На каком этапе находится ваш проект?" name="projectStage"
                                 options={stageOptions} register={register}/>

                {/* 10-11. Текстовые поля */}
                <TextAreaSection
                    title="10 Какие у вас планируемые каналы продаж?"
                    name="salesChannels"
                    placeholder="Например: Wildberries, Ozon, собственный интернет-магазин, розничные сети, экспорт..."
                    register={register}
                />
                <TextAreaSection
                    title="11 Есть ли у вас target price? Укажите"
                    name="targetPrice"
                    placeholder="Например: 450–750 ₽ за единицу при заказе от 2000 шт. / Диапазон 8–15 USD..."
                    register={register}
                />

                <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Отправка...' : 'Отправить анкету'}
                </button>
                <div className={styles.privacy}>
                <span>Нажимая кнопку "Отправить анкету", вы соглашаетесь<br/> с <Link href={'/privacy'}
                                                                             className={styles.privacy_link}>Политикой
                  конфиденциальности</Link></span>
                </div>
                {status === 'success' &&
                    <div className={styles.statusSuccess}>Анкета успешно отправлена! Мы свяжемся с вами в ближайшее
                        время.</div>}
                {status === 'error' &&
                    <div className={styles.statusError}>Ошибка при отправке. Пожалуйста, попробуйте еще раз или
                        свяжитесь с нами напрямую.</div>}
            </form>
        </main>
    )
}

/* Вспомогательные компоненты */
function SectionCheckbox({title, name, options, register}: any) {
    return (
        <div className={styles.group}>
            <div className={styles.sectionHeader}>{title}</div>
            <div className={styles.optionGroup}>
                {options.map((v: string) => (
                    <label key={v}><input type="checkbox" value={v} {...register(name)} /> {v}</label>
                ))}
            </div>
        </div>
    )
}

function SectionRadio({ title, name, options, register }: any) {
    return (
        <div className={styles.group}>
            <div className={styles.sectionHeader}>{title}</div>
            <div className={styles.optionGroup}>
                {options.map((v: string) => (
                    <label key={v}><input type="radio" value={v} {...register(name)} /> {v}</label>
                ))}
            </div>
        </div>
    )
}

function TextAreaSection({ title, name, placeholder, register }: any) {
    return (
        <div className={styles.group}>
            <div className={styles.sectionHeader}>{title}</div>
            <textarea {...register(name)} rows={4} placeholder={placeholder} />
        </div>
    )
}

function ProductCategoryRow({ checkboxLabel, checkboxName, detailsName, placeholder, register }: any) {
    return (
        <div className={styles.categoryRow}>
            <label className={styles.categoryCheckbox}>
                <input type="checkbox" {...register(checkboxName)} /> {checkboxLabel}
            </label>
            <textarea {...register(detailsName)} placeholder={placeholder} rows={3} />
        </div>
    )
}
