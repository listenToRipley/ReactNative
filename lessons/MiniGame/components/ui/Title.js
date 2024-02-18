import { View, Text, StyleSheet } from "react-native";
import Color from "../../constants/colors"

export default function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    borderRadius: 10
  }
});