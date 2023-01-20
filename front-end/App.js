import React from "react"
import ReactDOM from "react-dom"
import Nav from "./components/NavBar.js"
import Main from "./components/Main.js"
import Data from "./data.js"

const locations = Data.map(show => <Main
                 key = {show.key}
                 title = {show.title}
                 location = {show.location}
                 url = {show.googleMapsUrl}
                 startDate = {show.startDate}
                 endDate = {show.endDate}
                 description = {show.description}
                 imageUrl = {show.imageUrl}
                    />)
                    
                    
       

export default function App(){
    return(
         <div>
        <Nav/>
        {locations}
        
    </div>

    )
    
}
   

