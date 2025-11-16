import styled from 'styled-components';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { theme } from '../styles/theme';
import { Button } from '../components/Button';
import { CONTACT } from '../lib/constants';
import { openWhatsApp, scrollToSection } from '../lib/utils';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      135deg,
      rgba(23, 23, 23, 0.7),
      rgba(217, 119, 6, 0.3)
    ),
    url('/Rooftop.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: ${theme.colors.neutral.white};
  max-width: 900px;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['6xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.1;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.95;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.xl};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize.lg};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  color: ${theme.colors.neutral.white};
  opacity: 0.8;
  transition: ${theme.transitions.default};

  &:hover {
    opacity: 1;
    transform: translateX(-50%) scale(1.1);
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
  }
`;

export const Hero = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp(
      CONTACT.whatsapp,
      'Olá! Gostaria de agendar uma visita ao Mirantte.'
    );
  };

  const handleScheduleClick = () => {
    scrollToSection('contact');
  };

  const handleScrollClick = () => {
    scrollToSection('about');
  };

  return (
    <HeroContainer id="hero">
      <HeroBackground />
      <HeroContent>
        <HeroTitle>Viva a poucos metros do mar</HeroTitle>
        <HeroSubtitle>
          Studios e Apartamentos no Costa Azul, Salvador
        </HeroSubtitle>
        <HeroActions>
          <Button
            $variant="primary"
            $size="large"
            onClick={handleScheduleClick}
          >
            Agendar Visita
          </Button>
          <Button
            $variant="outline"
            $size="large"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </Button>
        </HeroActions>
      </HeroContent>
      <ScrollIndicator onClick={handleScrollClick}>
        <ChevronDown size={32} />
      </ScrollIndicator>
    </HeroContainer>
  );
};
