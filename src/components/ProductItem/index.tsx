import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const PoductItem = ({pdata}) => {
    console.log(pdata)
  return (
    <View style={styles.root}>
            <Image 
                style={styles.image}
                source={{uri: pdata.image}}
            />

            <View style={styles.rightContent}>
                <Text style={styles.title} numberOfLines={3}>
                    {pdata.title}
                </Text>
                <View style={styles.ratingsContainer}>
                    <Icon 
                        name="star"
                        size={18}
                        color={"#e47911"}
                    />
                    <Icon 
                        name="star"
                        size={18}
                        color={"#e47911"}
                    />
                    <Icon 
                        name="star-half-full"
                        size={18}
                        color={"#e47911"}
                    />
                    <Icon 
                        name="star-o"
                        size={18}
                        color={"#e47911"}
                    />
                    <Text style={{paddingLeft: 3}}>
                        {pdata.rating.count}
                    </Text>
                </View>
                <Text style={styles.price}>
                    From {pdata.price}
                    <Text style={styles.oldPrice}> $23.43</Text>
                </Text>
            </View>
      </View>
  )
}

export default PoductItem

const styles = StyleSheet.create({

    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#fff"
    }, 
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain'      
    }, 
    title: {
        fontSize: 18
    }, 
    price: {
        fontSize: 18, 
        fontWeight: 'bold'
    }, 
    rightContent: {
        padding: 10, 
        flex: 3
    }, 
    ratingsContainer: {
        flexDirection: 'row', 
        marginVertical: 10,
        alignItems: 'center'
    }, 
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        padding: 3,
        textDecorationLine: 'line-through'
    }
})