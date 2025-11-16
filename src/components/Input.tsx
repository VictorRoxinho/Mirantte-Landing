import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e5e5;
  border-radius: 0.5rem;
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral['900']};
  background-color: ${theme.colors.neutral.white};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.light};
  }

  &::placeholder {
    color: ${theme.colors.neutral['600']};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e5e5;
  border-radius: 0.5rem;
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral['900']};
  background-color: ${theme.colors.neutral.white};
  transition: ${theme.transitions.default};
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.light};
  }

  &::placeholder {
    color: ${theme.colors.neutral['600']};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.neutral['900']};
  margin-bottom: 0.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.md};
`;
