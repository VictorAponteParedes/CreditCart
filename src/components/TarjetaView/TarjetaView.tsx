import React from "react";
import { View, Text } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { Oswald_500Medium, useFonts } from "@expo-google-fonts/oswald";
import { LinearGradient } from "expo-linear-gradient";

export const TarjetaView = ({ nombre, montoTotal, nombreTarjeta }) => {
  const [oswaldLoading] = useFonts({
    Oswald_500Medium,
  });

  if (!oswaldLoading) {
    return null;
  }

  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.8)", "#bfc0bf"]}
      style={{
        borderRadius: 10,
        padding: 10,
        marginTop: 1,
        marginRight: 7,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginVertical: 20,
          marginBottom: 30,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Oswald_500Medium",
            color: "#fff",
          }}>
          {nombre}
        </Text>
        <Icons
          name="signal-variant"
          solid
          size={30}
          style={{ color: "#fff" }}
        />
      </View>
      <Icons
        name="integrated-circuit-chip"
        solid
        size={60}
        style={{ color: "#fff" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Oswald_500Medium",
            color: "#fff",
          }}>
          {montoTotal}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Oswald_500Medium",
            color: "#fff",
          }}>
          {nombreTarjeta}
        </Text>
      </View>
    </LinearGradient>
  );
};
