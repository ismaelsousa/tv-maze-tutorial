import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import useDetailController from "./detail.controller";

// import {Container} from './styles'

const Detail: React.FC = () => {
  /**
   * Navigation
   */
  const {
    params: { show },
  } = useRoute<DetailRouteProp>();

  const { episodes, seasons } = useDetailController({ show });
  console.log(
    "🚀 ~ file: detail.view.tsx:17 ~ episodes, seasons",
    episodes,
    seasons
  );

  return <View style={{ flex: 1, backgroundColor: "red" }} />;
};

export default Detail;
