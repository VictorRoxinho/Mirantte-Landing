import styled from 'styled-components';
import {
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Wifi,
  Users,
  PawPrint,
  Bike,
  WashingMachine,
  Armchair,
  Coffee,
  Zap,
  Sun,
} from 'lucide-react';
import { theme } from '../styles/theme';
import { AMENITIES } from '../lib/constants';

const AmenitiesContainer = styled.section`
  background-color: ${theme.colors.neutral['900']};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.xxxl} 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const AmenitiesContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  transition: ${theme.transitions.default};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(8px);
  }

  svg {
    color: ${theme.colors.primary.main};
    flex-shrink: 0;
  }
`;

const AmenityText = styled.span`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const amenityIcons: { [key: string]: any } = {
  'Piscina Rooftop': Waves,
  Academia: Dumbbell,
  'Espaço Gourmet': UtensilsCrossed,
  'Coworking Indoor': Wifi,
  'Coworking Outdoor': Wifi,
  'Salão de Festas': Users,
  'Pet Place': PawPrint,
  Bicicletário: Bike,
  Lavanderia: WashingMachine,
  Lounge: Armchair,
  'Snack Bar': Coffee,
  'Infraestrutura para veículos elétricos': Zap,
  'Painéis solares': Sun,
};

export const Amenities = () => {
  return (
    <AmenitiesContainer id="amenities">
      <AmenitiesContent>
        <SectionTitle>Infraestrutura completa</SectionTitle>
        <AmenitiesGrid>
          {AMENITIES.map((amenity, index) => {
            const Icon = amenityIcons[amenity] || Armchair;
            return (
              <AmenityItem key={index}>
                <Icon size={24} />
                <AmenityText>{amenity}</AmenityText>
              </AmenityItem>
            );
          })}
        </AmenitiesGrid>
      </AmenitiesContent>
    </AmenitiesContainer>
  );
};
