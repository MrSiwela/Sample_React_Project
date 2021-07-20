import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    logo: {
      width: '100',
      height: '20'  
    },
    text: {
        fontSize:20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});

export default styles;