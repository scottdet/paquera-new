import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'

class Story extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/story');
    }
    render() {
        return(
            <Container className="content mb-30 pl-20 pr-20 fade-in">
                <section className="storySection">
                    <div className="storyDiv">
                        <div className="width-25">
                            <img className="width-100" src="/img/PaqueraMezcal_Story_TopLeft3.png" />
                            <img className="width-100" src="/img/PaqueraMezcal_Story_BottomLeft3.png" />
                        </div>
                        <div className="width-50"></div>
                        <div className="width-25">
                            <img className="width-100" src="/img/PaqueraMezcal_Story_TopRight3.png" />
                            <img className="width-100" src="/img/PaqueraMezcal_Story_BottomRight3.png" />
                        </div>
                        <div className="storyContentDiv">
                            <p><abbr className="f-bold">PAQUERA</abbr> is meant to be appreciated and savored, we recommend sipping paquera slowly as to experiene its quality. Created froom a methodology perfected over generations of dedicated family artisans, our love for Mezcal has only deepened upon being exposed to its unique production process and rich culture. <br/> Paquera's mission and purpose is to contribute resources to the Union de Productores Agropecuarios del Distrito de Ejutla de Crespo(UPADEC), which is a coalition of palenques that work together to sustain and grow their micro-enterprises.</p>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }
}
export default Story