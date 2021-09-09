import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'
import HeaderComponent from '../../components/header'
import FooterComponent from '../../components/footer'

class Policy extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-127153210-1');
        ReactGA.pageview('/terms&condition');
    }

    render() {
        return (
            <>
                <HeaderComponent />
                <Container className="fade-in" style={{ display: 'flex', justifyContent: 'center' }}>
                    <section className="policySection">
                        <div>
                            <h1>Terms and Conditions, Privacy and Cookie Policy</h1>
                            <p>Welcome to the PAQUERA MEZCAL, <abbr>www.paqueramezcal.com</abbr> (the "Site"), brought to you by Paquera Mezcal ("Paquera"). Paquera Mezcal ("Brand") is owned exclusively by Paquera, LLC.</p>
                        </div>

                        <div>
                            <h1>Introduction</h1>
                            <p>Paquera is committed to protecting the privacy of your personal information. This privacy Policy will discuss the collection and use such information. Personally identifiable information includes, but is not limited to, name, date of birth, address (mailing and billing), city, state, zip code, telephone numbers, cell phone numbers, gender, house-hold income ranges, consumption habits, product usage, attitudes and preferences regarding our products and other personal information (collectively, "Personal Information"). By using the Site, you consent to the terms of this Privacy Policy. This policy does not apply to the practices of companies or persons that Paquera does not control or employ.</p>
                        </div>

                        <div>
                            <h1>Persons Under Legal Purchase Age Are Not Allowed</h1>
                            <p>Paquera maintains this Site for the use of individuals who are of legal purchase age of alcoholic beverages under applicable law, and you must be of legal purchase age where you reside to access this Site or provide any information to us. We do not solicit or knowingly collect Personal Information from any individuals under such legal purchase age, and we do not knowingly market our products or services to persons under such legal purchase age. Prior to the collection of any Personal Information, you will be required to affirm that you are of legal purchase age.</p>
                        </div>

                        <div>
                            <h1>Information Collection, Use and Disclosure</h1>
                            <p>We collect certain Personal Information that you volunteer to us when you visit the Site, use Site services or enter promotions or contests offered on the Site. When you use certain Site services, you may be required to provide us certain Personal Information (for example, billing information if you purchase an item from the Site). Paquera will not sell or rent your Personal Information to anyone. Unless we have your specific consent to use your Personal Information in a different manner, any Personal Information provided by you will be held by Paquera and may only be used by Paquera and its affiliated companies, agents, partners, or other related third parties as indicated on the Site or as described below:</p>

                            <ul>
                                <li>
                                    <b>Marketing Communications:</b> We may use your Personal Information in order to communicate with you about our products and services. However, you will be able to choose whether or not to receive such communications (See Section 5 below). If you choose to receive such communications, you will be able to unsubscribe from such communications at any time (See Section 6 below).
                                </li>
                                <li>
                                    <b>Marketing Analysis:</b> We may use information for internal marketing analysis, for example, to assess trends amongst our consumers or to measure the amount of traffic to our websites. We may also share non-personal information with others, such as advertisers, in aggregate anonymous form, which means that the information will not contain any Personal Information about you. We will only share identifiable Personal Information with third parties for marketing analysis with your consent.
                                </li>
                                <li>
                                    <b>Transactional Purposes:</b> We may use your Personal Information in order to respond to your queries and requests and to manage transactions such as credit card payments for any goods that you order from us or any of our agents, or for the fulfillment of such transactions (e.g., delivery). The personal information you provide may be used by an authorized vendor to fulfill that order. Unless we tell you differently, these companies do not have any right to use the Personal Information we provide to them beyond what is necessary to assist us.
                                </li>
                                <li>
                                    <b>Sale or Transfer:</b> In the event of a sale, merger, consolidation, change in control or transfer of substantial assets to a third party, we may transfer or assign to such acquiring third party information concerning your relationship with us, including without limitation, Personal Information that you have provided and other information concerning your relationship with us.
                                </li>
                                <li>
                                    <b>Legal Purposes:</b> We may use your Personal Information in order to respond to subpoenas, court orders or as otherwise required by any law, regulation, legal process or government request or where we believe such action is necessary in order to detect, protect or defend us and/or other third parties against error, negligence, breach of contract, theft, fraud and other illegal or harmful activity, to comply with our audit and security requirements, and to audit compliance with or corporate policies, procedures, legal and contractual obligations.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h1>Public (or Interactive) Areas of Website</h1>
                            <p>Information that you post on or through the public areas of the Site, if any (such as chat rooms, bulletin boards or discussion groups) are generally accessible to and may be collected by others parties. This may result in unsolicited messages or other unwelcome contact from third parties not related to Paquera Users of this Site are encouraged to exercise caution when providing Personal Information about themselves in public (or interactive) areas of this Site. Paquera is not responsible for any unsolicited or unwelcome contact from third parties not related to Paquera as a result of you providing any information in public (or interactive) areas of this Site.</p>
                        </div>

                        <div>
                            <h1>Receiving Marketing Communications</h1>
                            <p>We may be interested in sending you certain information (digitally or otherwise) regarding the Brand’s products, services, promotions, or upcoming events that we believe may be of interest to you. You are able to choose whether or not you are interested in receiving such information. Prior to us sending you any direct digital marketing communications, you will be required to “opt-in” to choose to receive such marketing communications.</p>
                        </div>

                        <div>
                            <h1>Editing or Deleting Your Account Information and Preferences</h1>
                            <p>You may request that we edit or delete your account information and preferences, including but not limited “opting-out” from receiving any digital marketing communications, at any time, by requesting so in an e-mail to sales@paqueralife.com or following the “opt-out” instructions including in the digital marketing communication sent to you, if applicable.
                            </p>
                        </div>

                        <div>
                            <h1>Use of Cookies</h1>
                            <p>As is common with many websites, we may use “cookies” to help us gather and store information about visitors to this Site. A cookie is a small data file that our server sends to your browser when you visit the Site. The use of cookies helps us to assist your use of certain aspects of the Site. You can delete cookies at any time or you can set your browser to reject or disable cookies. We may use cookies to provide information when you visit the Site. The Site also automatically receives and records information on our server logs from your browser, including your IP address, cookie information and the page you requested. We use this information for three general purposes: (i) to customize the advertising and content you see, (ii) to fulfill your requests for certain products and services, and (iii) to contact you about services, promotions, contests and events (if you have chosen to receive such information, as described above). We may also compile and report to third parties (such as advertisers) aggregate statistics about our users in terms of numbers, traffic patterns and related Site information.</p>
                        </div>

                        <div>
                            <h1>External Links</h1>
                            <p>This Site may include links to other websites whose privacy policies we do not control. Once you leave our servers (you can usually tell where you are by checking the URL in the location bar on your browser), use of any information you provide is governed by the privacy policy of the operator of the site you are visiting (unless otherwise stated). That policy may differ from ours. If you can’t find the privacy policy of any of these sites via a link from the site’s homepage, you should contact the site directly for more information.</p>
                        </div>

                        <div>
                            <h1>Changes to this Privacy Policy</h1>
                            <p>We may amend this policy from time to time. If we make any substantial changes in the way we use your personal information we will notify you by posting a prominent announcement on our pages. This policy was last amended on August 1, 2021.
                            </p>
                        </div>

                        <div>
                            <h1>Securing Your Information</h1>
                            <p>We use reasonable administrative, technical, and physical security measures to protect your Personal Information from unauthorized access and use. However, regardless of the effectiveness of our security measures, no security system is impenetrable. We cannot guarantee the security of our database, not can we guarantee that the information you supply will not be intercepted while being transmitted to us over the Internet. We ask you to do your part, by keeping any computer passwords you use to access the Internet or this Site strictly confidential.</p>
                        </div>

                        <div>
                            <p>
                                <br /><br />
                                Please Drink Responsibly.
                                <br /><br /><br />
                                All Rights Reserved Ⓒ
                                <br /><br /><br /><br />
                            </p>
                        </div>
                    </section>
                </Container>
                <FooterComponent />
            </>
        )
    }
}
export default Policy
