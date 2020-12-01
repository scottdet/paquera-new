import React, { Component } from 'react'
import { Grid, Button, Container } from 'semantic-ui-react'
import { cookies } from '../../cookie'

class AgeAllowance extends Component {
    constructor(props) {
        super(props);
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
            // <div className="age-container">
            //     <Container>
            //         <div className="age-inner-container">
            //             <Grid container direction="row">
            //                 <h1 className="age-text" style={{ textAlign: 'center', width: '100%'}}>
            //                     ARE YOU 21+ <br/>
            //                     YEARS OF AGE?
            //                 </h1>
            //             </Grid>
            //             <Grid className="flex-center" container item xs={12}>
            //                 <Button className="age-button" onClick={() => this.handleClick("Yes")}>YES</Button>
            //                 <Button className="age-button" onClick={() => this.handleClick("No")}>NO</Button>
            //             </Grid>
            //             <Grid container direction="row">
            //                 <h2 className="age-text2" style={{ textAlign: 'center', width: '100%'}}>
            //                     you must be of legal drinking age to enter this site. By entering you accept our terms and conditions and our privacy and cookie policy.<br />We encourage drinking responsibly.
            //                 </h2>
            //             </Grid>
            //         </div>
            //     </Container>
            // </div>
            <Container className="full-size m-0 fade-in">
                <section className="flex-display">
                    <div className="flex-space-end-between width-15">
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament1.png" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament2.png" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament6.png" />
                    </div>
                    <div className="flex-space-end-between width-70">
                        <img className="full-image-min-200 mt-20" src="/img/PaqueraMezcal_Entry_Ornament7.png" />
                        <section className="cookie-dialog-section">
                            <img className="width-50 top-left" src="/img/PaqueraMezcal_Story_TopLeft3.png" />
                            <img className="width-50 top-right" src="/img/PaqueraMezcal_Story_TopRight3.png" />
                            <img className="width-50 bottom-left" src="/img/PaqueraMezcal_Story_BottomLeft3.png" />
                            <img className="width-50 bottom-right" src="/img/PaqueraMezcal_Story_BottomRight3.png" />
                            <div className="cookie-alert-div">
                                <div className="title">
                                    <h1>ARE YOU 21+</h1>
                                    <h1>YEARS OF AGE?</h1>
                                </div>
                                <div className="flex-space-around">
                                    <button onClick={() => this.handleClick('Yes')}>YES</button>
                                    <button onClick={() => this.handleClick('No')}>NO</button>
                                </div>
                                <p>you must be of legal drinking age to enter this site. By entering you accept our terms and conditions and our privacy and cookie policy.<br />We encourage drinking responsibly.</p>
                            </div>
                        </section>
                        <img className="full-image-min-200 mb-20" src="/img/PaqueraMezcal_Entry_Ornament8.png" />
                    </div>
                    <div className="flex-space-end-between width-15">
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament4.png" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament3.png" />
                        <img className="full-image" src="/img/PaqueraMezcal_Entry_Ornament5.png" />
                    </div>
                </section>
            </Container>
        )
    }
}
export default AgeAllowance