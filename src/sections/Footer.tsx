import styled from 'styled-components';
import { theme } from '../styles/theme';
import { CONTACT } from '../lib/constants';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.neutral['900']};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.xxl} 2rem ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} 1.5rem ${theme.spacing.md};
  }
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xxl};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary.main};
`;

const FooterText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral.white};
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.sm};
`;

const FooterLink = styled.a`
  display: block;
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral.white};
  opacity: 0.8;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: ${theme.transitions.default};

  &:hover {
    opacity: 1;
    color: ${theme.colors.primary.main};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.7;
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>MIRANTTE</FooterTitle>
            <FooterText>
              Viva a poucos metros do mar no coração do Costa Azul, Salvador/BA.
              Um novo conceito de morar com infraestrutura completa.
            </FooterText>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Empreendimento</FooterTitle>
            <FooterText>
              <strong>Construtora:</strong> [Nome da Construtora]
            </FooterText>
            <FooterText>
              <strong>Arquitetura:</strong> [Nome do Escritório]
            </FooterText>
            <FooterText>
              <strong>Incorporação:</strong> [Registro]
            </FooterText>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <FooterLink
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: {CONTACT.whatsappFormatted}
            </FooterLink>
            <FooterLink href={`mailto:${CONTACT.email}`}>
              E-mail: {CONTACT.email}
            </FooterLink>
            <FooterText>{CONTACT.location}</FooterText>
          </FooterColumn>
        </FooterGrid>

        <Copyright>
          © {currentYear} Mirantte. Todos os direitos reservados. | Imagens
          meramente ilustrativas.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};
