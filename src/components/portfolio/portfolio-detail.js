import React from 'react';

export default function(props) {
    return (
        <div>
            <h2>Portfoilo Detail for {props.match.params.slug}</h2>
        </div>
    )
}