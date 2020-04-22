import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import moment from 'moment-timezone';

export default function TimezoneButton({timeZone, setTimeZone}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setTimeZone(timeZone)}>
      <Text>{timeZone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  timeHeader: {
    marginBottom: 8,
    fontSize: 36,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: '30.2%',
    height: 30,
    justifyContent: 'center',
    margin: 4,
  },
});
