import React from 'react';
import { Icon, Card } from 'native-base';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Otp extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
         value1:'',
         value2:'',
         value3:'',
         value4:'',
     };
   }

   componentDidMount(){

   }

   onChange = (text, index) => {
       switch(index){
           case 1:
            this.setState({value1:text});
            if(text.length) this.refs.text2.focus();
            break;
           case 2:
            this.setState({value2:text});
            if(text.length) this.refs.text3.focus();
            break;
           case 3:
            this.setState({value3:text});
            if(text.length) this.refs.text4.focus();
            break;
           case 4:
            this.setState({value4:text});
            if(text.length) this.refs.text4.blur();
            break;
            
       }
   }

   render() {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', textAlign:'center'}} >JUST ONE MORE STEP... </Text>
            <View style={{paddingVertical:30}} >
                <Text style={{fontSize:12, textAlign:'center'}} >Type your activation code sent to</Text>
                <Text style={{fontWeight:'bold', paddingTop:10, textAlign:'center'}}> +65 93376217 </Text>
            </View>
            <View style={{paddingHorizontal:10, flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'100%'}}>
                <Card>
                    <TextInput ref="text1" value={this.state.value1} keyboardType="numeric" maxLength={1} 
                    onChangeText={(text)=>this.onChange(text,1)} style={styles.textInput}/>
                </Card>
                <Card>
                    <TextInput ref="text2" value={this.state.value2} keyboardType="numeric" maxLength={1} 
                    onChangeText={(text)=>this.onChange(text,2)} style={styles.textInput}/>
                </Card>
                <Card>
                    <TextInput ref="text3" value={this.state.value3} keyboardType="numeric" maxLength={1} 
                    onChangeText={(text)=>this.onChange(text,3)} style={styles.textInput}/>
                </Card>
                <Card>
                    <TextInput ref="text4" value={this.state.value4} keyboardType="numeric" maxLength={1} 
                    onChangeText={(text)=>this.onChange(text,4)} style={styles.textInput}/>
                </Card>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color:'#fff', fontWeight:'bold', textAlign:'center'}} >RESEND CODE</Text>
            </TouchableOpacity>
        </View>
     
    )}
};

const styles = StyleSheet.create({
    container:{
        flex:1, justifyContent:'flex-start', alignItems:'center', padding:20
    },
    textInput:{ height:40, paddingHorizontal:5 , textAlign:'center'},
    btn:{backgroundColor:'#0B486B', padding:10, width:'100%', marginTop:30, borderRadius:5,
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                width: 0,
                height: 1
            } 
        }
 
})

