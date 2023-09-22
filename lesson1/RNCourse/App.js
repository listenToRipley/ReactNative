import { useState } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');
  const [goalsList, setGoalsList] = useState([]);



  function goalInputHandle(goalText) {
    console.log(goalText);
    setGoalText(goalText);
  };

  function addGoalHandler() {
    console.log('click');
    setGoalsList((currentGoalsList)=> [
      ...currentGoalsList,
      { text: goalText,
        id: Math.random().toString()
      },
    ]);
    console.log(goalText);
    console.log(goalsList);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandle} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goalsList}
          renderItem={(goalData) => {
            return (
              <View key={goalData.item.key} style={styles.goalItem}>
                <Text style={styles.goalText}>{goalData.item.text}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});
