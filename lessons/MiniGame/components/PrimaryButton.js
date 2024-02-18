import { 
  View,
  Text,
  Pressable,
  StyleSheet 
} from "react-native";
import {primary500, primary600} from '../constants/colors';

export default function PrimaryButton({children, onSubmit}) {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
      style={({pressed}) => 
        pressed 
          ? [styles.buttonInnerContainer, styles.pressed] 
          : styles.buttonInnerContainer} 
      onPress={onSubmit} 
      android_ripple={{color: primary600}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75
  }

});