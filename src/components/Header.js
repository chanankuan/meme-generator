import trollFace from '../assets/images/troll-face.svg';
import '../assets/styles/Header.css';

export default function Header() {
  return (
    <header className='header'>
      <img className='header--image' src={trollFace} alt='Troll Face' />
      <p className='header--title'>Meme Generator</p>
      <p className='header--project'>React Course - Project 3</p>
    </header>
  );
}
