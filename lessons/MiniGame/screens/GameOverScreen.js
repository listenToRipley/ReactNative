import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({resetGame}) {

  return(
    <View>
      <Text>GAME OVER!</Text>
      <PrimaryButton onSubmit={resetGame}>Play Again?</PrimaryButton>
    </View>
  )
}

const style = StyleSheet.create({
  
});