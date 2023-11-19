import { 
  View,
  Text,
  Pressable 
} from "react-native";

export default function PrimaryButton({children}) {
  
  function pressHandler() {
    console.log('PRESSED!')
  }
  
  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  )
};