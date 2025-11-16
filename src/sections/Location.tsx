import styled from 'styled-components';
import { MapPin, Navigation, TrendingUp } from 'lucide-react';
import { theme } from '../styles/theme';
import { Accordion, AccordionItem } from '../components/Accordion';
import { LOCATION_INFO } from '../lib/constants';

const LocationContainer = styled.section`
  background-color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.xxxl} 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const LocationContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral['900']};
  text-align: center;
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral['600']};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const LocationList = styled.ul`
  list-style: none;

  li {
    padding: 0.5rem 0;
    color: ${theme.colors.neutral['600']};
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.6;

    &::before {
      content: '✓';
      color: ${theme.colors.secondary.main};
      font-weight: ${theme.typography.fontWeight.bold};
      margin-right: 0.75rem;
    }
  }
`;

const IconWrapper = styled.span`
  color: ${theme.colors.primary.main};
  margin-right: 0.5rem;
`;

export const Location = () => {
  return (
    <LocationContainer id="location">
      <LocationContent>
        <SectionTitle>Localização privilegiada</SectionTitle>
        <SectionSubtitle>
          No coração do Costa Azul, com fácil acesso a tudo que você precisa
        </SectionSubtitle>

        <Accordion>
          <AccordionItem
            title={
              <>
                <IconWrapper>
                  <MapPin
                    size={20}
                    style={{ display: 'inline', verticalAlign: 'middle' }}
                  />
                </IconWrapper>
                Proximidades
              </>
            }
          >
            <LocationList>
              {LOCATION_INFO.proximidades.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </LocationList>
          </AccordionItem>

          <AccordionItem
            title={
              <>
                <IconWrapper>
                  <Navigation
                    size={20}
                    style={{ display: 'inline', verticalAlign: 'middle' }}
                  />
                </IconWrapper>
                Mobilidade
              </>
            }
          >
            <LocationList>
              {LOCATION_INFO.mobilidade.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </LocationList>
          </AccordionItem>

          <AccordionItem
            title={
              <>
                <IconWrapper>
                  <TrendingUp
                    size={20}
                    style={{ display: 'inline', verticalAlign: 'middle' }}
                  />
                </IconWrapper>
                Valorização
              </>
            }
          >
            <LocationList>
              {LOCATION_INFO.valorizacao.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </LocationList>
          </AccordionItem>
        </Accordion>
      </LocationContent>
    </LocationContainer>
  );
};
