import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { TarjetaView } from "../TarjetaView/TarjetaView";
import { useFonts, Lora_400Regular } from "@expo-google-fonts/lora";

import Swiper from "react-native-swiper";

type TarjetaProps = {
  nombre: string;
  montoTotal?: string;
  nombreTarjeta: string;
};

export const AgregarTarjeta = (props: TarjetaProps) => {
  const { nombre, montoTotal, nombreTarjeta } = props;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}>
        <Text style={{ fontSize: 20, fontFamily: "Ubuntu_400Regular" }}>
          Tarjeta
        </Text>
        <Icon name="add-circle" solid size={30} />
      </View>

      <Swiper loop={false} showsPagination={false}>
        <TarjetaView
          nombre={nombre}
          montoTotal={montoTotal}
          nombreTarjeta={nombreTarjeta}
        />
        <TarjetaView
          nombre={nombre}
          montoTotal={montoTotal}
          nombreTarjeta={nombreTarjeta}
        />
      </Swiper>
    </>
  );
};
