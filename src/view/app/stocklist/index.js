import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'
import StockListComponent from '../../../components/stocklist'
import HeaderComponent from '../../../components/header'
import FooterComponent from '../../../components/footer'

class StockList extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/stocklist');
        var x = document.getElementsByClassName("shopify-buy-frame");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
    }
    render() {
        return (
            <section className="full-content m-0">
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