import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Platform,
  Modal
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Form, Item, Icon, Container, Content, Input } from 'native-base';
import * as ractions from '../../actions';
import IconBadge from 'react-native-icon-badge';
import {ImagePicker} from 'expo';
import DatePicker from 'react-native-datepicker'
import {connect} from 'react-redux';

class Signup extends Component {
  constructor(props) {
     super(props);
     this.state = {
         profileUrl:require('../../../assets/images/avatar.png'),
         showLoginModal: false,
         email:'',
         password:'',
         firstName:'',
         lastName:'',
         phoneNumber:'',
         birthDay:'',
         gender:'',
     };
   }

  componentWillMount() {
    if (Platform.OS === 'android') {

    }
  }

  componentWillReceiveProps(nextProps) {
      console.log("sdfsdfsdfsdf",nextProps)
  }

  _openCameraRoll = async () => {
    let image = await ImagePicker.launchImageLibraryAsync();
    if(!image.cancelled) {
          this.setState({profileUrl:{uri:image.uri}});
      }
  }

  takePhoto = async () => {
      let image = await ImagePicker.launchCameraAsync();

  }

  onPrivacy = () => {

  }

  onTerms = () => {
      
  }

  register = () => {
      this.props.registerUser({ email:this.state.email, password:this.state.password });
      Actions.OTP();
      
  }
 
  render() {
    return (
        <View style={{flex:1, justifyContent:'center', padding:10}}>
            <Container>
                <Content>
                    <View style={{flexDirection:'row',  alignItems:'center'}}>
                            <IconBadge
                                MainElement={
                                    <TouchableOpacity onPress={this._openCameraRoll}>
                                        <Image source={this.state.profileUrl} style={styles.profileImage} />
                                    </TouchableOpacity>
                                }
                                BadgeElement={
                                    <TouchableOpacity onPress={this.takePhoto}>
                                        <Icon name='md-camera' style={{color:'#fff', fontSize:19}} />
                                    </TouchableOpacity>
                                }
                                IconBadgeStyle={
                                {width:30,
                                height:30,
                                left:40,
                                top:40,
                                backgroundColor: '#ff0000', borderWidth:2, borderColor:'#b22222'}
                                }
                                />


                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:12}}>Smile, add a photo!</Text>
                            <Text style={{fontSize:12, color:'#808080'}}>We'll attach your photo with the gifts you send</Text>
                        </View>
                    </View>
                    <TextInput
                        returnKeyType="next"
                        style={[styles.textInput,{marginTop:20}]}
                        placeholder="First name"
                        onChangeText={(text) => this.setState({firstName:text})}
                        onSubmitEditing={(e)=>{this.refs.lastName.focus()}}
                        value={this.state.firstName}
                    />
                    <TextInput
                        ref='lastName'
                        returnKeyType="next"
                        style={[styles.textInput,{}]}
                        placeholder="Last name"
                        onChangeText={(text) => this.setState({lastName:text})}
                        onSubmitEditing={(e)=>{this.refs.email.focus()}}
                        value={this.state.lastName}
                    />
                    <TextInput
                        ref='email'
                        returnKeyType="next"
                        keyboardType="email-address"
                        style={[styles.textInput,{marginTop:10}]}
                        placeholder="Email address"
                        onChangeText={(text) => this.setState({email:text})}
                        onSubmitEditing={(e)=>{this.refs.password.focus()}}
                        value={this.state.email}
                    />
                    <Text style={styles.text}>We'll send your order confirmation here.</Text>
                    <TextInput
                        ref='password'
                        returnKeyType="next"
                        style={[styles.textInput,{marginTop:5}]}
                        placeholder="Password"
                        secureTextEntry 
                        onChangeText={(text) => this.setState({password:text})}
                        onSubmitEditing={(e)=>{this.refs.phoneNumber.focus()}}
                        value={this.state.password}
                    />
                    <Text style={styles.text}>At least 6 characters.</Text>
                    <TextInput
                        ref='phoneNumber'
                        keyboardType="phone-pad"
                        style={[styles.textInput,{marginTop:10}]}
                        placeholder="Your mobile number"
                        onChangeText={(text) => this.setState({phoneNumber:text})}


