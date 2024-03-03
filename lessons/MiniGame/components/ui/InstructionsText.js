import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function InstructionText ({children, style}) {
  return <Text style={[styles.instructions, style]}>{children}</Text>
};

const styles = StyleSheet.create({
  instructions: {
    color: Colors.accent500,
    fontSize: 24
  },

});