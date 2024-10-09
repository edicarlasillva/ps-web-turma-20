import styled from 'styled-components'

interface CategoryProps {
  category: string
}

const categoryColors: Record<string, string> = {
  Beleza: '#ff7675',
  Moda: '#3295B4',
  Lifestyle: '#00b894',
  Viagem: '#d63031',
  'Art & Design': '#74b9ff'
}

export const ContainerList = styled.div<CategoryProps>`
  .category {
    font-size: 13px;
    margin-top: 20px;
    line-height: 20px;
    color: ${({ category }) => categoryColors[category]};

    span {
      font-style: italic;
      color: ${(({ theme }) => theme.colors.textColor)};
    }
  }

  .title {
    color: ${(({ theme }) => theme.colors.title)};
    font-size: 28px;
    line-height: 30px;
    letter-spacing: -1px;
  }

  .post-info {
    margin: 20px 0;
    display: flex;
    gap: 10px;

    img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    .author {
      color: ${(({ theme }) => theme.colors.title)};
      font-size: 13px;
      line-height: 20px;
    }

    span {
      color: ${(({ theme }) => theme.colors.textColor)};
      font-size: 13px;
      line-height: 20px;
    }
  }

  .description {
    color: ${(({ theme }) => theme.colors.textColor)};
    font-size: 14px;
    line-height: 20px;
  }
`