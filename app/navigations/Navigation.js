import React, {useEffect, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import ProductStack from './../navigations/ProductStack'
import ProfileStack from './../navigations/ProfileStack'
import CartStack from './../navigations/CartStack'
import UserLogged from "../screens/Profile/UserLogged";
import UserContext from '../context/User/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tab = createBottomTabNavigator()

/**
 * Define screen options of navigation.
 * @param {any} route
 * @param {string} color
 */
const screenOptions = (route, color = '#3241F0') => {
    let iconName

    switch (route.name) {
        case "product-list":
            iconName = "home-outline"
            break
        case "profile":
            iconName = "account-outline"
            break
        case "cart":
            iconName = "cart-outline"
            break
        default:
            break
    }

    return (
        <Icon type="material-community" name={iconName} size={25} color={color} />
    )
}

/**
 * Create Navigation component.
 * @returns {JSX}
 */

 class Navigation extends React.Component {
    static contextType = UserContext
    constructor(props) {
      super(props);
      
    }

    componentWillMount() {
        this.context.initCredential();
    }
  
    render() {
        
        return(<NavigationContainer>
            <Tab.Navigator
                initialRouteName="profile"
                tabBarOptions={{
                    activeTintColor: "#717171",
                    activeBackgroundColor: "#ffffff",
                    inactiveTintColor: "#717171",
                    inactiveBackgroundColor: "#ffffff",
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route)
                })}>
                <Tab.Screen
                    name="product-list"
                    component={ProductStack}
                    options={{ title: 'Inicio' }} />
                <Tab.Screen
                    name="profile"
                    component={ProfileStack}
                    //component={UserLogged}
                    options={{ title: 'Mi Perfil' }} />
                <Tab.Screen
                    name="cart"
                    component={CartStack}
                    options={{ title: 'Carrito' }} />
            </Tab.Navigator>
        </NavigationContainer>)
    }
  }

  export default  Navigation;
// export default function Navigation() {
//     const {currentUser, initCredential} = useContext(UserContext);

//     // useEffect(() => {
//     //     initCredential();
//     //   }, [])

//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 initialRouteName="profile"
//                 tabBarOptions={{
//                     activeTintColor: "#717171",
//                     activeBackgroundColor: "#ffffff",
//                     inactiveTintColor: "#717171",
//                     inactiveBackgroundColor: "#ffffff",
//                 }}
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ color }) => screenOptions(route)
//                 })}>
//                 <Tab.Screen
//                     name="product-list"
//                     component={ProductStack}
//                     options={{ title: 'Inicio' }} />
//                 <Tab.Screen
//                     name="profile"
//                     component={ProfileStack}
//                     //component={UserLogged}
//                     options={{ title: 'Mi Perfil' }} />
//                 <Tab.Screen
//                     name="cart"
//                     component={CartStack}
//                     options={{ title: 'Carrito' }} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }
