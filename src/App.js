import Home from './components/Home'
import User from './User'

function App() {
  return (
    <div className="container">
        <h3>React app</h3>
        <Home />
        <User name='sarthak' age='15' />
        <User name='fatima' />
        <User name='akash' />
        <User name='ram' />
    </div>
  );
}

export default App;
