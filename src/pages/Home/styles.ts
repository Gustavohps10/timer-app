import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.8rem;
`

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1.6rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 3.2rem;
  color: ${({ theme }) => theme['green-500']};

  width: 6.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 4rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.8rem;
  padding: 0 0.8rem;
  color: ${({ theme }) => theme['gray-100']};

  &:focus {
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
    text-align: center;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
