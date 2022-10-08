import { useState } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput ,ScrollView ,Keyboard} from 'react-native';
import Task from './Task';

export default function ToDoNoAPI(){
    const [todos,setTodos] = useState([]);
    const [value,setValue] = useState('');
    
    const addTask = () =>{
        if(value.length === 0){
            alert("fill task !!!");
            return false;
        }
        setTodos([...todos,{text: value , key : Date.now()}]);
        setValue('');
        Keyboard.dismiss();
    }
    const deleteTask = (id) =>{
        setTodos(
            todos.filter((todo) => {
                if (todo.key !== id) return true
            })
        )
    }
    return (
        <View style={styles.container}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center",width:"100%"}}>
                <Text style={{color:"black",fontSize:60}}>TODO</Text>
            </View>
            <View style={styles.header}>
                <TextInput placeholder='Enter a todo' placeholderTextColor="black" value={value} onChangeText={(text) => setValue(text)} style={{textAlign:"left",borderWidth:0.5,width:"50%"}}/>
                <TouchableOpacity 
                style={{width:100,height:50,borderRadius:10,backgroundColor:"blue",justifyContent:"center",marginHorizontal:17}}
                onPress={addTask}
                >
                    <Text style={{textAlign:"center",color:"white"}}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listdata}>
                <ScrollView>
                    {
                        todos.map((task) =>(
                            <Task  key={task.key} name={task.text} delete={()=> deleteTask(task.key)}/>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection: "column"
    },
    header:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    listdata:{
        flex:3,
    }
})