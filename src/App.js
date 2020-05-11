import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from './components/AddForm';
import Box from './components/Box';

function App() {

  
  const [widthAfterSubmit, setWidthAfterSubmit] = useState(100);
  const [colors, setColors] = useState([
    'black', 'red', 'green', 'blue', 'silver'
  ]);


  return (
    <div className="container">
      
      <div className="row">
        <div className="col">
          <AddForm colors={colors} setColors={setColors} widthAfterSubmit={widthAfterSubmit} setWidthAfterSubmit={setWidthAfterSubmit} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          {
            colors.map((clr,i) => 
                <Box colors={colors} setColors={setColors} id={i} key={i} color={clr} widthAfterSubmit={widthAfterSubmit} />
              )
          }
        </div>
      </div>
        
    </div>
  );
}

export default App;
