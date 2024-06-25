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
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
`
