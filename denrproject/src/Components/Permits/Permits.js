import React from 'react';
import Permitslist from './Permitlists'
import './Permits.css'
const Permits =()=>{

    const data =[
       

        {
            name:"Private Land Timber Permit",  
            des: "Issuance of private timber permit for non-premium species, or special PLTP for premium naturally-grown trees within private/ title lands.",
            projectlink:"https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
         },
         {
            name:"Issuance of cutting permit for planted trees",  
            des: "Issuance of tree cutting permit for planted trees and naturally  growing trees found within public places (Plaza, public parks, school premises or political subdivisions) for purposes of public safety.",
            projectlink:"https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
         
         },

         {
            name:"Private Tree Plantation Registration",  
            des: "This is the application for those applicants wants to  register their plants",
            projectlink:"https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
         },

         {
            name:"Special Tree Cutting and Balling Permit ",  
            des: "This application is for issuance of permits for special tree cutting permits and balling permit for trees affected by theprojects of national governments",
            projectlink:"https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
         },

         {
            name:"Chainsaw Registration  ",  
            des: "This application is for applicants wants to register their chainsaw",
            projectlink:"https://mariadonnadelossantos19.github.io/cindy-cafe/home.html",
            
            
            
         },
    ]
    return(
        <div className='container'>

        <div className='row'>
            {data.map((item,index)=>(
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index} >
                    <Permitslist {...item}/>
                   
                </div>
            ))}
       

        </div>
            
        </div>

         
    )
}
export default Permits