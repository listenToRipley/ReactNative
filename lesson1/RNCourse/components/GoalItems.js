import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {

  return (
    <View key={props.key} style={styles.goalItem}>
      <Pressable 
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{color: '#dddddd'}}
        style={({pressed})=> {
          pressed && styles.pressItem
        }}
        >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressItem: {
    opacity: 0.5
  }
});