import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from '../styles/styles_addItemScreen';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // import any other Firebase services that you need
import firebaseConfig from '../firebaseConfig'; // import your Firebase config file
firebase.initializeApp(firebaseConfig);

const AddItem = () => {
  const [type, setType] = useState('silver');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('0');
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [count, setCount] = useState('1');
  const [image, setImage] = useState(null);

  const handleAddItem = async () => {
    try {
      if (!name.trim() || !buyPrice.trim() || !sellPrice.trim() || !count.trim()) {
        Alert.alert('Please fill in all the required fields.');
        return;
      }
      const itemsRef = firebase.firestore().collection('items');
      await itemsRef.add({
        type,
        name,
        weight,
        buyPrice,
        sellPrice,
        count,
        image,
      });
      setType('silver');
      setName('');
      setWeight('');
      setBuyPrice('');
      setSellPrice('');
      setCount('');
      setImage(null);
      Alert.alert('Item added successfully!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error adding item. Please try again later.');
    }
  };

  const handleSelectImage = async () => {
    try {
      const response = await ImagePicker.openPicker({
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 500,
        maxWidth: 500,
      });
      if (!response.didCancel && !response.error) {
        setImage(response.path);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const photoButtonLabel = image ? 'Change Photo' : 'Add Photo';

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radio,
            { backgroundColor: type === 'silver' ? '#fff' : '#f2f2f2' },
          ]}
          onPress={() => setType('silver')}
        >
          {type === 'silver' && <View style={styles.selected} />}
        </TouchableOpacity>
        <Text style={styles.radioLabel}>Silver</Text>

        <TouchableOpacity
          style={[
            styles.radio,
            { backgroundColor: type === 'other' ? '#fff' : '#f2f2f2' },
            { marginLeft: 10 },
          ]}
          onPress={() => setType('other')}
        >
          {type === 'other' && <View style={styles.selected} />}
        </TouchableOpacity>
        <Text style={styles.radioLabel}>Other</Text>
      </View>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <Text style={styles.label}>Weight</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setWeight(text)}
        value={weight}
      />

      <Text style={styles.label}>Buy Price</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setBuyPrice(text)}
        value={buyPrice}
      />

      <Text style={styles.label}>Sell Price</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSellPrice(text)}
        value={sellPrice}
      />

      <Text style={styles.label}>Count</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCount(text)}
        value={count}
      />

      <Text style={styles.label}>Photo</Text>

      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <TouchableOpacity style={styles.deleteButton} onPress={() => setImage(null)}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
        </View>
      )}
      
      <TouchableOpacity style={styles.photoButton} onPress={handleSelectImage}>
        <Text style={styles.photoButtonText}>{photoButtonLabel}</Text>
      </TouchableOpacity>
      
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddItem;
