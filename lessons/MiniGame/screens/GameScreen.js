import { useState } from "react";
import {
  View, 
  Text,
  Button,
  StyleSheet
} from "react-native";

import Title from "../components/Title";

export default function GameScreen(){
  
  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <Text>GUESS</Text>
      {/* <View>
        <Text>Higher or Lower</Text>
        <Text>High</Text>
        <Text>Low</Text>
      </View>
      <View>
        <View>LOG ROUNDS</View>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 10,
    padding: 12,
  },
});