import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

const Weather = ({ weatherDate }) => {
  const refresh = () => {
    window.location.reload();
  }
  return (
    <Container>
      <div className="main">

        <div className="top">
          <p className="header">{weatherDate.name}</p>
          <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>
        <div className="flex">
          <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
          <p className="description">{weatherDate.weather[0].main}</p>
        </div>

        <div className="flex">
          <p className="temp">Temprature: {weatherDate.main.temp} &deg;C</p>
          <p className="temp">Humidity: {weatherDate.main.humidity} %</p>
        </div>

        <div className="flex">
          <p className="sunrise-sunset">Sunrise: {new Date(weatherDate.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
          <p className="sunrise-sunset">Sunset: {new Date(weatherDate.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        </div>

      </div>
    </Container>
  );
}

export default Weather