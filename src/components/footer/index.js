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
                        <button style={{cursor: 'pointer'}}>SUBMIT</button>
                        {/* <p>
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p> */}
                        {/* <div id='product-component-1605295802728'></div> */}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px'}}>
                      <a href="https://www.thewhiskeydealer.com/collections/paquera-mezcal"><button style={{cursor: 'pointer'}}>Buy Now</button></a>
                    </div>
                    <div className="right-footer f-right">
                        <div className="social-icons">
                            {/* <Icon name="twitter" size="huge" /> */}
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
                    {/* <div style={{display: 'inherit'}}>
                        <div id='product-component-1605295731111'></div>
                        <div id='product-component-1605295802728'></div>
                        <div id='product-component-1605295847555'></div>
                    </div> */}
                    <p>
                      <a href="https://www.thewhiskeydealer.com/collections/paquera-mezcal"><button style={{cursor: 'pointer'}}>Buy Now</button></a>
                    </p>
                    <div className="social-icons">
                        {/* <Icon name="twitter" size="huge" /> */}
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