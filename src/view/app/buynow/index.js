import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'
import FooterComponent from '../../../components/footer'

class Buynow extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/Buy Now');
    }
    render() {
        return (
            <>
                <Container className="content pl-20 pr-20 mb-30 fade-in" style={{flex: 'none', marginTop: '20px'}}>
                    <div className="row" style={{marginTop: '30px'}}>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img" src="/img/Paquera Espadin Grande_transparente_low_res.png" alt=""/>
                                    </div>
                                    <h1 style={{paddingLeft: '10px', paddingRight: '10px'}}>Paquera Espadin Mezcal</h1>
                                    <h2>$47.99</h2>
                                    <div id='product-component-1609291123889' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img" src="/img/Paquera Espadin y Barril Grande_transparente_low_res.png" alt=""/>
                                    </div>
                                    <h1>Paquera 80% Espadin 20% Barril</h1>
                                    <h2>$56.99</h2>
                                    <div id='product-component-1609291052376' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img-small" src="/img/paquera mini espadin_transparente copy.png" alt=""/>
                                    </div>
                                    <h1>Paquera Espadin Mezcal - 200 ML</h1>
                                    <h2>$23.99</h2>
                                    <div id='product-component-1609291155567' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img" src="/img/Paquerra Barril Grande_transparente_low_res.png" alt=""/>
                                    </div>
                                    <h1>Paquera 100% Barril Mezcal</h1>
                                    <h2>$72.99</h2>
                                    <div id='product-component-1609179340690' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img-small" src="/img/pequeña1_Barril.png" alt=""/>
                                    </div>
                                    <h1>Paquera 100% Barril Mezcal - 200 ML</h1>
                                    <h2>$35.99</h2>
                                    <div id='product-component-1609291018502' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img-small" src="/img/pequeña2_transparente.png" alt=""/>
                                    </div>
                                    <h1>Paquera 80% Espadin 20% Barril - 200 ML</h1>
                                    <h2>$26.99</h2>
                                    <div id='product-component-1609291082156' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                        </div>     
                </Container>
                <FooterComponent />
            </>
        )
    }
}
export default Buynow
