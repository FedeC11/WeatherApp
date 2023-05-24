import React from "react";
import Card  from "react-bootstrap/Card";
import "../Styles/CardsH.css";
import { BsWind } from 'react-icons/bs';
import Barra from "./Barra";




export default function CardsH({currentWeather,name,tipo,info,adicional,barra}){
    
    return(
        
        <Card className="CardH d-flex align-items-center ">
            <Card.Text className="mb-0 mt-1">{name}</Card.Text>
            <Card.Text className="Medida mb-0">{currentWeather.current? currentWeather.current[info]:'...'}{tipo}</Card.Text>
            <Card.Text className={adicional ?'':'d-none'}>
            <BsWind />
            <span> {currentWeather.current ? currentWeather.current.wind_dir:'...'}</span>
            
            </Card.Text>
            <Card.Text className={barra ?'barra':'d-none'} >
            <div className="d-flex flex-row justify-content-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <Barra humedadMedida={currentWeather.current? currentWeather.current[info]:0} />
            </Card.Text>
        </Card>
    )
}