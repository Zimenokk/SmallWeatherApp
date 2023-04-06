import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TextCProps {
    style?:Object;
    children:React.ReactNode
}

const TextC = (props: TextCProps) => {
  return (
      <Text style={{...styles.text,...props.style,}}>{props.children}</Text>
  ) 
};

export default TextC;

const styles = StyleSheet.create({
  text: {
    fontSize:16,
  }
});
