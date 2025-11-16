import styled from 'styled-components';
import { MapPin, Home, Star } from 'lucide-react';
import { theme } from '../styles/theme';
import { Card, CardIcon, CardTitle, CardDescription } from '../components/Card';

const AboutContainer = styled.section`
  background-color: ${theme.colors.neutral['50']};
  padding: ${theme.spacing.xxxl} 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1280px;
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

const SectionDescription = styled.div`
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xxl};
  text-align: center;

  p {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.neutral['600']};
    line-height: 1.8;
    margin-bottom: ${theme.spacing.md};

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.typography.fontSize.base};
    }
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>Um novo conceito de morar</SectionTitle>
        <SectionDescription>
          <p>
            O Mirantte representa a combinação perfeita entre localização
            privilegiada e infraestrutura completa, proporcionando qualidade de
            vida a poucos metros do mar.
          </p>
          <p>
            Com design moderno e funcional, oferecemos studios e apartamentos
            que atendem desde jovens profissionais até investidores em busca de
            oportunidades.
          </p>
          <p>
            Venha descobrir um novo estilo de vida no coração do Costa Azul,
            onde tudo o que você precisa está ao seu alcance.
          </p>
        </SectionDescription>

        <CardsGrid>
          <Card>
            <CardIcon color={theme.colors.primary.light}>
              <MapPin />
            </CardIcon>
            <CardTitle>Localização Privilegiada</CardTitle>
            <CardDescription>
              A poucos metros da praia do Costa Azul, com acesso rápido a
              shoppings, restaurantes e principais vias da cidade.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon color={theme.colors.secondary.light}>
              <Home />
            </CardIcon>
            <CardTitle>Tipologias Inteligentes</CardTitle>
            <CardDescription>
              Studios de 21m² e apartamentos de até 33m², projetados para
              aproveitar cada espaço com máxima funcionalidade.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon color="#dbeafe">
              <Star />
            </CardIcon>
            <CardTitle>Infraestrutura Completa</CardTitle>
            <CardDescription>
              Piscina rooftop, academia, coworking, espaço gourmet e muito mais.
              Tudo pensado para seu bem-estar e conveniência.
            </CardDescription>
          </Card>
        </CardsGrid>
      </AboutContent>
    </AboutContainer>
  );
};
