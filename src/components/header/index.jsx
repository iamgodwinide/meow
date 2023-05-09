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

            <ul>
                <li>
                    <a href='https://twitter.com/ShitCoinC3ntral'>
                        <img src="/twitter.png"/>
                    </a>
                </li>
                <li>
                    <a href='https://discord.gg/shitcoincentral'>
                        <img src="/twttttee234.png"/>
                    </a>
                </li>
                <li>
                    <a href='https://www.dextools.io/app/en/ether/pair-explorer/0xe975061bd5c279f1cba6aae50ca45e48e16585b5'>
                        <img src="/dextools.png"/>
                    </a>
                </li>
                <li>
                    <a href='https://etherscan.io/token/0x5d9175CF9ddDee49456402E9cae8Cf2C049E1bf9'>
                        <img src="/etherscan.png"/>
                    </a>
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
                <li>
                    <a href='https://discord.gg/shitcoincentral'>
                        <img src="/twttttee234.png"/>
                    </a>
                </li>
                <li>
                    <a href='https://www.dextools.io/app/en/ether/pair-explorer/0xe975061bd5c279f1cba6aae50ca45e48e16585b5'>
                        <img src="/dextools.png"/>
                    </a>
                </li>
                <li>
                    <a href='https://etherscan.io/token/0x5d9175CF9ddDee49456402E9cae8Cf2C049E1bf9'>
                        <img src="/etherscan.png"/>
                    </a>
                </li>
            </ul>
        </div>
        {/* mobile navigator  */}
    </div>
  )
}

export default Header