import { 
  View, 
  Title, 
  StyleSheet,
  Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({resetGame}) {

  return(
    <View>
      <Title>GAME OVER!</Title>
      <Image source={require('../assets/images/success.png')}/>
      <PrimaryButton onSubmit={resetGame}>Play Again?</PrimaryButton>
    </View>
  )
}

const style = StyleSheet.create({
  
});