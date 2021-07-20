import React from 'react';
import { View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';

import carsList from './carsList';
import CarItem from '../carItem';

const CarsList = (props)=>{
    return (
        <View style={styles.container}>
           <FlatList
           data={carsList}
           renderItem={({item}) => <CarItem car={item}/>}
           snapToAlignment={'start'}
           decelerationRate={'fast'}
           snapToInterval={Dimensions.get('window').height}
           showsVerticalScrollIndicator={false}
           />
        </View>
    )
}

export default CarsList;