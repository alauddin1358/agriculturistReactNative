import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Sidebar from '../layouts/Sidebar'

import LoginScreen from '../screens/Auth/Login'
import Registration from '../screens/Auth/Registration'


import Dashboard from '../screens/Dashboard'
import Profile from '../screens/Profile'
import Friends from '../screens/Friends'
import PostDetails from '../screens/PostDetails'
import AddPost from '../screens/AddPost'
import AddFile from '../screens/AddFiles'
import FriendsList from '../screens/FriendsList'


const Drawer = createDrawerNavigator();



const Routes = props => {

    return (


        <Drawer.Navigator drawerContent={props => <Sidebar {...props} />} drawerStyle={{ width: 150 }} initialRouteName="dashboard">
            <Drawer.Screen options={{ swipeEnabled: false }} name="login" component={LoginScreen} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="regi" component={Registration} />
            <Drawer.Screen name="profile" component={Profile} />
            <Drawer.Screen name="dashboard" component={Dashboard} />
            <Drawer.Screen name="friends" component={Friends} />
            <Drawer.Screen name="details" component={PostDetails} />
            <Drawer.Screen name="addPost" component={AddPost} />
            <Drawer.Screen name="addFile" component={AddFile} />
            <Drawer.Screen name="friendList" component={FriendsList} />
        </Drawer.Navigator>

    );
}

export default Routes
