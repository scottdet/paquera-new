import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HeaderComponent from '../../components/header'
import Home from './home'
import Info from './info'
import Story from './story'
import StockList from './stocklist'
import FooterComponent from '../../components/footer'

const Main = () => {
    return (
        <Switch>
            <Redirect exact from={'/'} to={'/home'} />
            <Route path={'/home'} component={Home} />
            <Route path={'/info'} component={Info} />
            <Route path={'/story'} component={Story} />
            <Route path={'/stocklist'} component={StockList} />
            <Redirect to="/home" />
        </Switch>
    )
}
export default Main;