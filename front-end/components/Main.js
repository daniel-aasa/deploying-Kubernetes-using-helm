import React from "react"


export default function Main(props){
    return(
        <div>
            <div className = "appear-left">
            <img className = "mount-fiji" src ={props.imageUrl} />
            </div>
            <div>
               
            <div className = "join">  
                 <img className = "location-img" src = "./Path.png"/> 
                <h1 className = "country">{props.location.toUpperCase()}</h1>
              <a className = "url" href = {props.url}>View on Google Maps</a>
            </div>
              
              <h1 className = "site">{props.title}</h1>
              <h5 className = "duration">{props.startDate} - {props.endDate}</h5>
              <p className = "description">{props.description}</p>
            </div>
                
        </div>
        
    )
    
}