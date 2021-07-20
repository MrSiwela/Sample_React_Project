    import React from 'react';
    import { View, Text, ImageBackground } from 'react-native';
    import StyledButton from '../styledButton';

    import styles from './styles';

    const CarItem = (props) => {

        const {name, tagLine, image} = props.car;
        return (
            <View style={styles.testContainer}>

                <ImageBackground 
                source={image}
                style={styles.image}
                />
  
                <View style={styles.titles}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{tagLine}</Text>
                </View>

                <View style={styles.buttonsContainer}>
                    <StyledButton 
                    type='primary' 
                    content="Custom Order"
                    onPress={()=>{
                    console.warn("Custom Order Button Was Pressed.")
                    }}/>
                
                    <StyledButton 
                    type='secondary' 
                    content="Existing Inventory"
                    onPress={()=>{
                    console.warn("Existing Inventory Button Was Pressed.")
                    }}/>
                </View>
            </View>
        );
    };

    export default CarItem