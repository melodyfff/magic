import React, { Component } from 'react';
import Toggle from './component/Toggle'
import Item from './component/Item'
import WarningBanner from './component/WarningBanner'
class Demo extends Component {
    render() {
        return (
            <div>
                <Toggle />
                <hr></hr>
                <WarningBanner />
                <hr></hr>
                <Item />
            </div>
        );
    }
}

export default Demo;