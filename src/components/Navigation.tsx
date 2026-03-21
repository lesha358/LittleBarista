'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 30);
    };
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState);
    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const goToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navEl = document.querySelector('.site-header');
      const navHeight = navEl ? (navEl as HTMLElement).offsetHeight : 100;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      if (window.location.hash !== `#${sectionId}`) {
        window.history.pushState(null, '', `${pathname === '/' ? '' : pathname}#${sectionId}`);
      }
      setIsMobileMenuOpen(false);
      return;
    }
    router.push(`${pathname === '/' ? '' : pathname}#${sectionId}`);
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    if (pathname !== '/') {
      router.push('/');
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById('hero');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  const handleOrder = () => {
    setIsMobileMenuOpen(false);
    setIsModalOpen(true);
  };

  type MenuItem = { label: string; sectionId?: string; onClick?: () => void; href?: string };
  const getMenuItems = (): MenuItem[] => {
    if (pathname?.startsWith('/services/coffee-machines')) {
      return [
        { label: 'Главная', onClick: goHome },
        { label: 'Варианты аренды', sectionId: 'cooperation' },
        { label: 'Модели', sectionId: 'machines' },
        { label: 'Рожковые', sectionId: 'espresso' },
        { label: 'Доп. услуги', sectionId: 'extras' },
        { label: 'Заказать', onClick: handleOrder },
      ];
    }
    if (pathname?.startsWith('/services/mobile-bar')) {
      return [
        { label: 'Главная', onClick: goHome },
        { label: 'Форматы', sectionId: 'cooperation' },
        { label: 'Меню', sectionId: 'menu-list' },
        { label: 'Пакеты', sectionId: 'packages' },
        { label: 'Преимущества', sectionId: 'benefits' },
        { label: 'Контакты', sectionId: 'contacts' },
        { label: 'Заказать', onClick: handleOrder },
      ];
    }
    if (pathname?.startsWith('/services/personnel')) {
      return [
        { label: 'Главная', onClick: goHome },
        { label: 'Виды персонала', sectionId: 'types' },
        { label: 'Преимущества', sectionId: 'advantages' },
        { label: 'Контакты', sectionId: 'contacts' },
        { label: 'Заказать', onClick: handleOrder },
      ];
    }
    return [
      { label: 'Выездная кофейня', href: '/services/mobile-coffee' },
      { label: 'Выездной бар', href: '/services/mobile-bar' },
      { label: 'Аренда кофемашин', href: '/services/coffee-machines' },
      { label: 'Персонал', href: '/services/personnel' },
      { label: 'Контакты', sectionId: 'contacts' },
      { label: 'Заказать', onClick: handleOrder },
    ];
  };

  const menuItems = getMenuItems();
  const navItems = menuItems.filter((i) => i.label !== 'Заказать');
  const orderItem = menuItems.find((i) => i.label === 'Заказать');

  const handleNavClick = (item: MenuItem) => {
    if (item.onClick) item.onClick();
    else if (item.sectionId) goToSection(item.sectionId);
    else if (item.href) {
      setIsMobileMenuOpen(false);
      router.push(item.href);
    }
  };

  return (
    <>
      <header
        className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
        id="siteHeader"
      >
        <div className="site-header__inner">
          <Link href="/" className="site-logo" aria-label="Little Barista" onClick={(e) => { goHome(); e.preventDefault(); }}>
            <span className="site-logo__inner">
              <img src="/images/Logo-horisontal.png" alt="Little Barista" />
            </span>
          </Link>

          <nav className="site-nav">
            {navItems.map((item, idx) => (
              item.href ? (
                <Link key={idx} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className="site-nav__btn"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          <div className="site-header__actions">
            {orderItem && (
              <button
                type="button"
                onClick={handleOrder}
                className="header-btn"
              >
                Заказать
              </button>
            )}
            <button
              className={`burger ${isMobileMenuOpen ? 'is-open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Открыть меню"
              type="button"
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item, idx) => (
            item.href ? (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={idx}
                type="button"
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </button>
            )
          ))}
          {orderItem && (
            <button
              type="button"
              onClick={handleOrder}
              className="header-btn mobile-menu__btn"
            >
              Заказать
            </button>
          )}
        </div>
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theme={theme}
      />
    </>
  );
}
