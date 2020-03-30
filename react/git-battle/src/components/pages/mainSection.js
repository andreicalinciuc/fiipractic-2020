import React from "react";
import Nav from "../navigator";
import Modal from "../pages/createUser";
import Shop from "../pages/marioPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
        const clicks = this.state.counter + 1;
        this.setState({
            counter: clicks
        });
    }
    render() {
        let elemente = this.props.elemente;
        console.log(elemente);

        const listItem = elemente.map(function (elem, index) {
            return <div>{elem}</div>;
        });
        return (
            <div className="mainCont">
                <Router>
                    <Nav></Nav>

                    <div className="mainContent">
                        <Switch>
                            <Route exact path="/">
                                <Shop></Shop>
                            </Route>
                            <Route path="/formRegister">
                                {" "}
                                <Modal>
                                <div>{this.state.counter}</div>
                                </Modal>
                            </Route>
                            <Route path="/counter">
                                <div className="step-counter">
                                    <button onClick={this.incrementCount}>Counter</button>
                                    <div>{this.state.counter}</div>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default MainContent;
