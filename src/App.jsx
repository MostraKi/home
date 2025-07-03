// App.jsx import Header from './components/Header'; import Footer from './components/Footer';
function App({ children }) { return ( 
{children} 
); } 
export default App;
// components/Header.jsx function Header() { return ( 
return (
  <div>
    <h1>Mostra Ki</h1>
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
  </div>
); }
export default Header;
// components/Footer.jsx function Footer() { return ( © 2025 MostraKi. Todos os direitos reservados. ); }
export default Footer;
// pages/Sobre.jsx import App from '../App';
function Sobre() { return ( 
Sobre o MostraKi
O MostraKi foi criado para oferecer estrutura prática e leve para quem deseja mostrar seu trabalho, produtos, álbuns ou ideias sem depender de plataformas complicadas ou visuais limitados.
É uma ferramenta de sobrevivência digna nesse mundo — para que possamos manter o foco em nossa missão maior, vivendo com leveza e organização.
); }
export default Sobre;
