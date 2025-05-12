import './Imagem.css';
import logo from '../../public/vite.svg'; // ou coloque sua própria imagem na pasta public

function Imagem() {
  return <img src={logo} alt="Logo Vite" className="imagem" />;
}

export default Imagem;
