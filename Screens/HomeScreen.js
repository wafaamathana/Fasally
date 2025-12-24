import { StyleSheet, Text, View } from "react-native";
import Carousel from "../Components/Carousel";


function HomeScreen(){
    return(<>
    <Carousel />
  { /* <View style={Styles.container} >
        <Text>HomeScreen page</Text>
    </View>*/}
    </>)
}

export default HomeScreen;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    }
}
)