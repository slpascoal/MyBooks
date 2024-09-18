import styled from 'styled-components'
import livroImg from '../images/livro1.png'
import { useEffect, useState } from 'react'
import { getFavoritos } from '../services/favoritos'

const AppContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    display:flex;
    flex-direction: column;
    gap: 20px;
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    transition: 0.4s;
    p {
        width: 200px;
        text-align: center;
        color: white;
        margin: 0;
    }
    img {
        width: 100px;
    }
    &:hover {
        transform: scale(1.05);
        transition: 0.4s;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
`

const BotaoExcluir = styled.button`
  cursor: pointer;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosAPI = await getFavoritos()
    setFavoritos(favoritosAPI)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {favoritos.length !== 0
            ? favoritos.map(favorito => (
                <Resultado>
                  <p>{favorito.nome}</p>
                  <img src={livroImg} alt={favorito.nome} />
                  <BotaoExcluir type="button">Excluir</BotaoExcluir>
                </Resultado>
              ))
            : null}
        </ResultadoContainer>
      </div>
    </AppContainer>
  )
}

export default Favoritos
