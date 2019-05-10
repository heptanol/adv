import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item';

require('../../css/timeline/app.scss');

class TimelineApp extends React.Component {
    constructor() {
        console.log('TimelineApp');
        super();

        this.state = {
            entries: [
                { id: '1', name: 'item 1', date: 'date 1', body: ''},
                { id: '2', name: 'item 2', date: 'date 2', body: ''},
                { id: '3', name: 'item 3', date: 'date 3', body: ''},
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <ul className="timeline">
                {this.state.entries.map(
                    ({ id, name, date, body }, index) => (
                        <Item
                            index={index}
                            key={id}
                            name={name}
                            date={date}
                            body={body}>
                        </Item>
                    )
                )}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<TimelineApp />, document.getElementById('timeline'));