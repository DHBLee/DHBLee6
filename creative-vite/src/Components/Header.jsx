import {useState, React} from 'react'
import ReactDOM from 'react-dom'
import logoImg from '../assets/desktop/logo.svg';
import menuImg from '../assets/mobile/icon-hamburger.svg';
import closeImg from '../assets/mobile/icon-cross.svg';
import Button from './Button';

const Header = ({padding}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header className={`relative ${padding} py-[40px] md:py-[73px] flex justify-between items-center`}>
        <img src={logoImg} alt="" />

        <div className="hidden md:block absolute inset-y-0 right-0 w-[56%] bg-Red -z-10"></div>

        <nav className='hidden md:flex items-center gap-5 md:gap-7 1440:gap-8 text-White'>
            <a href="" className="header_links">About</a>
            <a href="" className="header_links">Service</a>
            <a href="" className="header_links">Projects</a>
            <Button extraStyle="bg-Red md:bg-BlackBg !px-5 1440:ml-[10px]">
              Schedule a Call
            </Button>
        </nav>
        
        <div className="md:hidden">  
          <button onClick={() => setNavIsOpen(prevState => !prevState )}>
            {navIsOpen ?
                <img src={closeImg} alt="" />
              :
                <img src={menuImg} alt="" />
            }
          </button>
        </div>
        

        {navIsOpen && ReactDOM.createPortal(
          <nav className="nav_text">
            <a href="" className="header_links">About</a>
            <a href="" className="header_links">Service</a>
            <a href="" className="header_links">Projects</a>
            <Button extraStyle="bg-Red md:bg-BlackBg">
              Schedule a Call
            </Button>
          </nav>,
          document.getElementById('mobile-nav-portal')
        )}
    </header>

  )
}

export default Header