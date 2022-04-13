import { styled } from '@stitches/react';
import './App.css';

const Button = styled('button', {});

function App(){
    return (
      <div className="App">
        <h1>Salve !</h1>
        <div>
          <Button>Botão</Button>
        </div>
      </div>
    );
    }

export default App;
