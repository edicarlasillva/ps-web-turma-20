import styled from 'styled-components'

export const Title = styled.div`
  margin-bottom: 45px;

  h1 {
    color: ${(({ theme }) => theme.colors.title)};
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -1px;
  }

  span {
    color: ${(({ theme }) => theme.colors.textColor)};
    font-size: 16px;
    line-height: 24px;
  }
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`