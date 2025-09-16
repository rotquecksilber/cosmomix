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
      { href: '/product', text: 'Тестовый продукт' },
    ],
  },
  { href: '/cases', text: 'Кейсы' },
  { href: '/blog', text: 'Блог' },
  { href: '/contacts', text: 'Контакты' },
];

export default function Header() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <header className={styles.header_desk}>
      {/* --- Desktop --- */}
      <div className={styles.header_desk__wrapper}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="COSMOMIX производство косметики"
            height={128}
            width={112}
            priority
          />
        </Link>

        <nav>
          <ul className={styles.header_desk__nav}>
            {navLinks.map((link, index) => {
              const isActive = pathName === link.href;
              return (
                <li
                  key={index}
                  className={cs(styles.navItem, {
                    [styles.hasSubmenu]: Boolean(link.submenu),
                  })}
                >
                  <Link
                    href={link.href}
                    className={cs(styles.header_desk__navLinks, {
                      [styles.active]: isActive,
                    })}
                  >
                    {link.text}
                  </Link>

                  {link.submenu && (
                    <ul className={styles.submenu}>
                      {link.submenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link href={sub.href} className={styles.submenuLink}>
                            {sub.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        {/* The PopUp component (for the "Submit an Application" button) is now back in the desktop wrapper */}
        <PopUp />
      </div>

      {/* --- Mobile --- */}
      <div className={styles.header_mobile}>
        <div className={styles.header_mobile__wrapper}>
          <div className={styles.header_mobile__logo}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="COSMOMIX производство косметики"
                height={100}
                width={70}
                priority
                onClick={closeMenu}
              />
            </Link>
          </div>
          {/* The PopUp component for mobile is now back in the mobile wrapper */}
          <div className={styles.header_mobile__popup}>
            <PopUp />
          </div>

          <Burger isOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
        </div>

        {/* Overlay + Menu */}
        {menuOpen && (
          <>
            <button
              className={styles.mobileOverlay}
              onClick={closeMenu}
              aria-label="Закрыть меню"
            ></button>

            <nav className={cs(styles.mobileMenu, styles.mobileMenu__open)}>
              <ul className={styles.mobileMenu_menu}>
                {navLinks.map((link, index) => {
                  const isActive = pathName === link.href;

                  if (link.submenu) {
                    return (
                      <li key={index}>
                        <button
                          type="button"
                          className={cs(styles.header_desk__navLinks, {
                            [styles.active]: isActive,
                          })}
                          onClick={() => setSubmenuOpen(!submenuOpen)}
                          aria-expanded={submenuOpen}
                          aria-controls={`submenu-mobile-${index}`}
                        >
                          {link.text}
                        </button>

                        {submenuOpen && (
                          <ul id={`submenu-mobile-${index}`} className={styles.submenuMobile}>
                            {link.submenu.map((sub, subIndex) => (
                              <li key={subIndex} onClick={closeMenu}>
                                <Link href={sub.href} className={styles.submenuLink}>
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
                    <li key={index} onClick={closeMenu}>
                      <Link
                        href={link.href}
                        className={cs(styles.header_desk__navLinks, {
                          [styles.active]: isActive,
                        })}
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
