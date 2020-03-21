import React from 'react';
import Nav from './navigator';
import { render } from '@testing-library/react';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
        const clicks = this.state.counter + 1;
        this.setState({
            counter: clicks
        })
    }
    render() {
        let elemente = this.props.elemente;
        console.log(elemente);

        const listItem = elemente.map(function (elem, index) {
            return <div>{elem}</div>
        })
        return (<div className="mainCont">
            <Nav></Nav>
            <div className="mainContent" >
                {listItem}
                <button onClick={this.incrementCount}>Counter</button>
                <div>{this.state.counter}</div>
            </div>


        </div>)
    }
}

export default MainContent;