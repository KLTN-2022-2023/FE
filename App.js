import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screen/Login/LoginScreen";
import SignUpScreen from "./Screen/SignUp/SignUpScreen";
import TaskDetailSceen from "./Screen/TaskDetailScreen/TaskDetailSceen";
import TaskListScreen from "./Screen/TaskListScreen/TaskListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "flip",
        }}
      >
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
        <Stack.Screen name="TaskDetailScreen" component={TaskDetailSceen} />
        {/* <Stack.Screen name="TaskListScreen" component={TaskListScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
