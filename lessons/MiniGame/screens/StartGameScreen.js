import { 
  View, 
  TextInput,
  StyleSheet 
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>

    <TextInput 
      style={styles.numInput} 
      maxLength={2} 
      keyboardType="number-pad"
      autoCapitalize="none"
      autoCorrect={false}
      />
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
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
  },

  numInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }

});