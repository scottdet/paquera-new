import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'
import StockListComponent from '../../../components/stocklist'
import HeaderComponent from '../../../components/header'

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
            <Container style={{flex: 'none'}}>
                <section className="stockSection">
                    <StockListComponent />
                </section>
            </Container>
        )
    }
}
export default StockList