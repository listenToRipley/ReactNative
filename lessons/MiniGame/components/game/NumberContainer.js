import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>Guessed: {children}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: 36,
  }
});