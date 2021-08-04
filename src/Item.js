import React from 'react'

const Item =(props)=> {
    
        return (
            <div>


                
                <table>
                        <tbody>
                        <tr>
                        <td>

                        <div style={{fontSize:"18px",fontWeight:"bold",fontFamily:"Roboto",color:"#484848"}}>
                {props.startpoint} - {props.endpoint}
                </div>
                <div style={{fontSize:"12px",fontWeight:"normal",fontFamily:"Roboto",color:"#686868"}}>
                {props.name} - {props.date} 

                </div>


                        </td>
                        <td>
                            <div style={{fontSize:"18px",fontWeight:"bold",fontFamily:"Roboto",color:"#484848",marginLeft:"50px"}}>
                            {props.mail}
                            </div>
                             </td>
                        </tr>
                        </tbody>
                        </table>
                        <hr></hr>
            </div>
           




        )
    
}
export default Item