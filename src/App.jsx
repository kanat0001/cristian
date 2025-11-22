import { useState } from 'react'; // Import useState hook
import './App.css';
import './css/header.css'
import Circle from './components/Circle'
import './css/slills.css'
import './css/AboutMe.css'
import Slider from './components/slider'
// import avatarLogo from './assets/3dc9bae4b2edc168bd2fd8ef0e2a7039fa12f31b.png'

function App() {
  // 1. State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    const slides = [
    <div>Слайд 1</div>,
    <div>Слайд 2</div>,
    <div>Слайд 3</div>,
    <div>Слайд 4</div>,
  ];
  return (
    <div className='main'>

      <header>
        <nav>
          <div className='nav__left'>
            <a href="" className='logo'>
              <img src="/3dc9bae4b2edc168bd2fd8ef0e2a7039fa12f31b.png" alt="" className='avatar' />
              <span>Cristian Muñoz</span>
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <ul className='nav__centr nav__desktop'>
            <li><a href="">Home</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Portfollio</a></li>
            <li><a href="">Blog</a></li>
          </ul>

          <div className='nav__right nav__desktop'>
            <button className='contact-btn'>Contact me</button>
          </div>

          {/* 2. Burger Button - Shown on mobile */}
          <button className='burger-btn' onClick={toggleMenu} aria-label="Toggle navigation menu">
            <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
          </button>
        </nav>
      </header>

      {/* 3. Mobile Menu Panel - Conditional class for animation */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className='mobile-nav__list'>
          <li><a href="" onClick={toggleMenu}>Home</a></li>
          <li><a href="" onClick={toggleMenu}>Skills</a></li>
          <li><a href="" onClick={toggleMenu}>Portfollio</a></li>
          <li><a href="" onClick={toggleMenu}>Blog</a></li>
        </ul>
        <button className='contact-btn mobile-contact-btn' onClick={toggleMenu}>Contact me</button>
      </div>


      <main>
        <section className='home'>
          <div className='home__right'>
            <h1>Hi, I am <br /> <img src="/Highlight_05.svg" alt="" className='highlight' /> Cristian <img src="/1F3A8.webp" alt="" className='palette' /></h1>
            <p>I am a UI/UX Designer, I like to make interfaces simple 
              and aesthetically pleasing for users; The idea is not to 
              create an interface for creating it, it is that users 
              prefer you because your product is easy to use.</p>
            <button>¡Contact Me! <img src="/arrow-circle-right.svg" alt="" /></button>
            <img src="/Arrow_01.svg" alt="" className='home__right-arrow' />
          </div>
          <div className='home__left'>
            <img src="/public/Allura UI Windows.svg" alt="" className='home__left-img' />
          </div>
        </section>



        <section className='skills'>
          <div>
            <img src="/Skills.svg" alt="" className=''/>
          </div>
        <div className='circle__wrapper'>
          <div className='circle'>
            <Circle percent={90} />
            <p>Figma / Adobe XD</p>
          </div>
          <div className='circle'>
            <Circle percent={80} />
            <p>Figma / Adobe XD</p>
          </div>
          <div className='circle'>
            <Circle percent={80} />
            <p>Figma / Adobe XD</p>
          </div>
          <div className='circle'>
            <Circle percent={70} />
            <p>Figma / Adobe XD</p>
          </div>
          <div className='circle'>
            <Circle percent={70} />
            <p>Figma / Adobe XD</p>
          </div>
          <div className='circle'>
            <Circle percent={70} />
            <p>Figma / Adobe XD</p>
          </div>
          <div className='circle'>
            <Circle percent={70} />
            <p>Figma / Adobe XD</p>
          </div>
          <div className='circle'>
            <Circle percent={70} />
            <p>Figma / Adobe XD</p>
          </div>
          
        </div>

        </section>


        <section className='about-me'>
          <div className='about-me__main'>
            <h2 className=''>
              about me
            </h2>
            <div className='dots'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
            <div className='about-me__content'>
              <div className='about-me__icon-left'>
                <img src="/public/medal-star.svg"   alt="" />
                <p className='about-me__icon-percent'>100%</p>
                <p className='about-me__icon-text'>Responsibility</p>
              </div>

              <div className='about-me__img'>
                <img src="/public/Group 27.svg" alt="" />
              </div>
              
              <div className='about-me__icon-right'>
                <img src="/public/Icono.svg" alt="" />
                <p className='about-me__icon-percent'>100%</p>
                <p className='about-me__icon-text'>Puntuality</p>
                
              </div>
              <img src="/public/Highlight_04.svg" alt="" className='about-me__forgot'/>
              
            </div>
            <div className='dots2'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
            
          </div>
          


        </section>

        <section className='portfolio'>
          <div className='blocks'>
            <h2 className='porfolio__title'>
              Portfolio
            </h2>
            <img src="/public/Underline_06.svg" alt="" className='portfolio__underline' />
          </div>
          <div>
            <div>
              <Slider slider={slides}/>
            </div>
          </div>
        </section>



        
      </main>
      <footer className='footer'>
        <div className='social'>
          <a href="" className='link'><img src="/instagram.svg" alt="" /></a>
          <a href="" className='link'><img src="/facebook.svg" alt="" /></a>
          <a href="" className='link'><img src="/linkedin.svg" alt="" /></a>
          <a href="" className='link'><img src="/twitter.svg" alt="" /></a>
        </div>
        <div className='footer-text'>
          <p>Cristian David Muñoz Camayo @tianmunooz © 2022</p>
        </div>

        <div className='dots3'>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
        </div>


        <div className='dots4'>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>
          <div className='dot1'></div>

        </div>
              

            
      </footer>

    </div>
  )
}

export default App