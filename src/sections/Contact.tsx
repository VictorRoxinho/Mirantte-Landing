import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { theme } from '../styles/theme';
import { Button } from '../components/Button';
import { Input, Textarea, Label, FormGroup } from '../components/Input';
import { Card } from '../components/Card';
import { CONTACT } from '../lib/constants';
import { openWhatsApp, sendToWebhook } from '../lib/utils';

const ContactContainer = styled.section`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary.light} 0%,
    ${theme.colors.orange.light} 100%
  );
  padding: ${theme.spacing.xxxl} 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const ContactContent = styled.div`
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

const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral['600']};
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const FormCard = styled(Card)`
  background-color: ${theme.colors.neutral.white};
`;

const ContactCardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const ContactCard = styled(Card)`
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.neutral['50']};
  }
`;

const CardIconWrapper = styled.div<{ color?: string }>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.md};
  background-color: ${(props) => props.color || theme.colors.primary.light};
  color: ${(props) => {
    if (props.color === theme.colors.secondary.light)
      return theme.colors.secondary.main;
    if (props.color === '#dbeafe') return theme.colors.blue;
    return theme.colors.primary.main;
  }};

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral['900']};
  margin-bottom: ${theme.spacing.sm};
`;

const CardDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral['600']};
  line-height: 1.6;
`;

const SuccessMessage = styled.div`
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.secondary.light};
  color: ${theme.colors.secondary.main};
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.medium};
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [showSuccess, setShowSuccess] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    // Enviar para webhook
    await sendToWebhook(data, CONTACT.webhookUrl);

    // Abrir WhatsApp com mensagem
    const message = `Olá! Meu nome é ${data.name}. ${data.message}\n\nE-mail: ${data.email}\nTelefone: ${data.phone}`;
    openWhatsApp(CONTACT.whatsapp, message);

    // Mostrar mensagem de sucesso
    setShowSuccess(true);
    reset();

    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(
      CONTACT.whatsapp,
      'Olá! Gostaria de mais informações sobre o Mirantte.'
    );
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT.email}`;
  };

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <SectionTitle>Entre em contato</SectionTitle>
        <SectionSubtitle>
          Preencha o formulário ou escolha uma das opções de contato abaixo
        </SectionSubtitle>

        <ContactGrid>
          <FormCard>
            {showSuccess && (
              <SuccessMessage>
                Mensagem enviada com sucesso! Redirecionando para o WhatsApp...
              </SuccessMessage>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>
                    Campo obrigatório
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>
                    E-mail válido obrigatório
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(71) 99999-9999"
                  {...register('phone', { required: true })}
                />
                {errors.phone && (
                  <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>
                    Campo obrigatório
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu interesse no Mirantte..."
                  {...register('message')}
                />
              </FormGroup>

              <Button
                type="submit"
                $variant="primary"
                $size="large"
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </FormCard>

          <ContactCardsGrid>
            <ContactCard onClick={handleWhatsAppClick}>
              <CardIconWrapper color={theme.colors.secondary.light}>
                <MessageCircle />
              </CardIconWrapper>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>{CONTACT.whatsappFormatted}</CardDescription>
            </ContactCard>

            <ContactCard onClick={handleEmailClick}>
              <CardIconWrapper color="#dbeafe">
                <Mail />
              </CardIconWrapper>
              <CardTitle>E-mail</CardTitle>
              <CardDescription>{CONTACT.email}</CardDescription>
            </ContactCard>

            <ContactCard>
              <CardIconWrapper color={theme.colors.primary.light}>
                <MapPin />
              </CardIconWrapper>
              <CardTitle>Localização</CardTitle>
              <CardDescription>{CONTACT.location}</CardDescription>
            </ContactCard>
          </ContactCardsGrid>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};
