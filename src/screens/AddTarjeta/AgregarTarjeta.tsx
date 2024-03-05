import React from "react";
import { AgregarTarjeta } from "../../components/adicionTarjeta/AgregarTarjeta";

export const AgregarTarjetaScreen = () => {
  return (
    <AgregarTarjeta
      montoTotal="Gs. 8.500.000"
      nombre="INCOME"
      nombreTarjeta="Visa"
    />
  );
};
