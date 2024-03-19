import { 
  View, 
  StyleSheet,
  Text,
  Image
  } from "react-native";
import Title from '../components/ui/Title'
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({resetGame}) {

  return(
    <View style={StyleSheet.rootContainer}>
      <Title>GAME OVER!</Title>
      <View>
        <Image source={require('../assets/images/success.png')}/>
      </View>
      <PrimaryButton onSubmit={resetGame}>Play Again?</PrimaryButton>
    </View>
  )
}

const style = StyleSheet.create({
  
});