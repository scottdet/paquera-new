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
            <Container className="content pl-20 pr-20 fade-in">
                <div className="width-15">
                    <img className="home-image" src="/img/PaqueraMezcal_Landing_LeftArt.png" />
                </div>
                <div className="width-70">
                    <img className="home-image" src="/img/PaqueraMezcal_Landing_CenterArt.png" />
                </div>
                <div className="width-15">
                    <img className="home-image" src="/img/PaqueraMezcal_Landing_RightArt.png" />
                </div>
            </Container>
        )
    }
}
export default Home