//Import area
import { Component } from 'react';
//Let's create a Class Component with State Property
//Every Class Component must have render method which always return HTML
export default class A extends Component{
    //1.Property
    //Every JS object have 2 member
    //Declarartion and Initialization
    state={
        //1.Properties
        //P:V
        name:'Mahima',
        'surname':"Arya",
        "address":"Neemuch"
        //2.Methods
    }

    //2.Constructor
    //The role of constructor is to initialize the members
    constructor(){
        //Call the parent constructor via super()
        super();
        this.state.name ='Priyanka';
        this.state.surname ="Khuar";
    }

    //3.Method
    render(){
        return (
            <p>
                <h1>Hello</h1>
                <h2>{this.state.name + this.state.surname + this.state.address}</h2>
            </p>
        );
    }
}