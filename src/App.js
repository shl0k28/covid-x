import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

//main
import Main from './components/MainPage';

function App() {
  return (
  	<div className="App">
  		<Router>
  			<Main />
  		</Router>
  	</div>
  );
}

export default App;
