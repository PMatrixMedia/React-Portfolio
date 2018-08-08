import React from 'react';
import './wrapper.css';

class wrapper extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div>
                 </div>
                 {this.props.children}
            </React.Fragment>
        );  
    }


}

export default wrapper;