import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"


function DetailPage() {
   

    

      const {id} = useParams()
      const item = products.find((item)=>item.id ==id)

    return(
        <>
         <h1>{item.title}</h1>
        <p>{item.description}</p>
        <img src={item.image} alt="" />
        <strong>{item.price}</strong>
        </>  
    )
}
export default DetailPage