import { View, Text, StyleSheet } from "react-native";

export default function Title({text}) {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
    borderRadius: 10
  }
});