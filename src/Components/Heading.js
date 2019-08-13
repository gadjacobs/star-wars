import React from 'react';

const Heading = ({title}) => {
    return (
        <div>
            <h1 className="tc">{title}</h1>
            <hr width="10%" style={{height: "5px", background: "#494957"}} />
        </div>
    );
}

export default Heading;