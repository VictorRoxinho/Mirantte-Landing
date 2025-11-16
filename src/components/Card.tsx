import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Card = styled.div`
  background-color: ${theme.colors.neutral.white};
  border-radius: 1rem;
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  transition: ${theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md};
  }
`;

export const CardIcon = styled.div<{ color?: string }>`
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

export const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral['900']};
  margin-bottom: ${theme.spacing.sm};
`;

export const CardDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral['600']};
  line-height: 1.6;
`;
