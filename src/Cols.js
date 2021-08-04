import React from 'react'
import Item from './Item'

const Cols = (props)=>{
    
        return (
            <ul>
                {props.items.map((item)=>(
                    
                    <Item key={item} name={item[0]} mail={item[2]} startpoint={item[4]} endpoint={item[5]} date={item[3].substr(-4)}  />
                ))}
               

         

            </ul>
        )
    
}
export default Cols