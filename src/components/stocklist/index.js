import React, { Component } from 'react'

class StockListComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var me = document.querySelector('script[src="https://stockist.co/embed/v1/widget.min.js"]');
        if (me != null) {
            window.location.href = "/stocklist"
        }
        (function (s, t, o, c, k) {
            c = s.createElement(t); c.src = o; c.async = 1;
            k = s.getElementsByTagName(t)[0]; k.parentNode.insertBefore(c, k);
        })(document, 'script', 'https://stockist.co/embed/v1/widget.min.js');
    }
    render() {
        return (
            <section style={{display: 'block', position: 'relative'}}>
                {/* <h2>Find Our Stores</h2> */}
                <div data-stockist-widget-tag="u7318"></div>
            </section>
        )
    }
}
export default StockListComponent