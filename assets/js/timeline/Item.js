import React from 'react';

const Item = ({ id, name, date, body, index }) => (
    <li key={id} className={!(index % 2) ? 'timeline-inverted' : ''}>
        <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
        <div className="timeline-panel">
            <div className="timeline-heading">
                <h4 className="timeline-title">{name}</h4>
                <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>{date}</small></p>
            </div>
            <div className="timeline-body">
                <p>{body}</p>
                { console.log(index) }
            </div>
        </div>
    </li>);

export default Item;
