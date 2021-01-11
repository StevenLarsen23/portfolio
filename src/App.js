import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="name">
          <img className='portfolio-img' src='images/StevenLarsen.jpg' alt="Steven Larsen's portfolio picture"/>
          <h1>Steven Larsen</h1>
        </div>
        <div className="links">
          <a className='github' href="https://github.com/StevenLarsen23">GitHub</a>
          <p>|</p>
          <a className='linkedin' href="https://www.linkedin.com/in/steven-larsen-ab413b200/">
            Linkedin
          </a>
          <p>|</p>
          <a className='resume' href="https://docs.google.com/document/d/1hmPt5Tghp419HxzsXZQgUgGctHCaPpN3-guGMmNsuR4/edit?usp=sharing">
            Resume
          </a>
        </div>
      </header>
      <main className="body">
        <h1>
          Here are some of the websites I've built and a brief explination:
        </h1>
        <br/>
        <br/>
        <br/>
        <a href='https://thatswhatshesaid.dev'>
          <h2 className='website'>That's What S/He Said</h2>
          </a> 
        <p>That's What S/He Said is an app that lets the user easly add, search, access, and edit their favorite quotes; as well as find new quotes other users have posted.</p>
        <br/>
        <br/>
        <div className='images'>
        <img className='image' src="images/TWSS-1.jpg" alt="That's what she said 1"/>
        <img className='image' src="images/TWSS-2.jpg" alt="That's what she said 2"/>
        </div>
        <br/>
        <br/>
        <a href='http://138.68.42.88:4000/'>
          <h2 className='website'>Hole In The Wall</h2>
          </a> 
        <p>Hole In The Wall is an app where users can add or find great places to eat in every state. If you are traveling or just want to discover something new close to home rather then eat the same fast food again</p>
        <br/>
        <br/>
        <div className='images'>
        <img className='image' src="images/HITW-1.png" alt='Hole in the wall 1'/>
        <img className='image' src="images/HITW-2.png" alt='Hole in the wall 2'/>
        </div>
        <br/>
        <br/>
      </main>
    </div>
  );
}

export default App;
