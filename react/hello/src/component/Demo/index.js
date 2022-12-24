import React, { Component } from 'react';
import Toggle from './component/Toggle'
import Item from './component/Item'
import WarningBanner from './component/WarningBanner'
import HelloMessageInput from './component/HelloMessageInput'
import SelectFrom from './component/SelectFrom'
import HelloMessage from './component/HelloMessage'
import MockData from './component/MockData'
class Demo extends Component {
    render() {
        return (
            <div>
                <Toggle />
                <hr></hr>
                <WarningBanner />
                <hr></hr>
                <Item />
                <hr></hr>
                <HelloMessageInput />
                <hr></hr>
                <SelectFrom />
                <hr></hr>
                <HelloMessage />
                <hr></hr>
                <MockData />
            </div>
        );
    }
}

export default Demo;