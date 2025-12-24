import { StyleSheet, Text, View } from "react-native";


function Fabrics(){
    return(<>
    
    <View style={Styles.container} >
        <Text>Fabrics page</Text>
    </View>
    </>)
}

export default Fabrics;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    }
}
)