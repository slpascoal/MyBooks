import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const IconesHeaderContainer = styled.ul`
	display: flex;
	align-items: center;
`

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icones = [perfil, sacola]

function IconesHeader() {
  return (
    <IconesHeaderContainer>
      {icones.map(icone => (
        <Icone key={icone}>
          <img src={icone} alt="icone"></img>
        </Icone>
      ))}
    </IconesHeaderContainer>
  )
}

export default IconesHeader
