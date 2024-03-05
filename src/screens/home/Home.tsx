import React from "react";
import { BalanceTotalScreen } from "../balance/balance-screens";
import { AgregarTarjetaScreen } from "../AddTarjeta/AgregarTarjeta";
import { AgregarUsuarioScreen } from "../addUsuario-screen/addUsuario-screen";
import { CustomBottomMenuScreen } from "../menuButtom/menuButtom-screen";
import { View } from "react-native";

export const Home = () => {
  return (
    <>
      <View
        style={{
          padding: 20,
          flex: 1,
          backgroundColor: "#f6f6f6",
        }}>
        <BalanceTotalScreen />
        <AgregarTarjetaScreen />
        <AgregarUsuarioScreen />
      </View>
      <CustomBottomMenuScreen />
    </>
  );
};
