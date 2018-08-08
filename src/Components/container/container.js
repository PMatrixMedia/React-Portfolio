import React from 'react';

const container = props =>
    <div classNeame={'container${props.fluid ? "-fluid" : ""}'} {...props} />

    export default container;