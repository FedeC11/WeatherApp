import React from "react";
import  Button  from "react-bootstrap/Button";
import "../Styles/CardSecundaria.css";
import CardDiarias from "./CardDiarias";
import CardsH from "./CardsH";


export default function CardSecundaria({setTumperature, currentWeather,nextdays,temperaturefromat}){
    return(
        <>
        <div className="d-flex justify-content-end gap-2 p-2">
        <Button  onClick={() => { setTumperature('c') }} className=" color rounded-pill">C°</Button>
        <Button  onClick={() => { setTumperature('f') }} className=" color rounded-pill">F°</Button>
        </div>
        <div className="d-flex gap-2 flex-wrap  mx-4">
            <CardDiarias nextdays={nextdays} temperaturefromat={temperaturefromat} posicion={1}/>
            <CardDiarias nextdays={nextdays} temperaturefromat={temperaturefromat} posicion={9}/>
            <CardDiarias nextdays={nextdays} temperaturefromat={temperaturefromat} posicion={17}/>
            <CardDiarias nextdays={nextdays} temperaturefromat={temperaturefromat} posicion={25}/>
            <CardDiarias nextdays={nextdays} temperaturefromat={temperaturefromat} posicion={32}/> 
            
        </div>
        <h2 className="my-1">Todays Hightlights </h2>
        <div className="d-flex flex-wrap gap-3 my-3 justify-content-sm-evenly justify-content-center">
            <CardsH currentWeather={currentWeather} info={"vis_km"} tipo={"km"} name={"Wind status"} adicional={true} />
            <CardsH currentWeather={currentWeather} info={"humidity"} tipo={"%"} name={"Humidity"} barra={true}/>
            <CardsH currentWeather={currentWeather} info={"vis_miles"} tipo={" miles"} name={"Visibility"}/>
            <CardsH currentWeather={currentWeather} info={"pressure_in"} tipo={" mb"} name={"Air Pressure"}/>

        </div>
        </>
    )
}