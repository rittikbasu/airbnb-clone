import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.img} />
            <div className="card--stats">
                <img className="card--image" src="https://pngimg.com/uploads/red_star/red_star_PNG31.png" />
                <span>{props.rating}</span>
                <span>{props.rating}</span>
                <span>{props.rating}</span>
            </div>
            <p><span className="bold">From {props.price}</span>/person</p>
        </div>
        
    )
}