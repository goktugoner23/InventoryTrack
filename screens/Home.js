import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles_homeScreen';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig';
firebase.initializeApp(firebaseConfig);

const Home = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsRef = firebase.firestore().collection('items');
    itemsRef.onSnapshot((snapshot) => {
      const listItems = [];
      snapshot.forEach((doc) => {
        const { type, name, weight, buyPrice, sellPrice, quantity, image } = doc.data();
        listItems.push({
          id: doc.id,
          type,
          name,
          weight,
          buyPrice,
          sellPrice,
          quantity,
          image,
        });
      });
      setItems(listItems);
    });
  }, []);

  const columns = [  { title: 'Name', dataKey: 'name' },  
  { title: 'Type', dataKey: 'type' },  
  { title: 'Weight', dataKey: 'weight' },  
  { title: 'Buy Price', dataKey: 'buyPrice' },  
  { title: 'Sell Price', dataKey: 'sellPrice' },  
  { title: 'Quantity', dataKey: 'quantity' },];

  
  const renderHeader = () => { //header of the flatlist
    return (
      <View style={styles.tableRow}>
        {columns.map(column => (
          <Text key={column.title} style={styles.tableHeaderCell}>
            {column.title}
          </Text>
        ))}
      </View>
    );
  };
  
  const renderItem = ({ item, index }) => { //items in the flatlist
    return (
      <View style={styles.tableRow}>
        {columns.map(column => (
          <Text key={`${column.title}-${index}`} style={styles.itemCell}>
            <Text style={[styles.itemText, { color: 'black' }]}>{item[column.dataKey]}</Text>
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItem')}
      >
        <Text style={styles.addButtonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
