import './App.css';
const api={
  base:'https://api.openweathermap.org/data/2.5',
  key:'745b34e39ffe426f3d05796a851f853e'
}

function App() {

  const dateBuilder=(d)=>{
  
  }
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...'/>
        </div>
        <div className='location-box'>
          <div className='location'>New York City, US</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
      </main>
    
    </div>
  );
}

export default App;
