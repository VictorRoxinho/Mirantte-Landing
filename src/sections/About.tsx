import styled from 'styled-components';
import { MapPin, Waves, Check } from 'lucide-react';
import { theme } from '../styles/theme';

const AboutContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #fafafa 0%, white 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(217, 119, 6, 0.05) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${theme.colors.neutral['900']};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.7;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const FeatureCard = styled.div`
  background: ${theme.colors.neutral.white};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);

    &:before {
      transform: scaleX(1);
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div<{ $color: string }>`
  width: 70px;
  height: 70px;
  background: linear-gradient(
    135deg,
    ${(props) => props.$color}20 0%,
    ${(props) => props.$color}10 100%
  );
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${(props) => props.$color};

  svg {
    width: 32px;
    height: 32px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.neutral['900']};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
`;

export const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>
          Por que escolher o <span>Mirantte</span>?
        </SectionTitle>
        <SectionSubtitle>
          Um jeito novo de viver, com tudo que você precisa ao seu alcance
        </SectionSubtitle>

        <CardsGrid>
          <FeatureCard>
            <IconWrapper $color="#d97706">
              <MapPin />
            </IconWrapper>
            <CardTitle>Pertinho de tudo</CardTitle>
            <CardDescription>
              A 300m da praia, perto de shoppings, mercados e dos melhores
              pontos da cidade. Chega de perder tempo no trânsito!
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper $color="#059669">
              <Waves />
            </IconWrapper>
            <CardTitle>Rooftop sensacional</CardTitle>
            <CardDescription>
              Piscina com vista privilegiada, área gourmet e muito espaço pra
              relaxar ou receber os amigos. É quase um resort!
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper $color="#2563eb">
              <Check />
            </IconWrapper>
            <CardTitle>Pensado em você</CardTitle>
            <CardDescription>
              Cada metro foi planejado com inteligência. Seja pra morar ou
              investir, você vai aproveitar cada cantinho.
            </CardDescription>
          </FeatureCard>
        </CardsGrid>
      </AboutContent>
    </AboutContainer>
  );
};
