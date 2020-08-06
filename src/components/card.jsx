import React from 'react';

export default function Card(props){
    return (
        <div className="card">
            {/*Recibimos las propiedades que hemos declarado en App para poder representar su
             contenido*/}

            <h2>{props.name}</h2>
            <img src={props.image} alt="pokemon" />
            <div className="pokemon-info">
                <ul>
                    <li>Hp: {props.base.HP}</li>
                    <li>Ataque: {props.base.Attack}</li>
                    <li>Defensa: {props.base.Defense}</li>
                    <li>Velocidad: {props.base.Speed}</li>
                </ul>
            </div>
            <div>
                {/* Recorremos el array de los pokemon para poder mostrar su tipo, estamos
                 accediendo, a la const types que esta en App, que viene siendo un hooks*/}
                {props.types.map(type => {
                    return <span className={`types ${type}`}>{type}</span>
                })}

            </div>
        </div>
    );
}