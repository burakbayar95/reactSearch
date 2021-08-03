import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div>
                {this.props.item}
                <hr></hr>
            </div>
        )
    }
}
