import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { Container, Wrapper } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
      <Footer />
    </>
  )
}
