import styled from 'styled-components'

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.125rem;
  margin-top: 20px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: -1px;
  margin-top: 30px;
`