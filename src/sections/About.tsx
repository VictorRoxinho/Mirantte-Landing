import styled from 'styled-components';
import { theme } from '../styles/theme';

const AboutContainer = styled.section`
  background: #fff;
  padding: 6rem 2rem 8rem;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 4rem 1.5rem 5rem;
  }
`;

const AboutContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextBlock = styled.div``;

const Eyebrow = styled.span`
  display: inline-block;
  color: ${theme.colors.primary.main};
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Headline = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #0a0a0a;
  line-height: 1.15;
  margin-bottom: 1.5rem;

  strong {
    color: ${theme.colors.primary.main};
    font-weight: 800;
  }
`;

const Description = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 2rem;

  strong {
    color: #0a0a0a;
    font-weight: 600;
  }
`;

const StatsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
`;

const StatItem = styled.div`
  border-left: 3px solid ${theme.colors.primary.main};
  padding-left: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${theme.colors.primary.main};
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  color: #666;
  font-weight: 500;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 500px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 400px;
  }
`;

const ImageBox = styled.div<{ $large?: boolean; $image: string }>`
  background: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  grid-row: ${(props) => (props.$large ? 'span 2' : 'span 1')};

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.3));
  }
`;

const DifferentialSection = styled.div`
  margin-top: 6rem;
  text-align: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 4rem;
  }
`;

const DifferentialTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #0a0a0a;
  margin-bottom: 3rem;
`;

const DifferentialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const DifferentialCard = styled.div`
  text-align: left;
`;

const DifferentialNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${theme.colors.primary.main};
  opacity: 0.15;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const DifferentialCardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #0a0a0a;
  margin-bottom: 0.75rem;
`;

const DifferentialCardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

export const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <MainContent>
          <TextBlock>
            <Eyebrow>Costa Azul, Salvador</Eyebrow>
            <Headline>
              O lugar que você <strong>sempre quis morar</strong> está aqui
            </Headline>
            <Description>
              Imagina acordar a <strong>300 metros da praia</strong>, tomar café
              na varanda e decidir se vai trabalhar no coworking ou relaxar no
              rooftop com piscina? No Mirantte, isso é só mais um dia normal.
            </Description>
            <Description>
              Não é só um apartamento. É <strong>liberdade</strong> pra viver do
              seu jeito, sem depender de carro, com tudo que importa pertinho —
              e ainda sobra tempo pro que realmente vale a pena.
            </Description>

            <StatsList>
              <StatItem>
                <StatNumber>300m</StatNumber>
                <StatLabel>da praia do Costa Azul</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>13+</StatNumber>
                <StatLabel>áreas de lazer completas</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>5 min</StatNumber>
                <StatLabel>de shoppings e mercados</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>100%</StatNumber>
                <StatLabel>pensado pra você</StatLabel>
              </StatItem>
            </StatsList>
          </TextBlock>

          <ImageGrid>
            <ImageBox $large $image="/Rooftop.webp" />
            <ImageBox $image="/Lobby.webp" />
            <ImageBox $image="/Espaço gourmet.webp" />
          </ImageGrid>
        </MainContent>

        <DifferentialSection>
          <DifferentialTitle>
            Por que o Mirantte é diferente de tudo?
          </DifferentialTitle>
          <DifferentialGrid>
            <DifferentialCard>
              <DifferentialNumber>01</DifferentialNumber>
              <DifferentialCardTitle>
                Localização estratégica
              </DifferentialCardTitle>
              <DifferentialCardText>
                Costa Azul é o bairro que mais valoriza em Salvador. Você não tá
                só morando bem — tá investindo no futuro.
              </DifferentialCardText>
            </DifferentialCard>

            <DifferentialCard>
              <DifferentialNumber>02</DifferentialNumber>
              <DifferentialCardTitle>Rooftop de resort</DifferentialCardTitle>
              <DifferentialCardText>
                Piscina, churrasqueira, lounge, vista pro mar. Final de semana
                aqui é evento — sem sair de casa.
              </DifferentialCardText>
            </DifferentialCard>

            <DifferentialCard>
              <DifferentialNumber>03</DifferentialNumber>
              <DifferentialCardTitle>Zero desperdício</DifferentialCardTitle>
              <DifferentialCardText>
                Cada metro foi projetado com inteligência. Studios e
                apartamentos que aproveitam TUDO, sem espaço perdido.
              </DifferentialCardText>
            </DifferentialCard>
          </DifferentialGrid>
        </DifferentialSection>
      </AboutContent>
    </AboutContainer>
  );
};
