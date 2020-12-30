import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HeaderComponent from '../../components/header'
import Home from './home'
import Info from './info'
import Story from './story'
import StockList from './stocklist'
import BuyNow from './buynow'
// import FooterComponent from '../../components/footer'

const Main = () => {
    return (
        <section className="full-content m-0 height-webkit-fill-available">
            <HeaderComponent />
            <Switch>
                <Redirect exact from={'/'} to={'/home'} />
                <Route path={'/home'} component={Home} />
                <Route path={'/info'} component={Info} />
                <Route path={'/story'} component={Story} />
                <Route path={'/stocklist'} component={StockList} />
                <Route path={'/buynow'} component={BuyNow} />
                <Redirect to="/home" />
            </Switch>
        </section>
    )
}
export default Main;