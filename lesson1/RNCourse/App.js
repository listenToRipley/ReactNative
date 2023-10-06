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
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enterGoalText) {
    // console.log('click');
    setGoalsList((currentGoalsList)=> [
      ...currentGoalsList,
      { text: enterGoalText,
        id: Math.random().toString()
      },
    ]);
  };

  function deleteGoalHandler(id) {
    setGoalsList(currentGoalsList=> {
      // create a new list for everything that doesn't include the current ID
      return currentGoalsList.filter((goal)=> goal.id !== id);
    });
    // console.log(`GET RID OF IT!, ${id}`);
  };

  function modalStateHandler() {
    setModalVisible(!modalVisible);
  }


  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color="#5e0acc"
        onPress={modalStateHandler}  
        />
      {modalVisible && <GoalInput 
        onAddGoal={addGoalHandler} 
        visibility={modalVisible}
        updateModal={modalStateHandler}
        />}
      <View style={styles.goalsContainer}>
      <FlatList 
          data={goalsList}
          renderItem={(goalData) => {
            return <GoalItem 
              text={goalData.item.text} 
              key={goalData.item.key} 
              id={goalData.item.id}
              onDeleteItem={deleteGoalHandler}
              />
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
