import { 
  View, 
  Title, 
  StyleSheet,
   } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({resetGame}) {

  return(
    <View>
      <Title>GAME OVER!</Title>

      <PrimaryButton onSubmit={resetGame}>Play Again?</PrimaryButton>
    </View>
  )
}

const style = StyleSheet.create({
  
});