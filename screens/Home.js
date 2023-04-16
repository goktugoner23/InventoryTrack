import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('AddItem');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen!</Text>
      <Button title="Go to Add Item" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
