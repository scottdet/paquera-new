import React, { Component, useState } from 'react'
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const CustomForm = ({status, message, onValidated }) => {
    const [email, setEamil] = useState('');
    const submit = () => 
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });
    return (
        <>
            {status === 'sending' && <div style={{color: "#e1e0d8"}}>sending...</div>}
            {status === 'error' && (
                <div style={{color: '#e1e0d8'}} 
                dangerouslySetInnerHTML={{ __html: message }}></div>
            )} 
            {status === "success" && (
              <div
                style={{ color: "green" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            <Input type="email" onChange={e=>setEamil(e.target.value)} placeholder="EMAIL ADDRESS" />
            <a onClick={submit}><button style={{cursor: 'pointer', top: '3.3px', position: 'relative'}}>SUBMIT</button></a>
        </>
    )
}

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const url = "https://paqueramezcal.us7.list-manage.com/subscribe/post?u=f4ffa6ffe304739b5053df13a&amp;id=daa6ea6e3e";
        return (
            <section>
                <section className="footer-desktop">
                    <div className="subscribe">
                        <MailchimpSubscribe
                            url={url}
                            render={({ subscribe, status, message}) => (
                                <div>
                                    <CustomForm
                                        status={status}
                                        message={message}
                                        onValidated={formData => subscribe(formData)}
                                    />
                                </div>
                            )}
                        />
                        {/* <Input type="text" placeholder="EMAIL ADDRESS" />
                        <a href="mailto:sales@paqueralife.com"><button style={{cursor: 'pointer'}}>SUBMIT</button></a> */}
                        {/* <p>
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p> */}
                        {/* <div id='product-component-1605295802728'></div> */}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65px'}}>
                      <a href="https://www.thewhiskeydealer.com/collections/paquera-mezcal"><button style={{cursor: 'pointer', paddingLeft: '30px', paddingRight: '30px', marginLeft: '-15px'}}>Buy Now</button></a>
                    </div>
                    <div className="right-footer f-right">
                        <div className="social-icons">
                            {/* <Icon name="twitter" size="huge" /> */}
                            <a className="social-icon" href="https://www.facebook.com/paqueramezcal"><Icon name="facebook f" size="huge" /></a>
                            <a className="social-icon" href="https://www.instagram.com/paqueramezcal/"><Icon name="instagram" size="huge" /></a>
                        </div>
                        <h3>© PAQUERA MEZCAL 2020</h3>
                    </div>
                </section>
                <section className="footer-mobile">
                    {/* <div style={{display: 'inherit'}}>
                        <div id='product-component-1605295731111'></div>
                        <div id='product-component-1605295802728'></div>
                        <div id='product-component-1605295847555'></div>
                    </div> */}
                    <div className="social-icons" style={{paddingTop: '15px'}}>
                        <a href="https://www.thewhiskeydealer.com/collections/paquera-mezcal"><button style={{cursor: 'pointer', paddingLeft: '30px', paddingRight: '30px', marginRight: '50px'}}>Buy Now</button></a>
                        {/* <Icon name="twitter" size="huge" /> */}
                        <a className="social-icon" href="https://www.facebook.com/paqueramezcal"><Icon name="facebook f" size="huge" /></a>
                        <a className="social-icon" href="https://www.instagram.com/paqueramezcal/"><Icon name="instagram" size="huge" /></a>
                    </div>
                </section>
            </section>
        )
    }
}
export default FooterComponent