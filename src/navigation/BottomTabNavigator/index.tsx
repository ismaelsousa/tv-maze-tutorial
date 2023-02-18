import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import Icon from "../../common/components/Icon";
import Favorites from "../../screens/Favorites/favorites.view";
import Home from "../../screens/Home/home.view";
import Search from "../../screens/Search/search.view";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.onSecondary,
        tabBarInactiveTintColor: colors.caption,
        tabBarStyle: {
          backgroundColor: colors.secondary,
        },
        header: () => null,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon icon="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon icon="search" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon icon="favorite" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
