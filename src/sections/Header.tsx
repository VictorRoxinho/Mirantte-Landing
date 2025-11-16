import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';
import { Button } from '../components/Button';
import { CONTACT } from '../lib/constants';
import { openWhatsApp } from '../lib/utils';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${theme.colors.primary.hover};
  backdrop-filter: blur(10px);
  box-shadow: ${(props) => (props.scrolled ? theme.shadows.md : 'none')};
  transition: ${theme.transitions.default};
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    height: 32px;
  }
`;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <Logo>
          <LogoImage src="/miranttle-logo.png" alt="Mirantte" />
        </Logo>
        <Button variant="secondary" size="medium" onClick={handleWhatsAppClick}>
          <MessageCircle size={20} />
          WhatsApp
        </Button>
      </HeaderContent>
    </HeaderContainer>
  );
};
