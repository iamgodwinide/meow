import Header from './components/header'

function App() {

  return (
    <div className="App">
      <Header/>

      <main className='home' id='home'>
        <div className='two-section'>
          <div className='intro'>
            <h1>Shitcoin Central</h1>
            <img src="/IMG_1336.jpg" alt="" />
            <div className='social-links'>
              <a href='https://twitter.com/ShitCoinC3ntral'>
                <img src="/twitter.png"/>
              </a>
              <a href='https://discord.gg/shitcoincentral'>
                <img src="/twttttee234.png"/>
              </a>
            </div>
          </div>
        </div>
      </main>

      <hr />

      <section id='about' className='about'>
        <img className='a-img' src='/IMG_1086.png'/>
        <div className='wrap'>
          <h1>about</h1>
          <p>
            The coin for true degens, by true degens
          </p>
        </div>
      </section>

      <hr />

      <section id='tokenomics' className='token'>
        <h1>tokenomics</h1>
        <div className="two-section">
        <div className='first'>
          {/* <h2>
            Token Supply:
          </h2>
          <h2>
            420,690,000,000,000
          </h2> */}
          <div className="writeup">
            <p>
            50% FOR LP
            <br />
            10% for artists, developers and team and any future expenses
            <br />
            30% for marketing, expansion and buy backs
            <br />
            10% for any future necessary funds (vaulted funds)
            </p>
          </div>
        </div>
        <div>
          <img src='/IMG_1104.jpg'/>
        </div>
        </div>
      </section>

      <hr/>

      <section id='contact' className='contact'>
        <h1>Contact</h1>

        <h4>Shitcoin Central
        </h4>


        <div className="links">
          <a href='https://twitter.com/ShitCoinC3ntral'>
            <img src='/twtttt.png'/>
          </a>
          {/* <a href='#'>
            <img src='/twttttee2.png'/>
          </a> */}
          <a href='https://discord.gg/shitcoincentral'>
            <img src='/twttttee234.png'/>
          </a>
        </div>
      </section>

      <footer>
        © 2023 by Shitcoin Central. all rights reserved!
      </footer>

    </div>
  )
}

export default App
