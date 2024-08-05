import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from './component/Data';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Data />} />
        </Routes>

      </div >
    </Router>

  );
}

export default App;
