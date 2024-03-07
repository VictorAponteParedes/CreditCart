import React from "react";
import { BalanceTotalScreen } from "../balance/balance-screens";
import { AgregarTarjetaScreen } from "../NuevaTarjeta/nueva-tarjeta-screen";
import { AgregarUsuarioScreen } from "../NuevoUsuario/nuevo-usuario-screen";
import { CustomBottomMenuScreen } from "../menuNavegacion/menu-navegacion-screen";
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
