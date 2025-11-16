import styled from 'styled-components';
import { Check } from 'lucide-react';
import { theme } from '../styles/theme';
import { Button } from '../components/Button';
import { TYPOLOGIES } from '../lib/constants';
import { scrollToSection } from '../lib/utils';

const TypologiesContainer = styled.section`
  background-color: ${theme.colors.neutral.white};
  padding: 8rem 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const TypologiesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const TypologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const TypologyCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.15);
  }
`;

const TypologyImage = styled.div<{ $imageUrl?: string }>`
  height: 280px;
  background: ${(props) =>
    props.$imageUrl
      ? `linear-gradient(135deg, rgba(217, 119, 6, 0.3), rgba(180, 83, 9, 0.3)), url(${props.$imageUrl})`
      : `linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.primary.hover})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.neutral.white};
  font-size: 2.5rem;
  font-weight: 800;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;

const TypologyBody = styled.div`
  padding: 2rem;
`;

const TypologyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f5f5f5;
`;

const TypologyName = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.neutral['900']};
`;

const TypologyArea = styled.span`
  font-size: 1.1rem;
  color: ${theme.colors.primary.main};
  font-weight: 600;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  color: #666;
  font-size: 1rem;

  svg {
    color: ${theme.colors.secondary.main};
    flex-shrink: 0;
  }
`;

const InterestButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);

  &:hover {
    box-shadow: 0 6px 25px rgba(217, 119, 6, 0.4);
  }
`;

export const Typologies = () => {
  const handleInterest = () => {
    scrollToSection('contact');
  };

  const typologyImages: { [key: string]: string } = {
    studio: '/Perspectiva-do-studio-coluna-02-com-2112-m2-do-Mirantte.jpg.webp',
    'quarto-sala':
      '/Perspectiva-do-quarto-e-sala-da-coluna-3-com-3022-m2-do-Mirantte.jpg.webp',
  };

  return (
    <TypologiesContainer id="typologies">
      <TypologiesContent>
        <SectionTitle>
          Encontre seu <span>espaço ideal</span>
        </SectionTitle>
        <SectionSubtitle>
          Do studio compacto ao apartamento de quarto e sala, temos a opção
          perfeita pra você
        </SectionSubtitle>
        <TypologyGrid>
          {TYPOLOGIES.map((typology) => (
            <TypologyCard key={typology.id}>
              <TypologyImage $imageUrl={typologyImages[typology.id]}>
                {typology.name}
              </TypologyImage>
              <TypologyBody>
                <TypologyHeader>
                  <TypologyName>{typology.name}</TypologyName>
                  <TypologyArea>{typology.area}</TypologyArea>
                </TypologyHeader>
                <FeatureList>
                  {typology.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Check size={20} />
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
                <InterestButton
                  $variant="primary"
                  $size="medium"
                  onClick={handleInterest}
                >
                  Quero conhecer
                </InterestButton>
              </TypologyBody>
            </TypologyCard>
          ))}
        </TypologyGrid>
      </TypologiesContent>
    </TypologiesContainer>
  );
};
