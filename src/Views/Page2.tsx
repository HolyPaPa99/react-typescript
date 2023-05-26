import React from "react";
import {disposeOnUnmount} from 'mobx-react'

export default class Page2 extends React.Component {

    @disposeOnUnmount
    someDisposer1 = ()=>{console.log("page2 will unmount1.")}

    @disposeOnUnmount
    someDisposer = [
        ()=>{console.log("page2 will unmount.")}
    ]

    render() {
        return (
            <div>
                Hello, Page2!
            </div>
        )
    }
}