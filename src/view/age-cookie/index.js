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
            <Container className="full-size m-0 fade-in height-webkit-fill-available">
                <section className="flex-display" style={{flex: '1'}}>
                    
                </section>
            </Container>
        )
    }
}
export default AgeAllowance