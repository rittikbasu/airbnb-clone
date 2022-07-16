import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card--image" src={props.img} />
            <div className="card--stats">
                <img className="card--star" src="https://pngimg.com/uploads/red_star/red_star_PNG31.png" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
        
    )
}