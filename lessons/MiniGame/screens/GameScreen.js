import { useState } from "react";
import {
  View, 
  Text,
  Button,
  StyleSheet
} from "react-native";

export default function GameScreen(){
  

  return (
    <View>
      <Text>Opponent's Guess</Text>
      <Text>GUESS</Text>
      <View>
        <Text>Higher or Lower</Text>
        <Button>High</Button>
        <Button>Low</Button>
      </View>
      <View>
        <View>LOG ROUNDS</View>
      </View>
    </View>
  )
}