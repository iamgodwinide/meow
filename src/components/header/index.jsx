import React, { useRef, useState } from 'react'
import './style.css'

function Header() {
  const [show, setShow] = useState(false);
  const menu = useRef();

  const handleOpen = () => {
    menu.current.classList.remove("hide");
  }

  const handleClose = () => {
    menu.current.classList.add("hide");
  }


  return (
    <div>
        {/* desktop navigator start */}
        <nav className='desktop-header'>
            <a href='/' className='brand'>
                <img src='/logo.png'/>
                Shitcoin Central
            </a>

            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#tokenomics'>Tokenomics</a>
                </li>
            </ul>
        </nav>
        {/* desktop navigator end */}

        {/* mobile navigator  */}
        <nav className='mobile-header'>
            <a href="#" className="brand-logo">
                <img src="/logo.png" alt="" />
                Shitcoin Central
            </a>

            <i onClick={handleOpen} class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </nav>

        <div ref={menu} className="mobile-menu hide">
            <i onClick={handleClose} class="fa fa-times fa-2x" aria-hidden="true"></i>
            <ul>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#tokenomics'>Tokenomics</a>
                </li>
            </ul>
        </div>
        {/* mobile navigator  */}
    </div>
  )
}

export default Header