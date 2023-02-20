import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PersonModel } from "../../common/models/person.model";
import { ShowModel } from "../../common/models/show.model";

declare global {
  export type RoutesParamsList = {
    BottomTab?: NavigatorScreenParams<BottomTabParamList>;
    Details: { show: ShowModel };
    Person: { person: PersonModel };
  };

  /**
   * useNavigation types
   */
  export type RoutesStackNavigationProp = NativeStackNavigationProp<
    RoutesParamsList,
    "BottomTab"
  >;

  /**
   * useRoute types
   */
  export type DetailRouteProp = RouteProp<RoutesParamsList, "Details">;
  export type PersonRouteProp = RouteProp<RoutesParamsList, "Person">;
}
