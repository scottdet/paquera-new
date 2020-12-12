import React, { Component } from 'react'
import ReactGA from 'react-ga'
import HeaderComponent from '../../../components/header'
import FooterComponent from '../../../components/footer'

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
            <section className="full-content m-0 height-webkit-fill-available">
                <HeaderComponent />
                <div className="content pl-20 pr-20 fade-in" style={{flex: 1}}>
                    <div className="width-100 home-screen-background">
                    </div>
                </div>
                <FooterComponent />
            </section>
        )
    }
}
export default Home