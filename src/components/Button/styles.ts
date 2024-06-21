import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

const buttonColors = (theme: DefaultTheme, buttonColor = 'primary') =>
  ({
    primary: css`
      color: ${theme['gray-100']};
      background: ${theme['green-500']};

      &:not(:disabled):hover {
        background: ${theme['green-700']};
      }
    `,
    danger: css`
      color: ${theme['gray-100']};
      background: ${theme['red-500']};

      &:not(:disabled):hover {
        background: ${theme['red-700']};
      }
    `,
  })[buttonColor]

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  border: none;
  outline: none;
  border-radius: 8px;
  transition: all 0.2s ease;

  cursor: pointer;
  padding: 1.6rem;
  width: 100%;

  font-weight: bold;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  //colors
  ${({ theme, color }) => buttonColors(theme, color)}
`
