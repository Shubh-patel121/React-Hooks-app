import './App.css';
import CallBack from './components/hooksPractice/useCallbacks';
import Context from './components/hooksPractice/useContext';
import Timer from './components/hooksPractice/useEffect';
import Factorial from './components/hooksPractice/useMemo';
import Counter from './components/hooksPractice/useReducer';
import Focus from './components/hooksPractice/useRef';
import StateComponent from './components/hooksPractice/useState';

function App() {
  return (
    <div className="App">
    <StateComponent />
    <Timer />
    <CallBack />
    <Counter />
    <Factorial />
    <Context />
    <Focus />
    </div>
  );
}

export default App;
