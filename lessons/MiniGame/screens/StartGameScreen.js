import { 
  View, 
  TextInput,
  StyleSheet 
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>

    <TextInput />
    <PrimaryButton>Reset</PrimaryButton>
    <PrimaryButton>Confirm</PrimaryButton>

    </View>
  )
};

const styles = StyleSheet.create({

  inputContainer: {
    marginTop:100,
    marginHorizontal: 24,
    padding:16,
    backgroundColor: '#72063c',
    color: 'white',
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
  }

});