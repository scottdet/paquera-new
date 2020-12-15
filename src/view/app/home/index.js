import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/home');
    }
    render() {
        return (
            <div className="content pl-20 pr-20 fade-in">
                <div className="width-100 home-screen-background  fade-in">
                </div>
            </div>
        )
    }
}
export default Home