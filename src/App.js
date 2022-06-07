import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';
import "./styles.css";

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
