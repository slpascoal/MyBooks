import './App.css';
import { IconesHeader } from './components/IconesHeader';
import Logo from './components/Logo';
import OpcoesHeader from './components/OpcoesHeader';
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'


const icones = [ perfil, sacola ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
        
      </header>
    </div>
  );
}

export default App;