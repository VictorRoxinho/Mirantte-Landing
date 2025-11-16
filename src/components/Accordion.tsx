import { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';
import { theme } from '../styles/theme';

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionItemWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;

  &:first-child {
    border-top: 1px solid #e5e5e5;
  }
`;

const AccordionHeader = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: ${theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: ${theme.transitions.default};

  &:hover {
    background-color: ${theme.colors.neutral['50']};
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    color: ${theme.colors.primary.main};
  }
`;

const AccordionTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.neutral['900']};
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${(props) => (props.$isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const AccordionBody = styled.div`
  padding: 0 ${theme.spacing.md} ${theme.spacing.md};
  color: ${theme.colors.neutral['600']};
  line-height: 1.6;
`;

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItemWrapper>
      <AccordionHeader $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <AccordionTitle>{title}</AccordionTitle>
        <ChevronDown size={24} />
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen}>
        <AccordionBody>{children}</AccordionBody>
      </AccordionContent>
    </AccordionItemWrapper>
  );
};

export const Accordion: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <AccordionContainer>{children}</AccordionContainer>;
};
