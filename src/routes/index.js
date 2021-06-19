import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Sidebar from '../layouts/Sidebar'
import Profile from '../screens/Profile'
import Friends from '../screens/Friends'
import PostDetails from '../screens/PostDetails'

import Dashboard from '../screens/Dashboard'
import LoginScreen from '../screens/Auth/Login'
import Registration from '../screens/Auth/Registration'


const Routes = () => {


    return (
        <Router>
            <Scene key='root'>
                <Scene key="login" component={LoginScreen} hideNavBar />
                <Scene initial key="regi" component={Registration} hideNavBar />
                <Scene key="dashboard" component={Dashboard} hideNavBar />
                <Scene
                    key="drawer_dashboard"
                    drawer
                    contentComponent={Sidebar}
                    drawerWidth={150}
                    hideNavBar>
                    <Scene key="dashboards" component={Dashboard} hideNavBar />
                </Scene>
                <Scene

                    key="drawer_profile"
                    drawer
                    contentComponent={Sidebar}
                    drawerWidth={150}
                    hideNavBar>
                    <Scene key="profile" component={Profile} hideNavBar />
                </Scene>
                <Scene

                    key="drawer_friends"
                    drawer
                    contentComponent={Sidebar}
                    drawerWidth={150}
                    hideNavBar>
                    <Scene key="friends" component={Friends} hideNavBar />
                </Scene>
                <Scene

                    key="drawer_details"
                    drawer
                    contentComponent={Sidebar}
                    drawerWidth={150}
                    hideNavBar>
                    <Scene key="details" component={PostDetails} hideNavBar />
                </Scene>
            </Scene>
        </Router>
    )
}

export default Routes
