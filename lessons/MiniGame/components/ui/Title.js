import { View, Text, StyleSheet } from "react-native";

export default function Title({children}) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    borderRadius: 10
  }
});