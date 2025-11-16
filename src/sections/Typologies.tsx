import styled from 'styled-components';
import { Check } from 'lucide-react';
import { theme } from '../styles/theme';
import { Button } from '../components/Button';
import { TYPOLOGIES } from '../lib/constants';
import { scrollToSection } from '../lib/utils';

const TypologiesContainer = styled.section`
  background-color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.xxxl} 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const TypologiesContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral['900']};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const TypologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TypologyCard = styled.div`
  background-color: ${theme.colors.neutral.white};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const TypologyImage = styled.div<{ $imageUrl?: string }>`
  width: 100%;
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
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const TypologyBody = styled.div`
  padding: ${theme.spacing.xl};
`;

const TypologyHeader = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const TypologyName = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral['900']};
  margin-bottom: 0.5rem;
`;

const TypologyArea = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing.lg};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: ${theme.colors.neutral['600']};
  font-size: ${theme.typography.fontSize.base};

  svg {
    color: ${theme.colors.secondary.main};
    flex-shrink: 0;
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
        <SectionTitle>Escolha sua tipologia</SectionTitle>
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
                <Button
                  $variant="primary"
                  $size="medium"
                  onClick={handleInterest}
                  style={{ width: '100%' }}
                >
                  Tenho Interesse
                </Button>
              </TypologyBody>
            </TypologyCard>
          ))}
        </TypologyGrid>
      </TypologiesContent>
    </TypologiesContainer>
  );
};
