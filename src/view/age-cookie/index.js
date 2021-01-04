import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { cookies } from '../../cookie'

class AgeAllowance extends Component {
    componentDidMount() {
        // var x = document.getElementsByClassName("shopify-buy-frame");
        // for (var i = 0; i < x.length; i++) {
        //     x[i].style.display = 'none';
        // }
    }
    handleClick = (res) => {
        if (res === 'Yes') {
            cookies.set('verification', 'yes', { path: '/' });
            window.location.href = "/";
        } else {
            cookies.set('verification', 'no', { path: '/' });
            window.location.href = "https://google.com";
        }
    }
    render() {
        return (
            <Container className="full-size m-0 fade-in height-webkit-fill-available">
                <section className="flex-display" style={{flex: '1'}}>
                    <div className="flex-space-end-between width-15">
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament1.png" alt="" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament2.png" alt="" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament6.png" alt="" />
                    </div>
                    <div className="flex-space-end-between width-70">
                        <img className="full-image-min-200 mt-20" src="/img/PaqueraMezcal_Entry_Ornament7.png" alt="" />
                        <section className="cookie-dialog-section">
                            <img className="width-50 top-left" src="/img/PaqueraMezcal_Story_TopLeft3.png" alt="" />
                            <img className="width-50 top-right" src="/img/PaqueraMezcal_Story_TopRight3.png" alt="" />
                            <img className="width-50 bottom-left" src="/img/PaqueraMezcal_Story_BottomLeft3.png" alt="" />
                            <img className="width-50 bottom-right" src="/img/PaqueraMezcal_Story_BottomRight3.png" alt="" />
                            <div className="cookie-alert-div">
                                <div className="title">
                                    <h1>ARE YOU 21+</h1>
                                    <h1>YEARS OF AGE?</h1>
                                </div>
                                <div className="flex-space-around">
                                    <button onClick={() => this.handleClick('Yes')}>YES</button>
                                    <button onClick={() => this.handleClick('No')}>NO</button>
                                </div>
                                <p>You must be of legal drinking age to enter this site. By entering you accept our terms and conditions and our privacy and cookie policy.<br />We encourage drinking responsibly.</p>
                            </div>
                        </section>
                        <img className="full-image-min-200 mb-20" src="/img/PaqueraMezcal_Entry_Ornament8.png" alt="" />
                    </div>
                    <div className="flex-space-end-between width-15">
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament4.png" alt="" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament3.png" alt="" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament5.png" alt="" />
                    </div>
                </section>
            </Container>
        )
    }
}
export default AgeAllowance