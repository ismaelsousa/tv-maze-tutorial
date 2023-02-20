import React from "react";
import { View } from "react-native";
import useSearchController from "./search.controller";

// import {Container} from './styles'

const Search: React.FC = () => {
  const { loading } = useSearchController();
  console.log("🚀 ~ file: search.view.tsx:9 ~ loading", loading);
  return <View />;
};

export default Search;
