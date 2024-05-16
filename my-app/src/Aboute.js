import React, { Component } from 'react';
import { useState} from 'react';
import axios from 'axios';


class Souhaib extends Component {
    render() {
        const[souhaib , setSouhaib]= useState([]);
        
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res =>{console.log(res.data)
                setSouhaib(res.data)
                

                 })

        
        return (
            <div>
                <h2>About</h2>
                <p>This is about section</p>

                {this.state.souhaib.map((item) =>  <div key={item.id}> {item.name}</div>
                <img src="C:\Users\USER\Desktop\farhad-ibrahimzade-w6j3PCDRlZc-unsplash.jpg"/>
                
                )};
            </div>
        );
    }
}

export default Souhaib;
