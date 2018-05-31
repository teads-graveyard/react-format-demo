import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = { isTagInjected: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isTagInjected: !this.state.isTagInjected });
    }

    render() {
        console.info("this.state.isTagInjected :", this.state.isTagInjected);

        return (
            <div>
                <h2>Teads Demo with clean up</h2>
                <p>
                    Teads tag should be injected into the dom, load itself and an Ad. Once the experience has
                    started you can click on "Demo Tag" again to perform the cleanup and start over the demo.
                </p>
                <p>Format Assets serving should not be an issue thanks to browser cache.
                </p>
                <button onClick={this.handleClick}>Demo Tag</button>
                {this.state.isTagInjected && <TeadsTag/>}
            </div>
        );
    }
}



class TeadsTag extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>Player Injected</h2>
            </div>
        );
    }

    componentDidMount() {
        console.info("componentDidMount");

        var s = document.createElement("script");
        s.id = "teads-test";
        s.className = "teads"
        s.setAttribute("data-insertion-1", "1550");
        s.src = "https://cdn.teads.tv/js/tags/tag-milibris.js";

        document.body.appendChild(s);

    }

    componentWillUnmount() {
        console.info("componentWillUnmount");
        document.body.removeChild(document.getElementById("teads-test"));
        document.body.removeChild(document.getElementById("teadsusersync"));
        window.teads.pageInstance.clearInstances()
    }

}

export default App;
