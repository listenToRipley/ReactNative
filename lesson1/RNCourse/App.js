import { useState } from 'react';
import { 
  Button, 
  StyleSheet, 
  View, 
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItems';
import GoalInput from './components/GoalInputs';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  function addGoalHandler(enterGoalText) {
    // console.log('click');
    setGoalsList((currentGoalsList)=> [
      ...currentGoalsList,
      { text: enterGoalText,
        id: Math.random().toString()
      },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList 
          data={goalsList}
          renderItem={(goalData) => {
            return <GoalItem text={goalData.item.text} key={goalData.item.key} />
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
  goalsContainer: {
    flex: 5
  },
});
