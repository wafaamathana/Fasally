import { StyleSheet, Text, View } from "react-native";


function Tailors(){
    return(<>
    
    <View style={Styles.container} >
        <Text>Tailors page</Text>
    </View>
    </>)
}

export default Tailors;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    }
}
)