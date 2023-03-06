import './App.css';
import React from 'react';
import Axios from 'axios';

function App() {
  const getGames = () => {
    Axios({
      url: "https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Client-ID': '4z6o2oyyofxuxlyrr3seabytxji1f5',
          'Authorization': '52d0b18je4h7nupv6dzjci2uv5nzes',
      },
      data: "fields age_ratings;"
    })
      .then(response => {
          console.log(response.data);
      })
      .catch(err => {
          console.error(err);
      });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getGames}>Get Creds</button>
      </header>
    </div>
  );
}

export default App;
