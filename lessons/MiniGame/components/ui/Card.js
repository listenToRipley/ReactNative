import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function Card({children}) {

  return (
    <View style={styles.root}>{children}</View>
  )

};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding:16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
  },
});