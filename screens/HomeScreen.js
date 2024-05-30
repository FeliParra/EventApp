import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import useStore from '../store';
import EventImage from '../assets/tomorrowland.jpg';

const HomeScreen = ({ navigation }) => {
  const selfies = useStore(state => state.selfies);

  return (
    <View style={{ flex: 1 }}>
      <Text>Home Screen</Text>
      <Button title="Go to Event" onPress={() => navigation.navigate('Event')} />
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Tomorrowland</Text>
        <Image source={EventImage} style={{ width: 100, height: 100 }} />
        <Text style={styles.date}>17-07-2024</Text>
      </View>
      <Button title="Go to Selfie" onPress={() => navigation.navigate('Selfie')} />
      <FlatList
        data={selfies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;