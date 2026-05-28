import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/home/HomeScreen";
import ScanScreen from "../screens/home/ScanScreen";
import { colors } from "../themes";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            height: 72,
            paddingBottom: 10,
            paddingTop: 10,
            display: "flex"
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: any;
            if (route.name === "Home") iconName = "home-outline";
            if (route.name === "Scan") iconName = "camera-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
