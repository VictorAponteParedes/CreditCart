import React from "react";
import { View } from "react-native";
import { BalanceTotal } from "../../components/balance/BalanceTotal";

export const BalanceTotalScreen = () => {
  return (
    <View>
      <BalanceTotal
        montoTotal="Gs. 130.000"
        ganancia="4.85% Hoy"
        descuento="2.50 Ayer"
      />
    </View>
  );
};
