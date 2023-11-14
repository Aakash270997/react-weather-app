import { useEffect, useState } from 'react';
import './App.css';
import Weather from './component/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log("lat" + lat);
        console.log("long" + long);
      });
      console.log(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=26.73593&lon=80.9486&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => { setData(result); console.log(data) })
    }
    fetchData()
  }, [lat, long])
  console.log(data.length);
  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (<Weather weatherDate={data} />) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}

export default App;
