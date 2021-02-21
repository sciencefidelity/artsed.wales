import './App.css';

const buttonElement = <button className="Btn">CY</button>;

const greeting = {
  en: 'Hello World',
  cy: 'Helo Byd' 
};

const message = <h1>{greeting.en}!</h1>;

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {buttonElement}
        {message}
      </header>
    </div>
  );
}

export default App;
