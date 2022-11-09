import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Contato } from "../screens/Contato";
import { Fotos } from "../screens/fotos";
import { Home } from "../screens/home";
import { Noticias } from "../screens/noticias";
import { Produtos } from "../screens/Produtos";
// // Simboliza a instância do Stack
// const Stack = createNativeStackNavigator();
// Simboliza a instância do Stack
const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

// Componente base
export const RootNavigation = () => {
    return (
        <MBNav.Navigator
            activeColor="#fff"
            inactiveColor="rgba(255,255,255,0.5)"
        >
            <MBNav.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Contato"
                component={Contato}
                options={{
                    tabBarLabel: 'Contato',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="phone" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Noticias"
                component={Noticias}
                options={{
                    tabBarLabel: 'Noticias',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="newspaper" color={color} size={26} />
                    ),
                }}
            />
            {<MBNav.Screen
                name="Fotos"
                component={Fotos}
                options={{
                    tabBarLabel: 'Fotos',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="camera" color={color} size={26} />
                    ),
                }}
            />}
            <MBNav.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="box" color={color} size={26} />
                    ),
                }}
            />
        </MBNav.Navigator>
    )
}