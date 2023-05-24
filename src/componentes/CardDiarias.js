import React from "react";
import Card  from "react-bootstrap/Card";
import Clear from "../imagenes/Clear.png"
import "../Styles/CarDiarias.css";
import { getcleandate } from "../dateformat";
import lightRain from "../imagenes/LightRain.png";

export default function CardDiarias({nextdays,temperaturefromat,posicion}) {
    return(
        <Card className="Cards">
            <Card.Title>{nextdays.list[0] ? getcleandate(nextdays.list[posicion].dt_txt) :'...'}</Card.Title>
            <Card.Img variant="top" src={lightRain} className="medidas" />
            <Card.Body className="d-flex gap-2">
                <Card.Text>{nextdays.list[0] ? (nextdays.list[posicion].main.temp_max-273.15).toFixed(1)+'°' :'...'}</Card.Text>
                <Card.Text>{nextdays.list[0] ? (nextdays.list[posicion].main.temp_min-273.15).toFixed(1)+'°' :'...'}</Card.Text>
            </Card.Body>
        </Card>
    )
}