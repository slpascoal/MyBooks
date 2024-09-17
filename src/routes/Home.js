import styled from 'styled-components'
import { Pesquisa } from '../components/Pesquisa'
import { UltimosLancamentos } from '../components/UltimosLancamentos'

const AppContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    display:flex;
    flex-direction: column;
    gap: 20px;
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  )
}

export default Home
