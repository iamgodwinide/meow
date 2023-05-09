import Header from './components/header'

function App() {

  return (
    <div className="App">
      <Header/>

      <main className='home' id='home'>
        <div className='two-section'>
          <div className='intro'>
            <img src="/IMG_1336.jpg" alt="" />
          </div>
        </div>
      </main>

      <section id='about' className='about'>
      <div className='wrap'>
          <h1>ABOUT</h1>
          <p>
          Shitcoin Central is the home of shitcoin degens on their way to glory with constant alpha calls, laughs, and wins. The coin for true degens, by true degens.
          <br />
          <br />
          TOKEN ADDRESS: 0x5d9175CF9ddDee49456402E9cae8Cf2C049E1bf9
          </p>
        </div>
        <img className='a-img' src='/IMG_1086.png'/>
      </section>

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
            50% to LP (ETH)
            <br />
            10% to artists, developers, team and any future expenses team wise (ETH)
            <br />
            30% for all marketing expenses and buy backs (paid shills, campaigns etc) (ETH)
            <br />
            5% for airdrops for the OGS  (BUY BACK WITH 5% OF THE ETH TO BE AIRDROPPED TO COMMUNITY)
            <br />
            5% Ambassador program and community managers
            </p>

          </div>
        </div>
        </div>
      </section>

      <section id='contact' className='contact'>

        <img className='meme' src='/IMG_1104.jpg'/>


        <h1>Contact</h1>

        <h4>Shitcoin Central
        </h4>


        <div className="links">
          <a href='https://twitter.com/ShitCoinC3ntral'>
            <img src='/twtttt.png'/>
          </a>
          <a href='https://discord.gg/shitcoincentral'>
            <img src='/twttttee234.png'/>
          </a>
          <a href='https://www.dextools.io/app/en/ether/pair-explorer/0xe975061bd5c279f1cba6aae50ca45e48e16585b5'>
              <img src="/dextools.png"/>
          </a>
          <a href='https://etherscan.io/token/0x5d9175CF9ddDee49456402E9cae8Cf2C049E1bf9'>
              <img src="/etherscan.png"/>
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
