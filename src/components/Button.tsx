import styled from 'styled-components';
import { theme } from '../styles/theme';

interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'outline';
  $size?: 'small' | 'medium' | 'large';
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: 0.5rem;
  transition: ${theme.transitions.default};
  white-space: nowrap;

  /* Sizes */
  ${(props) => {
    switch (props.$size) {
      case 'small':
        return `
          padding: 0.5rem 1rem;
          font-size: ${theme.typography.fontSize.sm};
        `;
      case 'large':
        return `
          padding: 1rem 2rem;
          font-size: ${theme.typography.fontSize.lg};
        `;
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: ${theme.typography.fontSize.base};
        `;
    }
  }}

  /* Variants */
  ${(props) => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary.main};
          color: ${theme.colors.neutral.white};
          
          &:hover {
            background-color: ${theme.colors.secondary.hover};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.neutral.white};
          border: 2px solid ${theme.colors.neutral.white};
          
          &:hover {
            background-color: ${theme.colors.neutral.white};
            color: ${theme.colors.primary.main};
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.neutral.white};
          
          &:hover {
            background-color: ${theme.colors.primary.hover};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
    }
  }}
  
  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
