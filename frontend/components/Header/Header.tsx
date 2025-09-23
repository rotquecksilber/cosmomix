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
  {
    href: '/capability',
    text: 'Возможности',
    submenu: [
      { href: '/capability/laboratory', text: 'Лаборатория' },
      { href: '/capability/production', text: 'Производство' },
    ],
  },
  {
    href: '/catalog',
    text: 'Продукция',
    submenu: [
      { href: '/product', text: 'Тестовый продукт' },
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
                    <div className={styles.megamenu}>
                      <div className={styles.megamenu__products}>
                        <div className={styles.megamenu__productCard}>
                          <Image
                            src="/test1.jpg"
                            alt="Продукт 1"
                            width={200}
                            height={150}
                          />
                          <p>Продукт 1</p>
                        </div>
                        <div className={styles.megamenu__productCard}>
                          <Image
                            src="/test2.jpg"
                            alt="Продукт 2"
                            width={200}
                            height={150}
                          />
                          <p>Продукт 2</p>
                        </div>
                      </div>

                      <div className={styles.megamenu__categories}>
                        {link.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.href}
                            className={styles.megamenu__link}
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

          <div className={styles.header_mobile__popup}>
            <PopUp />
          </div>

          <Burger isOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
        </div>

        {menuOpen && (
          <>


            <nav className={cs(styles.mobileMenu, styles.mobileMenu__open)}>
              <ul className={styles.mobileMenu_menu}>
                {navLinks.map((link, index) => {
                  const isActive = pathName === link.href;
                  const isSubmenuOpen = openSubmenu === index;

                  if (link.submenu) {
                    return (
                      <li key={index}>
                        <button
                          type="button"
                          className={cs(styles.mobileMenu_link, {
                            [styles.active]: isActive,
                          })}
                          onClick={() => toggleSubmenu(index)}
                          aria-expanded={isSubmenuOpen}
                          aria-controls={`submenu-mobile-${index}`}
                        >
                          <div className={styles.subArrow}>{link.text} <Image className={styles.subArrow_arrow} src={'/arrow.svg'} alt={''} height={10} width={10}/>
                          </div>

                        </button>

                        {isSubmenuOpen && (
                          <ul
                            id={`submenu-mobile-${index}`}
                            className={styles.submenuMobile}
                          >
                            {link.submenu.map((sub, subIndex) => (

                              <li key={subIndex} onClick={closeMenu}>
                                <Link
                                  href={sub.href}
                                  className={styles.submenuLink}
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
                    <li key={index} onClick={closeMenu}>
                      <Link
                        href={link.href}
                        className={cs(styles.mobileMenu_link, {
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
