import './App.css';

import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import Images from './components/Images';
import List from './components/List';
import RenderCond from './components/RenderCond';
import SecondComponent from './components/SecondComponent';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello Daniel, Hello World!</h2>
      <FirstComponent />
      <SecondComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={8} y={10} />
      <Fragment />
      <Container>
        <h1>Este é filho container!</h1>
      </Container>
    </div>
  );
}

export default App;
