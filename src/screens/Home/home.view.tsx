import React from "react";
import { View } from "react-native";
import useHomeController from "./home.controller";

// import {Container} from './styles'

const Home: React.FC = () => {
  const { loading, shows } = useHomeController();

  return <View style={{ flex: 1, backgroundColor: "pink" }} />;
};

export default Home;
