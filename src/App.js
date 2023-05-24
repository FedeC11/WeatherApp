import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardPrincipal } from './componentes/CardPrincipal';
import CardSecundaria from './componentes/CardSecundaria';
import axios from "axios";
import { useEffect, useState } from 'react'; 

function App() {
  const [currentWeather , setCurrentWeather] = useState({})
  const  [nextdays  , setNextdays] = useState({})
  const [city ,  setCity] = useState('puebla')
  const [temperaturefromat , setTumperature] = useState('c') 
  const API_KEY = "0bad43a6462a4c9fbc6111102232203";

  const getCurrentWeather = async (city)=>{
    const URL= 'https://api.weatherapi.com/v1/current.json?key='+API_KEY+'&q='+city
    try {
      const response = await axios.get(URL);
      const data = await response.data;
      console.log(data)
      setCurrentWeather(data)
      console.log(currentWeather)
    }
      catch{
        console.log('there is a problem whit fetching data')
      }
  }
  const futureWeather = async ()=> {
    const APILLAVE='b08484d08a177a8b1148f2492a36ad93';
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+APILLAVE
    try{
        const  response = await axios.get(url) ;
        const data  = await response.data ;
        console.log(data.list[0].dt_txt)
        setNextdays(data)
        console.log(nextdays)
        
    }catch{
        console.log('there is a  problem with  api ')
    }
}
  useEffect(()=> {
    getCurrentWeather(city)
    futureWeather()
    
} , [city]) 

  return (
  <div className="App container-fluid">
    <Row className='Principal'>
      <Col md={4} className='background-primario' >
        <CardPrincipal currentWeather={currentWeather}  setCity={setCity} temperaturefromat={temperaturefromat}/>
      </Col>
      <Col className='background-secundario'>
      <CardSecundaria temperaturefromat={temperaturefromat} setTumperature={setTumperature} currentWeather={currentWeather} nextdays={nextdays} /> 
      </Col>
    </Row>
  </div>
  );
}

export default App;
