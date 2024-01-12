import React from "react";
import { Link } from "react-router-dom";


function Services(){
    return(
        <div>
            
        <h1 style={{backgroundImage: "url('https://tse4.mm.bing.net/th?id=OIP.Dxo2Y-tBmfppRSlGFuCo-QHaE8&pid=Api&P=0&h=220')", color: 'white',paddingRight:'80%'}}>SERVICES</h1>
        <Link to="/"><h6 style={{ color: 'black', fontSize: '10px',paddingRight:'95%' }}>HOME</h6></Link>

           <div class="card text-bg-dark">
            <img src="https://tse1.mm.bing.net/th?id=OIP.c6psx_ccXOpBwVad6RS70gHaC5&pid=Api&P=0&h=220" class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h5 class="card-title"style={{ color: 'black', fontSize: '30px',backgroundColor:'#ffc107' }}>ERP implementation & Support</h5>
                <p class="card-text"style={{ color: '#ffc107', fontSize: '20px' }}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
            </div>
            </div>
        </div>
    );
}
export default Services;