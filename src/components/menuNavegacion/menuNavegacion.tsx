import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/FontAwesome6";
import Icono from "react-native-vector-icons/Foundation";

export const CustomBottomMenu = ({ onSelect }) => {
  return (
    <View
      style={{
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
      }}>
      <TouchableOpacity onPress={() => onSelect("home")}>
        <Icon name="home" size={25} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect("arrow-right-arrow-left")}>
        <Icons name="arrow-right-arrow-left" size={25} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect("graph-pie")}>
        <Icono name="graph-pie" size={25} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelect("cog")}>
        <Icon name="cog" size={25} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
};
