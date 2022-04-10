import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ITEM_WH = 36;

const Stepper = ({ currentlyActive, count, weight = ITEM_WH }) => {
   const STEPPER_WIDTH = (weight + 10) * count;

   const styles = StyleSheet.create({
      wrapper: {
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
      },
      stepper: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         heigh: weight,
      },
      item: {
         width: weight,
         height: weight,
         borderRadius: weight / 2,
         alignItems: 'center',
         justifyContent: 'center',
      },
      lineWrapper: {
         flexDirection: 'row',
         position: 'absolute',
         justifyContent: 'space-around',
         width: '100%',
      },
      line: {
         height: 4,
         width: weight + 5,
      },
      text: {
         fontSize: weight / 2,
         color: 'white',
         fontWeight: 'bold',
      },
   });

   return (
      <View style={styles.wrapper}>
         <View style={[styles.stepper, { width: STEPPER_WIDTH }]}>
            <View style={styles.lineWrapper}>
               {[...Array(count - 1)].map((o, i) => {
                  return (
                     <LinearGradient
                        key={i}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={
                           currentlyActive - 1 >= i + 1
                              ? ['#F8A170', '#FFCD61']
                              : ['#DFDEDE', '#DFDEDE']
                        }
                        style={styles.line}
                     />
                  );
               })}
            </View>
            {[...Array(count)].map((o, i) => {
               return (
                  <LinearGradient
                     key={i + 10}
                     start={{ x: 0, y: 0 }}
                     end={{ x: 1, y: 0 }}
                     colors={
                        currentlyActive >= i + 1
                           ? ['#F8A170', '#FFCD61']
                           : ['#DFDEDE', '#DFDEDE']
                     }
                     style={styles.item}>
                     <Text style={styles.text}>{i + 1}</Text>
                  </LinearGradient>
               );
            })}
         </View>
      </View>
   );
};

export default Stepper;
