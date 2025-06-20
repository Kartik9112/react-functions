import { Routes, Route, Link } from 'react-router-dom';

import ApiFetch from './ApiFetch';
import EmojiWithText from './EmojiWithText';
import MultipleInputConvert from './MultipleInputConvert';
import Counter from './Counter';
import Tweet from './Tweet';


function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center"></h1>

      
      <nav className="mb-8">
        <ul className="flex flex-wrap justify-center gap-4 text-blue-600">
          <li><Link to="/">Counter</Link></li>
          <li><Link to="/tweet">Tweet</Link></li>
          <li><Link to="/form">Form Input</Link></li>
          <li><Link to="/emoji">Emoji With Text</Link></li>
          <li><Link to="/api">API Fetch</Link></li>
        </ul>
      </nav>

     
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/tweet" element={<Tweet />} />
        <Route path="/form" element={<MultipleInputConvert />} />
        <Route path="/emoji" element={<EmojiWithText />} />
        <Route path="/api" element={<ApiFetch />} />
      </Routes>
    </div>
  );
}

export default App;