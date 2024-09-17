import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OpcoesContainer = styled.ul`
	display: flex;

	.opcao {
		font-size: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;
		padding: 0 5px;
		cursor: pointer;
		min-width: 120px;
	}

`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
  return (
    <OpcoesContainer>
      {textoOpcoes.map(texto => (
        <Link to={`/${texto.toLowerCase()}`}>
          <li key={texto} className="opcao">
            <p>{texto}</p>
          </li>
        </Link>
      ))}
    </OpcoesContainer>
  )
}

export default OpcoesHeader
