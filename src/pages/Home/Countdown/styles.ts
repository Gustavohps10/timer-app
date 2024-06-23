import styled from 'styled-components'

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
