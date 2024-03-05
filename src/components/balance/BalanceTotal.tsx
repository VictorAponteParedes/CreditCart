import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type BalanceProps = {
  montoTotal: string;
  ahorro?: string;
};

export const BalanceTotal = (props: BalanceProps) => {
  const { montoTotal, ahorro } = props;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Total Balance</Text>
        <Image
          source={require("../../img/perfil.jpg")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 8,
          }}
        />
      </View>
      <Text style={{ fontSize: 30 }}>{montoTotal}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignContent: "center",
          marginBottom: 50,
        }}>
        <Icon name="arrow-top-right-thick" solid style={{ color: "#83d994" }} />
        <Text style={{ color: "#83d994" }}>{ahorro}</Text>
      </View>
    </>
  );
};
