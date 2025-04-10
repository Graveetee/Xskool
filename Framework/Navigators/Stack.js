import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../Screens/Homescreen"
import { SignUp } from "../Screens/SignUp"
import { Login } from "../Screens/Login"
import { Intro } from "../Screens/Intro"

import { NavigationContainer } from "@react-navigation/native"
import EditProfileScreen, { EditProfile } from "../Screens/EditProfile"
import ProfileScreen, { Profile } from "../Screens/Profile"

import { FundAccount } from "../Screens/FundAccount"
import { Pay } from "../Screens/Pay"

const Stack = createNativeStackNavigator()

export function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="EditProfile" component={EditProfile} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
