import { StyleSheet, Text, View ,TouchableOpacity,TextInput ,ScrollView} from 'react-native';
const Task = (props) => (
    <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:10}}>
        <Text style={{fontSize:19,textAlign:"center",marginHorizontal:90}}>{props.name}</Text>
        <TouchableOpacity 
        onPress={props.delete}
        style={{width:100,height:50,borderRadius:10,backgroundColor:"blue",justifyContent:"center",marginHorizontal:17}}>
        <Text style={{textAlign:"center",color:"white"}}>Delete</Text>
        </TouchableOpacity>
    </View>
)
export default Task