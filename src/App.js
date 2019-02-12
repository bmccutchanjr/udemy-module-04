import React, { Component } from 'react';
import './App.css';
import CharComponent from "./CharComponent/CharComponent.js";
import ValidationComponent from "./ValidationComponent/ValidationComponent.js";

class App extends Component
{   state =
    {   myLength: 0,
        myValue: "",
        myValues: []
    }

    changeHandler = (event) =>
    {   
        this.setState (
        {   myLength: event.target.value.length,
            myValue: event.target.value,
            myValues: event.target.value.split("")
        });
    }
    
    removeChar = (index) =>
    {   const array = this.state.myValues.slice (0);
        array.splice (index, 1);
        
        const str = array.join ("");

        this.setState (
        {   myLength: str.length, 
            myValue: str, 
            myValues: array
        })
    }
    
    render()
    {
        return (
            <div className="App">
                <input id="myInput" onChange={ this.changeHandler } value={ this.state.myValue } />
                <ValidationComponent length={ this.state.myLength }/>
                {   this.state.myValues.map ((ch, i) =>
                    (   <CharComponent char={ ch }
                                       index={ i }
                                       key={ i }
                                       click={ this.removeChar } />
                    ))
                }
            </div>
        );
    }
}

export default App;
