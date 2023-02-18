import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail/detail.view";
import Person from "../screens/Person/person.view";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator<RoutesParamsList>();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="Details" component={Detail} />
      <Stack.Screen name="Person" component={Person} />
    </Stack.Navigator>
  );
};

export default Routes;
