import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_300Light,
} from "@expo-google-fonts/ubuntu";

type BalanceProps = {
  montoTotal: string;
  ganancia?: string;
  descuento?: string;
};

export const BalanceTotal = (props: BalanceProps) => {
  const { montoTotal, ganancia, descuento } = props;

  const [ubuntuLoaded] = useFonts({ Ubuntu_400Regular });
  if (!ubuntuLoaded) {
    return null;
  }

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            fontFamily: "Ubuntu_400Regular",
          }}>
          Total Balance
        </Text>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../img/perfil.jpg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 8,
            }}
          />
          {/* Pelotita verde encima de la foto del perfil */}
          <View
            style={{
              position: "absolute",
              backgroundColor: "green",
              width: 15,
              height: 15,
              borderRadius: 7.5,
              borderWidth: 2,
              borderColor: "white",
              top: 0,
              right: 4,
            }}
          />
        </View>
      </View>
      <Text style={{ fontSize: 30, fontFamily: "Ubuntu_400Regular" }}>
        {montoTotal}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "center",
          marginBottom: 50,
        }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="arrow-top-right-thick"
              solid
              style={{ color: "#83d994" }}
            />
            <Text style={{ color: "#83d994" }}>{ganancia}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="arrow-bottom-left-thick"
              solid
              style={{ color: "red" }}
            />
            <Text style={{ color: "red" }}>{descuento}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
