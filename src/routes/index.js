import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Sidebar from '../layouts/Sidebar'

import First from '../screens/First'
import LoginScreen from '../screens/Auth/Login'
import ForgotPassword from '../screens/Auth/Forgot'
import Registration from '../screens/Auth/Registration'

import Dashboard from '../screens/Dashboard'
import Profile from '../screens/Profile'
import EditProfile from '../screens/Profile/EditProfile'
import Friends from '../screens/Friends'
import FriendsList from '../screens/FriendsList'
import PostDetails from '../screens/PostDetails'
import AddPost from '../screens/AddPost'
import AddFile from '../screens/AddFiles'
import PdfViewScreen from '../screens/AddFiles/PdfView'

const Drawer = createDrawerNavigator();


const Routes = props => {

    return (

        <Drawer.Navigator
            drawerContent={props => <Sidebar {...props} />}
            drawerStyle={{ width: 150 }}
            initialRouteName="friends">

            <Drawer.Screen options={{ swipeEnabled: false }} name="first" component={First} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="login" component={LoginScreen} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="forgot" component={ForgotPassword} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="regi" component={Registration} />
            <Drawer.Screen name="profile" component={Profile} />
            <Drawer.Screen name="editProfile" component={EditProfile} />
            <Drawer.Screen name="dashboard" component={Dashboard} />
            <Drawer.Screen name="friends" component={Friends} />
            <Drawer.Screen name="friendsList" component={FriendsList} />
            <Drawer.Screen name="details" component={PostDetails} />
            <Drawer.Screen name="addPost" component={AddPost} />
            <Drawer.Screen name="addFile" component={AddFile} />
            <Drawer.Screen name="pdfScreen" component={PdfViewScreen} />

        </Drawer.Navigator>

    );
}

export default Routes
