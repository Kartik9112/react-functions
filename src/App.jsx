import { Routes, Route, Link } from 'react-router-dom';
import ApiFetch from './ApiFetch';
import EmojiWithText from './EmojiWithText';
import MultipleInputConvert from './MultipleInputConvert';
import Counter from './Counter';
import Tweet from './Tweet';
import Mainfocus from './Mainfocus';
import StatePrvCount from './StatePrvCount';
import Otp from './Otp';
import Image from './Image';
import UseMemo from './UseMemo';
import ProductResult from './ProductResult';
import EventManager from './EventManager';
import ParentFile from './ParentFile';
import ProductList from './ProductList'; 
import './carouselOverride.css';

function App() {
  const userId = "12345";

  const handleAddToCart = (productId) => {
    console.log(`🛒 Product: ${productId} added by User: ${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">React Multi-Component App</h1>
          <nav>
            <ul className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
              <li><Link to="/" className="hover:underline hover:text-yellow-200">Counter</Link></li>
              <li><Link to="/tweet" className="hover:underline hover:text-yellow-200">Tweet</Link></li>
              <li><Link to="/form" className="hover:underline hover:text-yellow-200">Form Input</Link></li>
              <li><Link to="/emoji" className="hover:underline hover:text-yellow-200">Emoji Text</Link></li>
              <li><Link to="/api" className="hover:underline hover:text-yellow-200">API Fetch</Link></li>
              <li><Link to="/MainFocus" className="hover:underline hover:text-yellow-200">Main Focus</Link></li>
              <li><Link to="/StatePrvCount" className="hover:underline hover:text-yellow-200">Prev Count</Link></li>
              <li><Link to="/Otp" className="hover:underline hover:text-yellow-200">OTP</Link></li>
              <li><Link to="/Image" className="hover:underline hover:text-yellow-200">Image</Link></li>
              <li><Link to="/UseMemo" className="hover:underline hover:text-yellow-200">useMemo</Link></li>
              <li><Link to="/ProductResult" className="hover:underline hover:text-yellow-200">Products</Link></li>
              <li><Link to="/EventManager" className="hover:underline hover:text-yellow-200">Events</Link></li>
              <li><Link to="/ParentFile" className="hover:underline hover:text-yellow-200">ParentFile</Link></li>
              <li><Link to="/productlist" className="hover:underline hover:text-yellow-200">Product List</Link></li> {/* ✅ New Link */}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/tweet" element={<Tweet />} />
          <Route path="/form" element={<MultipleInputConvert />} />
          <Route path="/emoji" element={<EmojiWithText />} />
          <Route path="/api" element={<ApiFetch />} />
          <Route path="/MainFocus" element={<Mainfocus />} />
          <Route path="/StatePrvCount" element={<StatePrvCount />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/Image" element={<Image />} />
          <Route path="/UseMemo" element={<UseMemo />} />
          <Route path="/ProductResult" element={<ProductResult />} />
          <Route path="/EventManager" element={<EventManager />} />
          <Route path="/ParentFile" element={<ParentFile />} />
          <Route path="/ProductList" element={<ProductList userId={userId} handleAddToCart={handleAddToCart} />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
