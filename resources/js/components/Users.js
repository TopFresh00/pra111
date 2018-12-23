import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class MyUser extends Component {

    constructor()
    {
      super();
      this.state ={myUsers:[]}
      console.log(super());
    }

    ComponentWillMount()
    {
        axios.get('myUsers').then(response=>
        {this.setState({
            myUsers: response.data
        });
        }).catch(errors =>{console.log(errors);

    })
    }

    render() {
        return(
                <div>
                    <div className="container">
                        {this.state.myUsers.map(myUser=><li>{myUser}</li>)};
                    </div>
                </div>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<MyUser />, document.getElementById('app'));
}
