import React from "react";
import { StyleSheet } from "react-native";
import Box from "./Box.jsx";
import { FlatList, Text, View } from "react-native";

const Colors = () => {
  const COLORS = [
    { colorName: "color1", hexCode: "#03071e" },
    { colorName: "color2", hexCode: "#370617" },
    { colorName: "color3", hexCode: "#6a040f" },
    { colorName: "color4", hexCode: "#9d0208" },
    { colorName: "color5", hexCode: "#d00000" },
    { colorName: "color6", hexCode: "#dc2f02" },
    { colorName: "color7", hexCode: "#e85d04" },
    { colorName: "color8", hexCode: "#f48c06" },
    { colorName: "color9", hexCode: "#faa307" },
    { colorName: "color10", hexCode: "#ffba08" },
    { colorName: "color11", hexCode: "#f9844a" },
    { colorName: "color12", hexCode: "#f9c74f" },
    { colorName: "color13", hexCode: "#90be6d" },
    { colorName: "color14", hexCode: "#43aa8b" },
  ];
  return (
    <FlatList
      data={COLORS}
      renderItem={({ item }) => (
        <Box colorName={item.colorName} hexCode={item.hexCode}></Box>
      )}
      keyExtractor={({ hexCode }) => hexCode}
      ListHeaderComponent={<Text style={colorsStyle.txt}>Here are COLORS</Text>}
      ListEmptyComponent={<Text>No Colors Yet</Text>}
    ></FlatList>
  );
};

const colorsStyle = StyleSheet.create({
  txt: {
    fontWeight: "bold",
    fontSize: 17,
    padding: 17,
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
  },
});

export default Colors;
