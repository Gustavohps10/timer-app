import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

export type ButtonProps = {
  color?: 'primary' | 'danger'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
