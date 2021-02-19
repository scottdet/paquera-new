import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'
import FooterComponent from '../../../components/footer'

class Story extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/story');
    }
    render() {
        return(
            <>
                <Container className="mainContent mb-30 pl-20 pr-20 fade-in">
                    <section className="storySection">
                        <div className="storyDiv">
                            <div className="width-25">
                                <img className="width-100" src="/img/PaqueraMezcal_Story_TopLeft3.png" alt="" />
                                <img className="width-100" src="/img/PaqueraMezcal_Story_BottomLeft3.png" alt="" />
                            </div>
                            <div className="width-50"></div>
                            <div className="width-25">
                                <img className="width-100" src="/img/PaqueraMezcal_Story_TopRight3.png" alt="" />
                                <img className="width-100" src="/img/PaqueraMezcal_Story_BottomRight3.png" alt="" />
                            </div>
                            <div className="storyContentDiv">
                                <p><abbr className="f-bold">PAQUERA</abbr> is meant to be appreciated and savored, we recommend sipping paquera slowly as to experience its quality. Created from a methodology perfected over generations of dedicated family artisans, our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture. <br/><br/> Paquera's mission is to contribute resources to the Union de Productores Agropecuarios del Distrito de Ejutla de Crespo(UPADEC), which is a coalition of palenques that work together to sustain and grow their micro-enterprises.</p>
                            </div>
                        </div>
                    </section>
                </Container>
                <FooterComponent />
            </>
        )
    }
}
export default Story
