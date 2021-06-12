import React, { useEffect } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { BackHandler } from "react-native"
import Sidebar from '../Sidebar'
import Profile from '../screens/Profile'
import Friends from '../screens/Friends'
import PostDetails from '../screens/PostDetails'

import Dashboard from '../screens/Dashboard'
import LoginScreen from '../screens/Auth/Login'


const Routes = props => {

    const onBackPress = () => {
        // Do Whatever you want to do on back button click
        // Return true to stop default back navigaton
        BackHandler.exitApp();
        // Return false to keep default back navigaton
        return true;
    };

    BackHandler.addEventListener(
        'hardwareBackPress', onBackPress
    );


    return (
        <Router backAndroidHandler={onBackPress}>
            <Scene key='root'>
                <Scene key="login" component={LoginScreen} hideNavBar />
                <Scene
                    key="drawer_dash"
                    drawer
                    contentComponent={Sidebar}
                    drawerWidth={150}
                    hideNavBar>
                    <Scene key="dashboard" component={Dashboard} hideNavBar />
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
    );
}

export default Routes;
