import { Button, Text, View } from "react-native";
import { ImageBackground } from "react-native-web";

export const Home = ({ navigation }) => (
    <View>
        <center>0<Text>Sejam Bem Vindos a SpaceX, aqui vai um pouco sobre nós. A Space Exploration Technologies Corporation, ou simplesmente SpaceX, é uma empresa do segmento aeroespacial fundada em 2002, nos Estados Unidos, por Elon Musk. Hoje, a companhia privada se destaca mundialmente no serviço de transporte espacial.</Text></center>
        <Button
            title="Vamos para Sobre?"
            onPress={() => navigation.navigate("Sobre")}
        />
        <Button
            title="Vamos para Contato?"
            onPress={() => navigation.navigate("Contato")}
        />
        <Button
            title="Vamos para Registro?"
            onPress={() => navigation.navigate("Registro")}
        />
        <Button
            title="Vamos para Login"
            onPress={() => navigation.navigate("Login")}
        />
    </View>
)