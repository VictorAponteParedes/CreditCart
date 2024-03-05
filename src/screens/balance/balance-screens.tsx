import React from "react";
import { View } from "react-native";
import { BalanceTotal } from "../../components/balance/BalanceTotal";

export const BalanceTotalScreen = () => {
  return (
    <View>
      <BalanceTotal montoTotal="Gs. 130.000" ahorro="4.85% Hoy" />
    </View>
  );
};
