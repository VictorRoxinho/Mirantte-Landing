import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MessageCircle, Menu, X } from 'lucide-react';
import { theme } from '../styles/theme';
import { Button } from '../components/Button';
import { CONTACT } from '../lib/constants';
import { openWhatsApp, scrollToSection } from '../lib/utils';

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${(props) => (props.$scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${(props) =>
    props.$scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div<{ $scrolled: boolean }>`
  font-size: 1.75rem;
  font-weight: 700;
  background: ${(props) =>
    props.$scrolled
      ? 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)'
      : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  letter-spacing: -0.02em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a<{ $scrolled: boolean }>`
  color: ${(props) =>
    props.$scrolled ? theme.colors.neutral['900'] : theme.colors.neutral.white};
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary.main};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary.main};

    &:after {
      width: 100%;
    }
  }
`;

const CTAButton = styled(Button)`
  background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
  color: ${theme.colors.neutral.white};
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(217, 119, 6, 0.4);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MenuButton = styled.button<{ $scrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${(props) =>
    props.$scrolled ? theme.colors.neutral['900'] : theme.colors.neutral.white};
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
    z-index: 1001;
  }
`;

const MobileNav = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$open ? '0' : '-100%')};
  height: 100vh;
  width: 80%;
  max-width: 300px;
  background: ${theme.colors.neutral.white};
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: right 0.3s ease;
  z-index: 999;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  color: ${theme.colors.neutral['900']};
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f5f5f5;

  &:hover {
    color: ${theme.colors.primary.main};
    padding-left: 0.5rem;
  }
`;

const MobileCTAButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
  color: ${theme.colors.neutral.white};
  padding: 1rem;
  border-radius: 12px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: auto;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
`;

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.$open ? 1 : 0)};
  visibility: ${(props) => (props.$open ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 998;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    openWhatsApp(
      CONTACT.whatsapp,
      'Olá! Gostaria de saber mais informações sobre o Mirantte.'
    );
    setMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <HeaderContent>
          <Logo $scrolled={scrolled} onClick={handleLogoClick}>
            MIRANTTE
          </Logo>

          <DesktopNav>
            <NavLink
              $scrolled={scrolled}
              onClick={() => handleNavClick('about')}
            >
              Sobre
            </NavLink>
            <NavLink
              $scrolled={scrolled}
              onClick={() => handleNavClick('typologies')}
            >
              Tipologias
            </NavLink>
            <NavLink
              $scrolled={scrolled}
              onClick={() => handleNavClick('amenities')}
            >
              Infraestrutura
            </NavLink>
            <NavLink
              $scrolled={scrolled}
              onClick={() => handleNavClick('location')}
            >
              Localização
            </NavLink>
            <CTAButton onClick={handleWhatsAppClick}>
              <MessageCircle size={18} />
              WhatsApp
            </CTAButton>
          </DesktopNav>

          <MenuButton
            $scrolled={scrolled}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuButton>
        </HeaderContent>
      </HeaderContainer>

      <Overlay $open={menuOpen} onClick={() => setMenuOpen(false)} />

      <MobileNav $open={menuOpen}>
        <MobileNavLink onClick={() => handleNavClick('about')}>
          Sobre
        </MobileNavLink>
        <MobileNavLink onClick={() => handleNavClick('typologies')}>
          Tipologias
        </MobileNavLink>
        <MobileNavLink onClick={() => handleNavClick('amenities')}>
          Infraestrutura
        </MobileNavLink>
        <MobileNavLink onClick={() => handleNavClick('location')}>
          Localização
        </MobileNavLink>
        <MobileCTAButton onClick={handleWhatsAppClick}>
          <MessageCircle size={20} />
          Falar no WhatsApp
        </MobileCTAButton>
      </MobileNav>
    </>
  );
};
