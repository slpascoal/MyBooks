import { Input } from '../Input'
import style from 'styled-components'

const PesquisaContainer = style.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = style.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = style.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

export function Pesquisa() {
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livo em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => console.log(evento.target.value)}
      />
    </PesquisaContainer>
  )
}
