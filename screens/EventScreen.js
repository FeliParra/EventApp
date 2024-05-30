import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const EventScreen = ({ navigation }) => {
  const [eventCode, setEventCode] = useState('');

  const validateEventCode = () => {
    if (eventCode === '12345678') {
      Alert.alert("Correct Code", "The event code is for Tomorrowland.");
      navigation.navigate('Home');
    } else {
      Alert.alert("Invalid Code", "The event code is invalid or the event is not active.");
    }
  };

  return (
    <View>
      <Text>Event Screen</Text>
      <TextInput placeholder="Enter Event Code" value={eventCode} onChangeText={setEventCode} />
      <Button title="Validate" onPress={validateEventCode} />
    </View>
  );
};

export default EventScreen;