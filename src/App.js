import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="name">
          <h1>Steven Larsen</h1>
        </div>
        <div className="links">
          <a className='github' href="https://github.com/StevenLarsen23">GitHub</a>
          <br />
          <a className='linkedin' href="https://www.linkedin.com/in/steven-larsen-ab413b200/">
            Linkedin
          </a>
          <a className='resume' href="https://docs.google.com/document/d/1hmPt5Tghp419HxzsXZQgUgGctHCaPpN3-guGMmNsuR4/edit?usp=sharing">
            Resume
          </a>
        </div>
      </header>
      <main className="body">
        <div>
          Body...
        </div>
      </main>
    </div>
  );
}

export default App;
