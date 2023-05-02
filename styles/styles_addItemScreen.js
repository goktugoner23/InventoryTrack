import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      color: 'black',
      paddingBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
      color: 'black',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      color:'black',
    },
    button: {
      backgroundColor: '#0066cc',
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
    photoButton: {
      backgroundColor: '#0099cc',
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    photoButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
    photoLabel: {
      fontSize: 18,
      marginBottom: 5,
      marginTop: 20,
    },
    imageContainer: {
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
    },
    deleteButton: {
      position: 'absolute',
      right: 10,
      backgroundColor: 'red',
      borderRadius: 50,
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      borderWidth: 2,
      borderColor: '#fff'
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    radioContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    radio: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#dcdcdc',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    selected: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#007aff',
    },
    radioLabel: {
      fontSize: 16,
      fontWeight: '400',
      color: '#333',
    },
  });