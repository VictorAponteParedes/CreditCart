import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const AgregarUsuario = () => {
  const usuarios = [
    { nombre: "Lorena", imagen: require("../../img/perfil.jpg") },
    { nombre: "Carlos", imagen: require("../../img/perfil_2.jpg") },
    { nombre: "Maria", imagen: require("../../img/perfil_3.jpg") },
    { nombre: "Adalberto", imagen: require("../../img/perfil_4.jpg") },
  ];

  const Titulo = () => {
    return (
      <Text
        style={{
          marginTop: 85,
          marginBottom: 10,
          fontSize: 14,
          fontWeight: "bold",
        }}>
        Recent
      </Text>
    );
  };

  return (
    <>
      <Titulo />
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}>
        <View style={{ alignItems: "center", marginRight: 10 }}>
          <Icon name="add-circle" solid size={65} />
          <Text style={{ marginTop: 5, fontSize: 14, fontWeight: "bold" }}>
            Add new
          </Text>
        </View>
        {usuarios.map((usuario, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 10 }}>
            <Image
              source={usuario.imagen}
              style={{ width: 65, height: 65, borderRadius: 50 }}
            />
            <Text style={{ marginTop: 5 }}>{usuario.nombre}</Text>
          </View>
        ))}
      </View>
    </>
  );
};
