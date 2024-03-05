import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

type TarjetaProps = {
  nombre: string;
  montoTotal?: string;
  nombreTarjeta: string;
};

export const AgregarTarjeta = (props: TarjetaProps) => {
  const { nombre, montoTotal, nombreTarjeta } = props;
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Tarjeta</Text>
          <Icon name="add-circle" solid size={30} />
        </View>
        <View
          style={{
            backgroundColor: "#bfc0bf",
            borderRadius: 10,
            padding: 10,
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              // marginTop: 15,
              marginVertical: 20,
              marginBottom: 50,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
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
                fontWeight: "500",
                color: "#fff",
              }}>
              {montoTotal}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "#fff",
              }}>
              {nombreTarjeta}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
