import { View, Text, ScrollView , Image} from 'react-native'
import React from 'react'
import Productdata from './ProductData'
import { styles } from './stylsheet'
const ProductComponent = () => {
  return (
   <ScrollView contentContainerStyle={styles.container}>
    {
        Productdata.map((product)=>(
            <View key={product.id} style={styles.items} >
                <Image
                  source={{uri: product.image}}
                    style={styles.image}
                />
                <View style={styles.textView}>
                    <Text style={styles.Text}>{product.name}</Text>
                    <Text  style={styles.price}>{product.price}</Text>
                </View>
            </View>
        ))
    }
   </ScrollView>
  )
}

export default ProductComponent