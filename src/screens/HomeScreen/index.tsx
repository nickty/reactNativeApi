import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import PoductItem from '../../components/ProductItem';

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
            
            
  return (
    <View style={styles.page}>
     {
         products.map(p => (
             <PoductItem key={p.id} pdata={p} />
         ))
     }
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        padding: 10
    },
    
})