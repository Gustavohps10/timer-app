import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 40px;
    height: 40px;
  }

  nav {
    display: flex;
    gap: 0.8rem;

    a {
      position: relative;
      width: 4.8rem;
      height: 4.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      outline: none;
      border: none;
      color: ${({ theme }) => theme['gray-100']};

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        left: 0;
        bottom: 0;
        height: 3px;
        background-color: ${({ theme }) => theme['green-500']};
      }

      &:hover::after {
        transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
        width: 100%;
      }
    }
  }
`
