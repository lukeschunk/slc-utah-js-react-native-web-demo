import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment-timezone';
import TimezoneButton from './TimezoneButton';

const TIMEZONES = ['America/Denver', 'America/Los_Angeles', 'America/New_York'];

export default function App() {
  const [time, setTime] = useState(moment());
  const [timeZone, setTimeZone] = useState("America/Denver");

  React.useEffect(() => {
    const timeoutID = window.setInterval(() => {
      const newMoment = moment().tz(timeZone);
      setTime(newMoment);
    }, 1000);

    return () => window.clearInterval(timeoutID);
  }, [timeZone]);

  return (
    <View style={styles.container}>
      <Text style={styles.timeHeader}>{time.format('LTS')}</Text>
      {TIMEZONES.map(tz => (
        <TimezoneButton
          timeZone={tz}
          setTimeZone={zone => {
            setTimeZone(zone);
            setTime(moment().tz(zone))
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeHeader: {
    marginBottom: 8,
    fontSize: 36,
  },
});
