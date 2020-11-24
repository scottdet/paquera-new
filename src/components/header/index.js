import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: '',
        }
    }
    handleClick = (menu) => {
        this.setState({menuActive: menu})
    }
    render() {
        return(
            <section className="header">
                <NavLink to={"/info"} className={this.state.menuActive === 'info' ? 'active' : ''}>
                    <abbr onClick={()=>this.handleClick('info')}>Info</abbr>
                </NavLink>
                <NavLink to={"/story"} className={this.state.menuActive === 'story' ? 'active' : ''}>
                    <abbr onClick={()=>this.handleClick('story')}>Our Story</abbr>
                </NavLink>
                <NavLink to={"/home"}>
                    <abbr onClick={()=>this.handleClick('home')}>
                        <img src="/img/_PaqueraMezcal_Logo.png" />
                    </abbr>
                </NavLink>
                <NavLink to={"/stocklist"} className={this.state.menuActive === 'stocklist' ? 'active' : ''}>
                    <abbr onClick={()=>this.handleClick('stocklist')}>Stocklist</abbr>
                </NavLink>
                <NavLink to={"/store"} className={this.state.menuActive === 'store' ? 'active' : ''}>
                    <abbr onClick={()=>this.handleClick('store')}>Store</abbr>
                </NavLink>                
            </section>
        )
    }
}
export default HeaderComponent