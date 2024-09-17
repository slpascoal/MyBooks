import styled from 'styled-components'
import { Pesquisa } from '../componentes/Pesquisa'

const AppContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    display:flex;
    flex-direction: column;
    gap: 20px;
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  )
}

export default Favoritos
