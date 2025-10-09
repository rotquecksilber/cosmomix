'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import cs from 'classnames';
import { usePathname } from 'next/navigation';
import PopUp from '@/components/PopUp/PopUp';
import { useState } from 'react';
import Burger from '@/components/burger/burger';

const navLinks = [
  { href: '/about', text: 'О нас' },
  { href: '/capability', text: 'Возможности' },
  {
    href: '/catalog',
    text: 'Продукция',
    submenu: [
      { href: '/catalog', text: 'Продукты' },
      { href: '/decorative_cosmetics', text: 'Декоративная косметика' },
    ],
  },
  { href: '/contacts', text: 'Контакты' },
];

export default function Header() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header className={styles.header_desk} role="banner">
      {/* --- Desktop --- */}
      <div className={styles.header_desk__wrapper}>
        <Link href="/" aria-label="Перейти на главную страницу COSMOMIX">
          <Image
            src="/logo.svg"
            alt="Логотип COSMOMIX — производство косметики"
            height={80}
            width={80}
            priority
          />
        </Link>

        <nav role="navigation" aria-label="Основное меню">
          <ul className={styles.header_desk__nav} role="menubar">
            {navLinks.map((link, index) => {
              const isActive = pathName === link.href;
              return (
                <li
                  key={index}
                  className={cs(styles.navItem, {
                    [styles.hasSubmenu]: Boolean(link.submenu),
                  })}
                  role="none"
                >
                  <Link
                    href={link.href}
                    className={cs(styles.header_desk__navLinks, {
                      [styles.active]: isActive,
                    })}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.text}
                  </Link>

                  {link.submenu && (
                    <div
                      className={styles.megamenu}
                      role="menu"
                      aria-label={`Подменю раздела ${link.text}`}
                    >
                      {/* --- примеры карточек продуктов --- */}
                      {/*<div className={styles.megamenu__products}>*/}
                      {/*  <div className={styles.megamenu__productCard}>*/}
                      {/*    <Image*/}
                      {/*      src="/test1.jpg"*/}
                      {/*      alt="Продукт 1"*/}
                      {/*      width={200}*/}
                      {/*      height={150}*/}
                      {/*    />*/}
                      {/*    <p>Продукт 1</p>*/}
                      {/*  </div>*/}
                      {/*  <div className={styles.megamenu__productCard}>*/}
                      {/*    <Image*/}
                      {/*      src="/test2.jpg"*/}
                      {/*      alt="Продукт 2"*/}
                      {/*      width={200}*/}
                      {/*      height={150}*/}
                      {/*    />*/}
                      {/*    <p>Продукт 2</p>*/}
                      {/*  </div>*/}
                      {/*</div>*/}

                      <div className={styles.megamenu__categories}>
                        {link.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.href}
                            className={styles.megamenu__link}
                            role="menuitem"
                          >
                            {sub.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <PopUp />
      </div>

      {/* --- Mobile --- */}
      <div className={styles.header_mobile} role="navigation" aria-label="Мобильное меню">
        <div className={styles.header_mobile__wrapper}>
          <div className={styles.header_mobile__logo}>
            <Link
              href="/"
              aria-label="Перейти на главную страницу COSMOMIX"
              onClick={closeMenu}
            >
              <Image
                src="/logo.svg"
                alt="Логотип COSMOMIX — производство косметики"
                height={58}
                width={58}
                priority
              />
            </Link>
          </div>

          <div className={styles.header_mobile__popup}>
            <PopUp />
          </div>

          <Burger
            isOpen={menuOpen}
            onToggle={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          />
        </div>

        {menuOpen && (
          <>
            <nav
              className={cs(styles.mobileMenu, styles.mobileMenu__open)}
              role="menu"
              aria-label="Мобильная навигация"
            >
              <ul className={styles.mobileMenu_menu}>
                {navLinks.map((link, index) => {
                  const isActive = pathName === link.href;
                  const isSubmenuOpen = openSubmenu === index;

                  if (link.submenu) {
                    return (
                      <li key={index} role="none">
                        <button
                          type="button"
                          className={cs(styles.mobileMenu_link, {
                            [styles.active]: isActive,
                          })}
                          onClick={() => toggleSubmenu(index)}
                          aria-expanded={isSubmenuOpen}
                          aria-controls={`submenu-mobile-${index}`}
                          aria-label={`Открыть подменю ${link.text}`}
                        >
                          <div className={styles.subArrow}>
                            {link.text}
                            <Image
                              className={styles.subArrow_arrow}
                              src="/arrow.svg"
                              alt=""
                              height={10}
                              width={10}
                              aria-hidden="true"
                            />
                          </div>
                        </button>

                        {isSubmenuOpen && (
                          <ul
                            id={`submenu-mobile-${index}`}
                            className={styles.submenuMobile}
                            role="menu"
                            aria-label={`Подменю раздела ${link.text}`}
                          >
                            {link.submenu.map((sub, subIndex) => (
                              <li key={subIndex} onClick={closeMenu} role="none">
                                <Link
                                  href={sub.href}
                                  className={styles.submenuLink}
                                  role="menuitem"
                                >
                                  {sub.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={index} onClick={closeMenu} role="none">
                      <Link
                        href={link.href}
                        className={cs(styles.mobileMenu_link, {
                          [styles.active]: isActive,
                        })}
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
