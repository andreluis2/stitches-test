import { styled } from '@stitches/react';
import './App.css';

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'gray',
    cursor: 'pointer',
  },
});

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
