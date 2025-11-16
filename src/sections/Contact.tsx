import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { theme } from '../styles/theme';
import { CONTACT } from '../lib/constants';
import { openWhatsApp, sendToWebhook } from '../lib/utils';

const ContactContainer = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 800px;
    height: 800px;
    background: radial-gradient(
      circle,
      rgba(217, 119, 6, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xxl} 1.5rem;
  }
`;

const ContactContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${theme.colors.neutral.white};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4rem;
  line-height: 1.7;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FormCard = styled.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: ${theme.colors.neutral.white};
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: ${theme.colors.neutral.white};
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: ${theme.colors.neutral.white};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const ErrorMessage = styled.span`
  color: #fca5a5;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
  color: ${theme.colors.neutral.white};
  border: none;
  padding: 1.2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(217, 119, 6, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(217, 119, 6, 0.5);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  padding: ${theme.spacing.md};
  background: rgba(5, 150, 105, 0.2);
  border: 1px solid rgba(5, 150, 105, 0.3);
  color: #6ee7b7;
  border-radius: 12px;
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  font-weight: 500;
`;

const ContactCardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(10px);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

const ContactCardIcon = styled.div<{ $color: string }>`
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    ${(props) => props.$color}30 0%,
    ${(props) => props.$color}20 100%
  );
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${(props) => props.$color};

  svg {
    width: 28px;
    height: 28px;
  }
`;

const ContactCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${theme.colors.neutral.white};
  margin-bottom: 0.5rem;
`;

const ContactCardText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
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
    await sendToWebhook(data, CONTACT.webhookUrl);

    const message = `Olá! Meu nome é ${data.name}. ${data.message}\n\nE-mail: ${data.email}\nTelefone: ${data.phone}`;
    openWhatsApp(CONTACT.whatsapp, message);

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
        <SectionTitle>Vamos conversar?</SectionTitle>
        <SectionSubtitle>
          Preencha o formulário ou escolha a forma que preferir pra falar com a
          gente
        </SectionSubtitle>

        <ContactGrid>
          <FormCard onSubmit={handleSubmit(onSubmit)}>
            {showSuccess && (
              <SuccessMessage>
                Mensagem enviada com sucesso! Redirecionando para o WhatsApp...
              </SuccessMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Como você se chama?"
                {...register('name', { required: true })}
              />
              {errors.name && <ErrorMessage>Campo obrigatório</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">E-mail</Label>
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
                <ErrorMessage>E-mail válido obrigatório</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(71) 99999-9999"
                {...register('phone', { required: true })}
              />
              {errors.phone && <ErrorMessage>Campo obrigatório</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                placeholder="Conta pra gente o que você está procurando..."
                {...register('message')}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </SubmitButton>
          </FormCard>

          <ContactCardsGrid>
            <ContactCard onClick={handleWhatsAppClick}>
              <ContactCardIcon $color="#059669">
                <MessageCircle />
              </ContactCardIcon>
              <ContactCardTitle>WhatsApp</ContactCardTitle>
              <ContactCardText>{CONTACT.whatsappFormatted}</ContactCardText>
            </ContactCard>

            <ContactCard onClick={handleEmailClick}>
              <ContactCardIcon $color="#2563eb">
                <Mail />
              </ContactCardIcon>
              <ContactCardTitle>E-mail</ContactCardTitle>
              <ContactCardText>{CONTACT.email}</ContactCardText>
            </ContactCard>

            <ContactCard>
              <ContactCardIcon $color="#d97706">
                <MapPin />
              </ContactCardIcon>
              <ContactCardTitle>Venha nos visitar</ContactCardTitle>
              <ContactCardText>{CONTACT.location}</ContactCardText>
            </ContactCard>
          </ContactCardsGrid>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};
