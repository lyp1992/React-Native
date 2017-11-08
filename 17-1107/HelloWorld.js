
import React, { Component } from 'react';
import {AppRegistry,Text} from 'react-native';

class ReactDemo extends Component{

    render(){

        return(

            <Text>Hello world!</Text>
    );
    }

}

AppRegistry.registerComponent('ReactDemo',() =>ReactDemo);