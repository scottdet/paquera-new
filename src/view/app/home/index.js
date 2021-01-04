import React, { Component } from 'react'
import ReactGA from 'react-ga'
import FooterComponent from '../../../components/footer'

class Home extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/home');
    }
    render() {
        return (
            <>
                <div className="content pl-20 pr-20 fade-in">
                    <div className="width-100 home-screen-background  fade-in">
                    </div>
                </div>
                <FooterComponent />
            </>
        )
    }
}
export default Home