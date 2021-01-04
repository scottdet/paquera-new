import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'
import FooterComponent from '../../../components/footer'

class Info extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/info');

        // var x = document.getElementsByClassName("shopify-buy-frame");
        // for (var i = 0; i < x.length; i++) {
        //     x[i].style.display = 'none';
        // }
    }
    render() {
        return (
            <>
                <Container className="content pl-20 pr-20 mb-30 fade-in">
                    <div className="width-15" style={{textAlign: 'center', paddingLeft: '10px'}}>
                        <img className="home-image" src="/img/PaqueraMezcal_Landing_LeftArt.png" alt="" />
                        <img className="home-image-2" src="/img/Paquera_AgaveTree_Left-01.png" alt="" />
                    </div>
                    <div className="width-70" style={{display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                        <p className="infoContent">
                            <abbr className="f-jeff">Produced</abbr> by a CO-OP in San Miguel Ejutla, Paquera is an award-winning mezcal that was created from a methodology perfected over generations of dedicated family artisans.<br /><br />
                            <abbr className="f-jeff">Certified Artisanal Mezcal / Gluten Free <br />
                                No Additives / 100% Sustainable <br />
                                CO-OP Grown & Produced<br /><br />
                                Available in 3 different expressions: 100% Espadin, 80% Espadin/20% Barril & 100% Barril.<br /><br />
                                750ml and 200ml bottles available in each expression. <br /><br /></abbr>
                            Serve neat in a copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable premium mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br /><br />
                            <abbr className="f-jeff">El Espíritu del Mezcal!</abbr>
                        </p>
                    </div>
                    <div className="width-15" style={{textAlign: 'center', paddingRight: '10px'}}>
                        <img className="home-image" src="/img/PaqueraMezcal_Landing_RightArt.png" alt="" />
                        <img className="home-image-2" src="/img/Paquera_AgaveTree_Right-01.png" alt="" />
                    </div>
                    {/* <section className="infoSection">
                        <div className="infoDiv">
                            <div className="width-25">
                                <img className="width-100" src="/img/PaqueraMezcal_Story_TopLeft3.png" />
                                <img className="width-100" src="/img/PaqueraMezcal_Story_BottomLeft3.png" />
                            </div>
                            <div className="width-50"></div>
                            <div className="width-25">
                                <img className="width-100" src="/img/PaqueraMezcal_Story_TopRight3.png" />
                                <img className="width-100" src="/img/PaqueraMezcal_Story_BottomRight3.png" />
                            </div>
                            <div className="infoContentDiv">
                                <p>
                                    <abbr className="f-jeff">Produced</abbr> by a CO-OP in San Miguel Ejutla, Paquera is an award-winning mezcal that was created from a methodology perfected over generations of dedicated family artisans. Our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture.<br /><br />
                                    <abbr className="f-jeff">Certified Artisanal Mezcal / Gluten Free <br />
                                        No Additives / 100% Sustainable <br />
                                        CO-OP Grown & Produced<br /><br />
                                        Available in 3 different expressions: 100% Espadin, 80% Espadin/20% Barril & 100% Barril.<br /><br />
                                        750ml and 200ml bottles available in each expression. <br /><br /></abbr>
                                    Serve neat in a copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable premium mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br /><br />
                                    <abbr className="f-jeff">El Espíritu del Mezcal!</abbr>
                                </p>
                            </div>
                        </div>
                    </section> */}
                    
                </Container>
                <FooterComponent />
            </>
        )
    }
}
export default Info
