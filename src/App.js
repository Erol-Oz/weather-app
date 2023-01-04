import { WeatherProvider } from './Context/WeatherContext';
import './App.css';
import Background from './Components/Background/Background';
import Search from './Components/search/Search';
import Result from './Components/Result/Result';

function App() {
  return (
    <WeatherProvider>
      <section className='uygulama'>
        <Background/>
        <div id='baslik'>Hava Durumu</div>
          <Search/>
          <Result/>
      </section>
    </WeatherProvider>
  );
}

export default App;
