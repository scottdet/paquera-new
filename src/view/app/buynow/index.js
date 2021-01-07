import React, { Component } from 'react'
import { Container, Modal, Icon, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ReactGA from 'react-ga'
import HeaderComponent from '../../../components/header'
import FooterComponent from '../../../components/footer'

class Buynow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            open6: false,
        }
    }
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/Buy Now');
        
        var header = document.getElementsByClassName("header")[0];
        header.style.display = "none";
        console.log(header);
    }
    render() {
        return (
            <section className="full-content m-0">
                <HeaderComponent />
                <Container className="mainContent pl-20 pr-20 mb-30 fade-in" style={{flex: 'none', marginTop: '20px'}}>
                    <div className="row" style={{marginTop: '30px'}}>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img" src="/img/Paquera Espadin Grande_transparente_low_res.png" alt=""/>
                                    </div>
                                    <h1 style={{paddingLeft: '10px', paddingRight: '10px'}}>
                                        Paquera Espadin Mezcal
                                        <Modal
                                            trigger={<Icon className="infoIcon" size="small" name="info circle"/>}
                                            onClose={() => this.setState({open1: false})}
                                            onOpen={() => this.setState({open1: true})}
                                            open={this.state.open1}
                                            size="small"
                                        >
                                            <Modal.Header><abbr className="f-bold f-Jeff">New 100% Espadin (750ml)</abbr></Modal.Header>
                                            <Modal.Content>
                                                <p className="f-HiH">
                                                    Produced by a CO-OP in San Miguel Ejutla, Paquera Mezcal was created from a methodology perfected over generations of dedicated family artisans. Our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture.<br/><br/>

                                                    Serve neat in a Copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br/><br/>

                                                    <abbr className="f-Jeff">Awards & Accolades</abbr><br/>
                                                    • 2019 - Gold / 93 points, Tasting Panel Magazine<br/><br/>

                                                    <abbr className="f-Jeff text-underline">Production Details:</abbr><br/>
                                                    <abbr className="f-Jeff">TYPE: 100% Certified Artisanal Mezcal <br/>
                                                    HEAD MEZCALERO: Francisco Javier<br/>
                                                    ABV: 42.5% (85 Proof)<br/>
                                                    ORGIN: San Miguel Ejutla<br/>
                                                    HARVEST: 7 Yr Espadin Agave<br/>
                                                    OVEN: Conical Earthen Oven<br/>
                                                    MILL: Stone Mill<br/>
                                                    FERMENTATION: Awewete Wood Barrel<br/>
                                                    DISTILLATION TYPE: Copper Still <br/>
                                                    DISTILLED: 2X<br/><br/></abbr>

                                                    <abbr className="f-Jeff text-underline">Tasting Notes:</abbr><br/>
                                                    “Earthy, smokey nose; silky and earthy with vegetal flavors and some sweet vanilla notes; smooth and lush, balanced and long.”
                                                </p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button 
                                                    content="Close"
                                                    labelPosition="right"
                                                    onClick={() => this.setState({open1: false})}
                                                />
                                            </Modal.Actions>
                                        </Modal>
                                    </h1>
                                    <h2>$47.99</h2>
                                    <div id='product-component-1609291123889' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img" src="/img/Paquera Espadin y Barril Grande_transparente_low_res.png" alt=""/>
                                    </div>
                                    <h1>
                                        Paquera 80% Espadin 20% Barril
                                        <Modal
                                            trigger={<Icon className="infoIcon" size="small" name="info circle"/>}
                                            onClose={() => this.setState({open2: false})}
                                            onOpen={() => this.setState({open2: true})}
                                            open={this.state.open2}
                                            size="small"
                                        >
                                            <Modal.Header><abbr className="f-bold f-Jeff">New 80% Espadin/20% Barril (750ml)</abbr></Modal.Header>
                                            <Modal.Content>
                                                <p className="f-HiH">
                                                    Produced by a CO-OP in San Miguel Ejutla, Paquera Mezcal was created from a methodology perfected over generations of dedicated family artisans. Our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture.<br/><br/>

                                                    Serve neat in a Copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br/><br/>

                                                    <abbr className="f-Jeff">Awards & Accolades</abbr><br/>
                                                    • 2019 - Gold / 93 points, Tasting Panel Magazine<br/><br/>

                                                    <abbr className="f-Jeff text-underline">Production Details:</abbr><br/>
                                                    <abbr className="f-Jeff">
                                                        TYPE: 100% Certified Artisanal Mezcal<br/> 
                                                        HEAD MEZCALERO: Francisco Javier<br/>
                                                        ABV: 42.5% (85 Proof)<br/>
                                                        ORGIN: San Miguel Ejutla<br/>
                                                        HARVEST: 7 Yr Espadin Agave/ 10 Yr Barril Agave<br/>
                                                        OVEN: Conical Earthen Oven<br/>
                                                        MILL: Stone Mill<br/>
                                                        FERMENTATION: Awewete Wood Barrel<br/>
                                                        DISTILLATION TYPE: Copper Still <br/>
                                                        DISTILLED: 2X<br/><br/>
                                                    </abbr>

                                                    <abbr className="f-Jeff text-underline">Tasting Notes:</abbr><br/>
                                                    “Spicy but restrained nose; silky and elegant with balanced, stylish flavors and considerable finesse and breeding, crip, and long.”
                                                </p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button 
                                                    content="Close"
                                                    labelPosition="right"
                                                    onClick={() => this.setState({open2: false})}
                                                />
                                            </Modal.Actions>
                                        </Modal>
                                    </h1>
                                    <h2>$56.99</h2>
                                    <div id='product-component-1609291052376' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img-small" src="/img/paquera mini espadin_transparente copy.png" alt=""/>
                                    </div>
                                    <h1>
                                        Paquera Espadin Mezcal - 200 ML
                                        <Modal
                                            trigger={<Icon className="infoIcon" size="small" name="info circle"/>}
                                            onClose={() => this.setState({open3: false})}
                                            onOpen={() => this.setState({open3: true})}
                                            open={this.state.open3}
                                            size="small"
                                        >
                                            <Modal.Header><abbr className="f-bold f-Jeff">New 100% Espadin 200ml</abbr></Modal.Header>
                                            <Modal.Content>
                                                <p className="f-HiH">
                                                    Produced by a CO-OP in San Miguel Ejutla, Paquera Mezcal was created from a methodology perfected over generations of dedicated family artisans. Our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture.<br/><br/>

                                                    Serve neat in a Copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br/><br/>

                                                    <abbr className="f-Jeff">Awards & Accolades</abbr><br/>
                                                    • 2019 - Gold / 93 points, Tasting Panel Magazine<br/><br/>

                                                    <abbr className="f-Jeff text-underline">Production Details:</abbr><br/>
                                                    <abbr className="f-Jeff">TYPE: 100% Certified Artisanal Mezcal <br/>
                                                    HEAD MEZCALERO: Francisco Javier<br/>
                                                    ABV: 42.5% (85 Proof)<br/>
                                                    ORGIN: San Miguel Ejutla<br/>
                                                    HARVEST: 7 Yr Espadin Agave<br/>
                                                    OVEN: Conical Earthen Oven<br/>
                                                    MILL: Stone Mill<br/>
                                                    FERMENTATION: Awewete Wood Barrel<br/>
                                                    DISTILLATION TYPE: Copper Still <br/>
                                                    DISTILLED: 2X<br/><br/></abbr>

                                                    <abbr className="f-Jeff text-underline">Tasting Notes:</abbr><br/>
                                                    “Earthy, smokey nose; silky and earthy with vegetal flavors and some sweet vanilla notes; smooth and lush, balanced and long.”
                                                </p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button 
                                                    content="Close"
                                                    labelPosition="right"
                                                    onClick={() => this.setState({open3: false})}
                                                />
                                            </Modal.Actions>
                                        </Modal>
                                    </h1>
                                    <h2>$23.99</h2>
                                    <div id='product-component-1609291155567' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img" src="/img/Paquerra Barril Grande_transparente_low_res.png" alt=""/>
                                    </div>
                                    <h1>
                                        Paquera 100% Barril Mezcal
                                        <Modal
                                            trigger={<Icon className="infoIcon" size="small" name="info circle"/>}
                                            onClose={() => this.setState({open4: false})}
                                            onOpen={() => this.setState({open4: true})}
                                            open={this.state.open4}
                                            size="small"
                                        >
                                            <Modal.Header><abbr className="f-bold f-Jeff">New 100% Barril (750ml)</abbr></Modal.Header>
                                            <Modal.Content>
                                                <p className="f-HiH">
                                                    Produced by a CO-OP in San Miguel Ejutla, Paquera Mezcal was created from a methodology perfected over generations of dedicated family artisans. Our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture.<br/><br/>

                                                    Serve neat in a Copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br/><br/>

                                                    <abbr className="f-Jeff">Awards & Accolades</abbr><br/>
                                                    • 2019 - Double Gold / 94 points, Tasting Panel Magazine<br/><br/>

                                                    <abbr className="f-Jeff text-underline">Production Details:</abbr><br/>
                                                    <abbr className="f-Jeff">
                                                        TYPE: 100% Certified Artisanal Mezcal <br/>
                                                        HEAD MEZCALERO: Francisco Javier<br/>
                                                        ABV: 42.5% (85 Proof)<br/>
                                                        ORGIN: San Miguel Ejutla<br/>
                                                        HARVEST: 10 Yr Barril Agave<br/>
                                                        OVEN: Conical Earthen Oven<br/>
                                                        MILL: Stone Mill<br/>
                                                        FERMENTATION: Awewete Wood Barrel<br/>
                                                        DISTILLATION TYPE: Copper Still <br/>
                                                        DISTILLED: 2X<br/><br/></abbr>

                                                    <abbr className="f-Jeff text-underline">Tasting Notes:</abbr><br/>
                                                    “Floral nose; silky texture with tangy style and bright, righ, elegant style; ripe and lush with great depth and tangy notes of earth and spice, long and racy, silky and complex.”
                                                </p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button 
                                                    content="Close"
                                                    labelPosition="right"
                                                    onClick={() => this.setState({open4: false})}
                                                />
                                            </Modal.Actions>
                                        </Modal>
                                    </h1>
                                    <h2>$72.99</h2>
                                    <div id='product-component-1609179340690' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img-small" src="/img/pequeña1_Barril.png" alt=""/>
                                    </div>
                                    <h1>
                                        Paquera 100% Barril Mezcal - 200 ML
                                        <Modal
                                            trigger={<Icon className="infoIcon" size="small" name="info circle"/>}
                                            onClose={() => this.setState({open5: false})}
                                            onOpen={() => this.setState({open5: true})}
                                            open={this.state.open5}
                                            size="small"
                                        >
                                            <Modal.Header><abbr className="f-bold f-Jeff">New 100% Barril 200ml</abbr></Modal.Header>
                                            <Modal.Content>
                                                <p className="f-HiH">
                                                    Produced by a CO-OP in San Miguel Ejutla, Paquera Mezcal was created from a methodology perfected over generations of dedicated family artisans. Our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture.<br/><br/>

                                                    Serve neat in a Copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br/><br/>

                                                    <abbr className="f-Jeff">Awards & Accolades</abbr><br/>
                                                    • 2019 - Double Gold / 94 points, Tasting Panel Magazine<br/><br/>

                                                    <abbr className="f-Jeff text-underline">Production Details:</abbr><br/>
                                                    <abbr className="f-Jeff">
                                                        TYPE: 100% Certified Artisanal Mezcal <br/>
                                                        HEAD MEZCALERO: Francisco Javier<br/>
                                                        ABV: 42.5% (85 Proof)<br/>
                                                        ORGIN: San Miguel Ejutla<br/>
                                                        HARVEST: 10 Yr Barril Agave<br/>
                                                        OVEN: Conical Earthen Oven<br/>
                                                        MILL: Stone Mill<br/>
                                                        FERMENTATION: Awewete Wood Barrel<br/>
                                                        DISTILLATION TYPE: Copper Still <br/>
                                                        DISTILLED: 2X<br/><br/></abbr>

                                                    <abbr className="f-Jeff text-underline">Tasting Notes:</abbr><br/>
                                                    “Floral nose; silky texture with tangy style and bright, righ, elegant style; ripe and lush with great depth and tangy notes of earth and spice, long and racy, silky and complex.”
                                                </p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button 
                                                    content="Close"
                                                    labelPosition="right"
                                                    onClick={() => this.setState({open5: false})}
                                                />
                                            </Modal.Actions>
                                        </Modal>
                                    </h1>
                                    <h2>$35.99</h2>
                                    <div id='product-component-1609291018502' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-6">
                                <div className="buynow-img-div">
                                    <div>
                                        <img className="buynow-img-small" src="/img/pequeña2_transparente.png" alt=""/>
                                    </div>
                                    <h1>
                                        Paquera 80% Espadin 20% Barril - 200 ML
                                        <Modal
                                            trigger={<Icon className="infoIcon" size="small" name="info circle"/>}
                                            onClose={() => this.setState({open6: false})}
                                            onOpen={() => this.setState({open6: true})}
                                            open={this.state.open6}
                                            size="small"
                                        >
                                            <Modal.Header><abbr className="f-bold f-Jeff">New 80% Espadin/20% Barril 200ml</abbr></Modal.Header>
                                            <Modal.Content>
                                                <p className="f-HiH">
                                                    Produced by a CO-OP in San Miguel Ejutla, Paquera Mezcal was created from a methodology perfected over generations of dedicated family artisans. Our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture.<br/><br/>

                                                    Serve neat in a Copita or made in cocktail form, Paquera doesn't overwhelm you with smoke but eases you into its smoothness. It can be regarded as “the most approachable mezcal in the market”. Balanced and full from the start and finishes buttery. It's to be enjoyed in social settings, either celebratory or with the people you love. <br/><br/>

                                                    <abbr className="f-Jeff">Awards & Accolades</abbr><br/>
                                                    • 2019 - Gold / 93 points, Tasting Panel Magazine<br/><br/>

                                                    <abbr className="f-Jeff text-underline">Production Details:</abbr><br/>
                                                    <abbr className="f-Jeff">
                                                        TYPE: 100% Certified Artisanal Mezcal<br/> 
                                                        HEAD MEZCALERO: Francisco Javier<br/>
                                                        ABV: 42.5% (85 Proof)<br/>
                                                        ORGIN: San Miguel Ejutla<br/>
                                                        HARVEST: 7 Yr Espadin Agave/ 10 Yr Barril Agave<br/>
                                                        OVEN: Conical Earthen Oven<br/>
                                                        MILL: Stone Mill<br/>
                                                        FERMENTATION: Awewete Wood Barrel<br/>
                                                        DISTILLATION TYPE: Copper Still <br/>
                                                        DISTILLED: 2X<br/><br/>
                                                    </abbr>

                                                    <abbr className="f-Jeff text-underline">Tasting Notes:</abbr><br/>
                                                    “Spicy but restrained nose; silky and elegant with balanced, stylish flavors and considerable finesse and breeding, crip, and long.”
                                                </p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button 
                                                    content="Close"
                                                    labelPosition="right"
                                                    onClick={() => this.setState({open6: false})}
                                                />
                                            </Modal.Actions>
                                        </Modal>
                                    </h1>
                                    <h2>$26.99</h2>
                                    <div id='product-component-1609291082156' style={{margin: 'auto', marginTop: '-30px'}}></div>
                                </div>
                            </div>
                        </div>     
                </Container>
                <FooterComponent />
            </section>
        )
    }
}
export default Buynow
