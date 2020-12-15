import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: 'home',
        }
    }
    componentDidMount() {
        var url = (window.location.href).split(/[/]/);
        var header = document.getElementsByClassName("header")[0];
        var headerItems = document.getElementsByClassName("header")[0].getElementsByTagName("a");
        if(url[3] === 'home' || url[3] === '') {
            header.style.display = "flex";
            for (var i = 0; i < headerItems.length; i++) {
                headerItems[i].style.color = "#e1e0d8";
            }
        } else if(url[3] === 'stocklist') {
            var secondHeaderItems = document.getElementsByClassName("header")[1].getElementsByTagName("a");
            header.style.display = "none";
            for (i = 0; i < secondHeaderItems.length; i++) {
                secondHeaderItems[i].style.color = "#3b49ae";
            }
        } else {
            header.style.display = "flex";
            for (i = 0; i < headerItems.length; i++) {
                headerItems[i].style.color = "#3b49ae";
            }
        }
    }
    handleClick = (menu) => {
        var header = document.getElementsByClassName("header")[0];
        var headerItems = document.getElementsByClassName("header")[0].getElementsByTagName("a");
        if (menu === 'home') {
            for (var i = 0; i < headerItems.length; i++) {
                headerItems[i].style.color = "#e1e0d8";
            }
            header.style.display = "flex";
        } else if(menu === 'stocklist') {
            header.style.display = "none";
            if (document.getElementsByClassName("header")[1]) {
                var secondHeaderItems = document.getElementsByClassName("header")[1].getElementsByTagName("a");
                for (i = 0; i < secondHeaderItems.length; i++) {
                    secondHeaderItems[i].style.color = "#3b49ae";
                }
            }
        } else {
            header.style.display = "flex";
            for (i = 0; i < headerItems.length; i++) {
                headerItems[i].style.color = "#3b49ae";
            }
        }
        this.setState({ menuActive: menu })
    }
    render() {
        return (
            <section className="header">
                <NavLink to={"/info"} className={this.state.menuActive === 'info' ? 'active' : ''}>
                    <abbr onClick={() => this.handleClick('info')}>Info</abbr>
                </NavLink>
                <NavLink to={"/story"} className={this.state.menuActive === 'story' ? 'active' : ''}>
                    <abbr onClick={() => this.handleClick('story')}>Our Story</abbr>
                </NavLink>
                <NavLink to={"/home"}>
                    <abbr onClick={() => this.handleClick('home')}>
                        <img src="/img/_PaqueraMezcal_Logo.png" />
                    </abbr>
                </NavLink>
                <NavLink to={"/stocklist"} className={this.state.menuActive === 'stocklist' ? 'active' : ''}>
                    <abbr onClick={() => this.handleClick('stocklist')}>Stocklist</abbr>
                </NavLink>
                <a href="https://www.mypaquera.com">
                    <abbr>Store</abbr>
                </a>
                {/* <NavLink to={"/store"} className={this.state.menuActive === 'store' ? 'active' : ''}>
                    <abbr onClick={() => this.handleClick('store')}>Store</abbr>
                </NavLink> */}
            </section>
        )
    }
}
export default HeaderComponent