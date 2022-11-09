import { Text, View, Image, StyleSheet } from "react-native";

export const Produtos = () => (
  <View>
    <center>
      <Image
        source={{
          uri: "https://d3ugyf2ht6aenh.cloudfront.net/stores/726/919/products/mockup-of-an-11-oz-coffee-mug-in-a-customizable-scenario-1518-el1-ff76d4c7d2b7cab2ac15862731443380-1024-1024.png",
        }}
        style={styles.produto}
      ></Image>
    </center>
    <center>
      <Text>
        Ceneca SpaceX - R$90,00
      </Text>
    </center>
  </View>
);
const styles = StyleSheet.create({
  produto: {
    width: "250px",
    height: "250px",
  },
});
