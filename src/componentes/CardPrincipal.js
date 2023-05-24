import "../Styles/CardPrincipal.css"
import Offcanvas from "./OffCanvas";
import { getcleandate } from '../dateformat'



export function CardPrincipal({currentWeather,setCity,temperaturefromat}){
    const  getuserlocation = ()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {setCity(`${position.coords.latitude},${position.coords.longitude}`)});
            }
        }
    return(
        <>  
            <div className="Nav-principal">
            <Offcanvas setCity={setCity}/>
            <div className="circulo cursor-pointer" >
                <i className="fa-solid fa-location-crosshairs fa-lg"  style={{color:"White"}} onClick={getuserlocation}></i>
            </div>
            </div>
            
            <div className="imagen Background">
            <img src={`http:${currentWeather.current ? currentWeather.current.condition.icon.replace('64x64' , '128x128') :'' }`} alt="imagen" />
            </div>
            <h1 className="texto-principal">{ currentWeather.current ?  currentWeather.current[`temp_${temperaturefromat}`] : "..." }°</h1>
            <h2 className="texto2">{currentWeather.current ?  currentWeather.current.condition.text : "..." }</h2>
            <div className="spanes mb-3">
                <span>Today </span>
                <span> . </span>
                <span> {currentWeather.location ?  getcleandate(currentWeather.location.localtime ) : "..." }</span>
            </div>
            <div className="ubicacion mb-3">
            <i className="fa-solid fa-location-dot me-1" style={{color:"white"}}></i>
            <p>{currentWeather.location ?  currentWeather.location.name : "..." }</p>
            </div>
            
        </>
    )
}