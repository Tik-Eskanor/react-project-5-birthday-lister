import React from "react"
import data from "./data"
import List from "./Components/List"

export default function App()
{
  let [people, setPeople] = React.useState(data)

  let listItems = people.map((item)=>
  {
     return(
        <List people={item} key={item.id}/>
     )
  })

  return (
    <main>
      <div className="container">
       <section className="box">
          <h4>{people.length} birthdays today</h4>
          {listItems}
          <button onClick={()=> setPeople([])}>Clear all</button>
       </section>
      </div>
    </main>
  )
}