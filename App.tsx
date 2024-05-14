import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '2', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '3', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '4', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '5', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '6', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '7', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '8', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '9', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '10', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '11', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '12', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '13', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '14', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '15', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '16', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '17', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '18', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '19', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '20', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '21', title: 'Lamborgini', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://i.pinimg.com/236x/2e/b7/4d/2eb74d4abb12e0af50aa4ad31731a0d6.jpg' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>Sorum Mobil</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 50, 
    height: 50, 
    marginRight: 20,
  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});