import Header from './components/header'

function App() {

  return (
    <div className="App">
      <Header/>

      <main className='home' id='home'>
        <div className='two-section'>
          <div className='intro'>
            <h1>meow</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam accusamus non cupiditate, sint quisquam a optio ab inventore corrupti.</p>
            <div className='social-links'>
              <a href='#'>
                <img src="/twitter.png"/>
              </a>
              <a href='#'>
                <img src="/telg.png"/>
              </a>
              <a href='#'>
                <img src="/uniswap.png"/>
              </a>
              <a href='#'>
                <img src="/etherscan.png"/>
              </a>
              <a href='#'>
                <img src="/dextools.png"/>
              </a>
              <a href='#'>
                <img src="/cm c.png"/>
              </a>
            </div>
          </div>
          <div className='img-wrap'>
            <img src='/cat.png' />
          </div>
        </div>
        <div className='store-links'>
          <a href='#'>buy on unizwap
          <img src='/uniswap.png'/>
          </a>
          <a href='#'>buy on okx dex
            <img src='/uniswap.png'/>
          </a>
          <a href='#'>see chart
          <img src='/dextools.png'/>
          </a>
      </div>
      </main>

      <hr />

      <section id='about' className='about'>
        <img src='/cat.png'/>
        <div>
          <h1>about</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sit quisquam veritatis ipsa numquam deserunt quasi consequuntur natus ipsam. Dicta nihil fugit voluptatum saepe tempora ad accusamus laboriosam dolore impedit?</p>
        </div>
      </section>

      <hr />

      <section id='howto' className='howto'>
        <h1>how to buy</h1>

        <div className='item'>
          <img src="/one.png" alt="" />
          <div>
            <h2>create a wallet</h2>
            <p>download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
          </div>
        </div>

        <div className='item'>
          <img src="/two.webp" alt="" />
          <div>
            <h2>Get Some ETH</h2>
            <p>download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
          </div>
        </div>

        <div className='item'>
          <img src="/uniswap.png" alt="" />
          <div>
            <h2>Go to Uniswap</h2>
            <p>download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
          </div>
        </div>

        <div className='item'>
          <img src="/three.webp" alt="" />
          <div>
            <h2>Switch ETH for $PEPE</h2>
            <p>download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
          </div>
        </div>
      </section>

      <hr />

      <section id='token' className='token'>
        <h1>tokenomics</h1>
        <div className="two-section">
        <div className='first'>
          <h2>
            Token Supply:
          </h2>
          <h2>
            420,690,000,000,000
          </h2>
          <div className="writeup">
            <p>
              No Taxes, No Bullshit. It’s that simple. 
              <br/>
              <br/>
              <br/>
              93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 6.9% of the supply is being held in a multi-sig team wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is easily trackable with the ENS name “pepecexwallet.eth”
            </p>
          </div>
        </div>
        <div>
          <img src='/cat.png'/>
        </div>
        </div>
      </section>

      <hr/>

      <section id='contact' className='contact'>
        <h1>Contact</h1>

        <h4>Meow
          <img src="/cat.png" alt="" />
        </h4>

        <p>email: cat@meow.xyz</p>

        <div className="links">
          <a href='#'>
            <img src='/twtttt.png'/>
          </a>
          <a href='#'>
            <img src='/twttttee2.png'/>
          </a>
          <a href='#'>
            <img src='/twttttee234.png'/>
          </a>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cumque illo nihil dolore alias error in hic fugiat quibusdam reprehenderit.</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum cumque illo nihil dolore alias error in hic fugiat quibusdam reprehenderit.</p>

      </section>

      <footer>
        © 2023 by meow. all rights reserved!
      </footer>

    </div>
  )
}

export default App
