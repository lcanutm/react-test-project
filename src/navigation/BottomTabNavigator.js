// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import ChatScreen from "../screens/ChatScreen";
import DetalleSolicitudScreen from "../screens/DetalleSolicitudScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 14,
          fontStyle: "normal",
        },
        tabBarIconStyle: { display: "none" },
        tabBarStyle: { position: "absolute", marginBottom: "200%" },
      }}
    >
      <BottomTab.Screen
        name="Chat con agente"
        component={TabOneNavigator}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Detalle Solicitud"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="DetalleSolicitudScreen"
        component={DetalleSolicitudScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
