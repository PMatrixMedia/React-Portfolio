import react from 'react';

const row = props =>
    <div className={'row${props.fluid ? "-fluid" : ""}'} {...props} />
    
    export default row;