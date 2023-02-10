import { StyleSheet, Text, View, Animated } from 'react-native'
import React , { useRef, useEffect }from 'react'

const AnimatedText = (props) => {

    const textOpacity = useRef(new Animated.Value(0)).current;
  
    React.useEffect(() => {
      Animated.timing(
        textOpacity,
        {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true
        }
      ).start();
    }, [textOpacity]);
  
    return (
       <Animated.Text
          style={{
            ...props.style,
            opacity: textOpacity
          }}
        >
          {props.children}
       </Animated.Text>
    )
  }

export default AnimatedText

const styles = StyleSheet.create({})