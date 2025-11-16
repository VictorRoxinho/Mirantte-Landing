import { useState, useEffect } from 'react';
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
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
`;

const HeroBackground = styled.div<{ $scroll: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.8),
      rgba(217, 119, 6, 0.2)
    ),
    url('/Rooftop.webp');
  background-size: cover;
  background-position: center;
  transform: scale(${(props) => 1 + props.$scroll * 0.0002});
  transition: transform 0.1s ease-out;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 50%,
    rgba(217, 119, 6, 0.15) 0%,
    transparent 50%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: ${theme.colors.neutral.white};
  max-width: 900px;
  padding: 0 2rem;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  margin-bottom: ${theme.spacing.md};
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  span {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: block;
    margin-top: 0.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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

const PrimaryButton = styled(Button)`
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(217, 119, 6, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(217, 119, 6, 0.5);
  }
`;

const SecondaryButton = styled(Button)`
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
  border-radius: 50px;
  background: transparent;
  border: 2px solid ${theme.colors.neutral.white};
  box-shadow: none;

  &:hover {
    background: ${theme.colors.neutral.white};
    color: ${theme.colors.primary.main};
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: ${theme.colors.neutral.white};
  opacity: 0.8;
  transition: ${theme.transitions.default};
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-20px);
    }
  }

  &:hover {
    opacity: 1;
  }
`;

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <HeroBackground $scroll={scrollY} />
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>
          Viva a poucos metros do mar
          <span>no coração de Salvador</span>
        </HeroTitle>
        <HeroSubtitle>
          Studios e apartamentos modernos no Costa Azul, onde o estilo de vida
          encontra o conforto que você sempre quis
        </HeroSubtitle>
        <HeroActions>
          <PrimaryButton
            $variant="primary"
            $size="large"
            onClick={handleScheduleClick}
          >
            Agendar Visita
          </PrimaryButton>
          <SecondaryButton
            $variant="outline"
            $size="large"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </SecondaryButton>
        </HeroActions>
      </HeroContent>
      <ScrollIndicator onClick={handleScrollClick}>
        <ChevronDown size={32} />
      </ScrollIndicator>
    </HeroContainer>
  );
};
