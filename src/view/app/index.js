import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HeaderComponent from '../../components/header'
import Home from './home'
import Info from './info'
import Story from './story'
import StockList from './stocklist'
import FooterComponent from '../../components/footer'

const Main = () => {
    return (
        <section className="full-content m-0">
            <HeaderComponent />
            <Switch>
                <Redirect exact from={'/'} to={'/home'} />
                <Route path={'/home'} component={Home} />
                <Route path={'/info'} component={Info} />
                <Route path={'/story'} component={Story} />
                <Route path={'/stocklist'} component={StockList} />
                <Redirect to="/home" />
            </Switch>
            <FooterComponent />
        </section>
    )
}
export default Main;