                        value={this.state.phoneNumber}
                    />
                    <Text style={styles.text}>We'll need this to activate your account and keep it secured.</Text>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <View style={{flex:1, borderBottomWidth:1, borderColor:'#a9a9a9'}} />
                        <Text style={{padding:10, color:'#808080'}}>OPTIONAL</Text>
                        <View style={{flex:1, borderBottomWidth:1, borderColor:'#a9a9a9'}} />
                    </View>
                    <DatePicker
                        style={{width: '100%'}}
                        date={this.state.birthDay}
                        mode="date"
                        placeholder="Date of birth"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => this.setState({birthDay:date})}
                        customStyles={{
                            dateInput: {
                                borderRadius:5, backgroundColor:'#fff'
                            }
                        }}
                    />
                    <Text style={styles.text}>We'll give you a sweat birthday treat.</Text>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={[styles.genderItemView,{borderRightWidth:1, borderColor:'#a9a9a9'}]}
                            onPress={(e)=>this.setState({gender:'male'})}>
                            <Icon name='man' style={this.state.gender==='male'?{color:'#ff0000'}:{color:'#808080'}}/>
                            <Text style={this.state.gender==='male'?styles.genderSelItem:styles.genderItem}>MALE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.genderItemView} onPress={(e)=>this.setState({gender:'female'})}>
                            <Icon name='woman' style={this.state.gender==='female'?{color:'#ff0000'}:{color:'#808080'}}/>
                            <Text style={this.state.gender==='female'?styles.genderSelItem:styles.genderItem}>FEMALE</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>We'll give you better recommendations.</Text>
                    <TouchableOpacity style={styles.btn} onPress={(e)=>this.register()}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>JOIN MAVENT</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', justifyContent:"center", alignItems:'center', marginTop:10}}>
                        <Text style={{fontSize:12}}>By joining Mavent, you agree with the Bear's </Text>
                        <TouchableOpacity style={{borderBottomWidth:1, borderColor:'#000'}} onPress={(e)=>this.onPrivacy()}>
                            <Text style={{fontSize:12, fontWeight:'bold'}}>Priacy Policy</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:12}}> and</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:5}}>
                        <TouchableOpacity style={{borderBottomWidth:1, borderColor:'#000'}} onPress={(e)=>this.onTerms()}>
                                <Text style={{fontSize:12, fontWeight:'bold'}}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>

        </View>
      
    );
  }
}
export default connect(( state ) => {
	return {
		auth: state.auth,
    reg:state.reg
		
	}
},ractions )(Signup);
const styles = StyleSheet.create({
    profileImage: {
        height: 66,
        width: 66,
        borderWidth:4,
        borderColor:'#fff',
        borderRadius:33
    },
    textInput:{backgroundColor:'#fff', paddingHorizontal:10, height: 40, borderColor: '#a9a9a9', borderWidth: 0.5, borderRadius:5},
    text:{paddingVertical:10, fontSize:12, color:'#808080'},
    genderItemView:{ flexDirection:'row',
        flex:1, backgroundColor:'#fff', padding:5, justifyContent:'center', alignItems:'center'
    },
    genderItem:{color:'#808080', paddingLeft:10},
    genderSelItem:{color:'#000', paddingLeft:10},
    genderIcon:{color:'#808080'},
    genderSelIcon:{color:'#ff0000'},
    btn:{
        padding:10, marginTop:15, flexDirection:'row', width:'78%', alignSelf:'center', alignItems:'center',
        justifyContent:'center', borderRadius:5,
        backgroundColor:'#0B486B',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        width: 0,
        height: 1
        } 
    },
 
});



