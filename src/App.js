import { styled } from '@stitches/react';
import './App.css';

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '20px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'gray',
    cursor: 'pointer',
  },
  variants: {
    color: {
      red: {
        backgroundColor: 'red'
      },
      green: {
        backgroundColor: 'green'
      },
    }
  }
});

function App() {
  return (
    <div className="App">
      <h1>Salve !</h1>
      <div>
        <Button>Botão</Button>
        <Button color="green">Botão</Button>
        <Button color="red">Botão</Button>
      </div>
    </div>
  );
}

export default App;
