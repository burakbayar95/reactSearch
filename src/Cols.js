import React, { Component } from 'react'
import Item from './Item'

export default class Cols extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item)=>(
                    
                    <Item key={item} item={item}/>
                ))}
               

         

            </ul>
        )
    }
}
