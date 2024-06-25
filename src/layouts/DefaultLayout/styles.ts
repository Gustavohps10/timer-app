import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 118.4rem;
  max-width: 90vw;
  padding: 4rem;

  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  position: relative;
  left: 0;
  margin: 0 auto;
  margin-top: 4rem;
`
