import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'
import StockListComponent from '../../../components/stocklist'
import HeaderComponent from '../../../components/header'
import FooterComponent from '../../../components/footer'

class StockList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/stocklist');
    }
    render() {
        return (
            <section className="full-content m-0 height-webkit-fill-available">
                <HeaderComponent />
                <Container className="stock-content pl-20 pr-20 fade-in" style={{flex: 'none'}}>
                    <section className="stockSection">
                        <StockListComponent />
                    </section>
                </Container>
                <FooterComponent />
            </section>            
        )
    }
}
export default StockList