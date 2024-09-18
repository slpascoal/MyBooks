import { CardRecomenda } from '../CardRecomenda'
import { Titulo } from '../Titulo'
import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import livroRecomendado from '../../images/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10px;

    img{
        cursor: pointer;
    }

`

export function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo color="#EB9B00" tamanhoFonte="36px">
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} alt={livro.nome} key={livro.id} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={livroRecomendado}
      />
    </UltimosLancamentosContainer>
  )
}
