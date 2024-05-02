import React from "react"

export default function List({people})
{
   return(
       <>
          <article>
            <img src={people.image} className="img"/>
            <div>
               <h4>{people.name}</h4> 
               <p>{people.age}</p> 
            </div>
          </article>
       </>
   )
}