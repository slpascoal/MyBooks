import styled from 'styled-components'

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

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
  return (
    <OpcoesContainer>
      {textoOpcoes.map(texto => (
        <li key={texto} className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </OpcoesContainer>
  )
}

export default OpcoesHeader
