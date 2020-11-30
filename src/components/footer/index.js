import React, { Component } from 'react'
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <section className="footer-desktop">
                    <div className="subscribe">
                        <Input type="text" placeholder="EMAIL ADDRESS" />
                        <button>SUBMIT</button>
                        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    </div>
                    <div className="right-footer f-right">
                        <div className="social-icons">
                            <Icon name="twitter" size="huge" />
                            <Icon name="facebook f" size="huge" />
                            <Icon name="instagram" size="huge" />
                        </div>
                        <h3>© PAQUERA MEZCAL 2020</h3>
                    </div>
                </section>
                <section className="footer-mobile">
                    <div className="subscribe">
                        <Input type="text" placeholder="EMAIL ADDRESS" />
                        <button>SUBMIT</button>
                    </div>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <div className="social-icons">
                        <Icon name="twitter" size="huge" />
                        <Icon name="facebook f" size="huge" />
                        <Icon name="instagram" size="huge" />
                    </div>
                    <div>
                        <h3>© PAQUERA MEZCAL 2020</h3>
                    </div>
                </section>
            </section>
        )
    }
}
export default FooterComponent