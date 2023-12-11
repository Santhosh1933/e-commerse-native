import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Home from "./screens/Home/Home";
import IndividualProduct from "./screens/SinglePage/IndividualProduct";
import Products from "./screens/Home/Products";
import Shop from "./screens/Shop/Shop";
import Cart from "./screens/cart/Cart";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 5,
          marginHorizontal: 20,
          borderRadius: 10,
          height: 60,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="home"
                size={24}
                color={focused ? `#064e3b` : `black`}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Shop"}
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="shirt-outline"
                size={24}
                color={focused ? `#064e3b` : `black`}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Product"
          component={IndividualProduct}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
