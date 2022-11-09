import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-web";

export const Contato = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    const data = {
      username,
      email,
      password,
    };

    console.log(data);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={email}
        mode="flat"
        placeholder="Digite seu Username"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        mode="outlined"
        placeholder="Digite seu Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={email}
        placeholder="Digite sua Senha"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "F0F4FF",
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: "#121212",
    paddingHorizontal: 18,
  },
  input: {
    width: "100%",
    heigth: 40,
    backgroundColor: "#FFFFFF",
  },
  button: {
    width: "100%",
    heigth: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "18",
  },
  labelError: {
    alignSelf: "flex-start",
    color: "ff375b",
    marginBottom: 8,
  },
});
