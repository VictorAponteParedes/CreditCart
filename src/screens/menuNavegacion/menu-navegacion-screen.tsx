import React from "react";
import { View } from "react-native";

import { CustomBottomMenu } from "../../components/menuNavegacion/menuNavegacion";
export const CustomBottomMenuScreen = () => {
  const handleMenuSelect = (section) => {
    console.log(`Se seleccionó la sección: ${section}`);
  };
  return (
    <View>
      <CustomBottomMenu onSelect={handleMenuSelect} />
    </View>
  );
};
