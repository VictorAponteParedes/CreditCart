import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts, Ubuntu_400Regular } from "@expo-google-fonts/ubuntu";

export const AgregarUsuario = () => {
  const [loraLoading] = useFonts({
    Ubuntu_400Regular,
  });

  if (!loraLoading) {
    return null;
  }

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
          fontFamily: "Ubuntu_400Regular",
        }}>
        Recent
      </Text>
    );
  };

  const renderUsuario = (usuario, index) => {
    return (
      <View key={index} style={{ alignItems: "center", marginRight: 10 }}>
        <Image
          source={usuario.imagen}
          style={{ width: 65, height: 65, borderRadius: 50 }}
        />
        {/* Pelotita verde encima de la imagen */}
        {(index === 0 || index === 2 || index == 3) && (
          <View
            style={{
              position: "absolute",
              backgroundColor: "green",
              width: 15,
              height: 15,
              borderRadius: 7.5,
              borderWidth: 2,
              borderColor: "white",
              top: 0,
              right: 4,
            }}
          />
        )}
        <Text style={{ marginTop: 5, fontFamily: "Ubuntu_400Regular" }}>
          {usuario.nombre}
        </Text>
      </View>
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
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              fontFamily: "Ubuntu_400Regular",
            }}>
            Add new
          </Text>
        </View>
        {usuarios.map((usuario, index) => renderUsuario(usuario, index))}
      </View>
    </>
  );
};
