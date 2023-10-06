import { 
  StyleSheet, 
  View, 
  TextInput, 
  Text,
  Button, 
  Modal, 
  Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState('');

  function goalInputHandle(goalText) {
    // console.log(goalText);
    setGoalText(goalText);
  };

  function addGoalHandler() {
    props.onAddGoal(goalText); //pass the state back to the main prop
    setGoalText(''); //reset on add.
  };

  return (
    <Modal
      visible={props.visibility}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Text>Stand By For Goals</Text>
        <Image 
          style={styles.image}
          source={require('../assets/adaptive-icon.png')}/>
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandle} 
          value={goalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
                title='Add Goal' 
                onPress={addGoalHandler} 
                color='#b180f0'  
                />
            </View>
            <View style={styles.button}>
              <Button 
                title='Done' 
                onPress={props.updateModal}
                color='#f31282'
                />
            </View>
          </View>

    </View>
  </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius:6,
    color: '#120438',
    width: '100%',
    marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  }, 
  button: {
    width: '30%',
    marginHorizontal: 8,
  }
});