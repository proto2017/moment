import React from 'react';
import Canvas from '../draw/canvas';
import FireWork from '../fireworks';
class Main extends React.Component {
    state = {}
    componentDidMount() {
      
        FireWork.start();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Main;

