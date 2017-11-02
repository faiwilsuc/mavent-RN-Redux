import React from 'react';
import { Icon, Card } from 'native-base';
import { View, Text, Image, TextInput } from 'react-native';

const ItemRow = (props) => {
  let provider = props.data;
  return (
    <Card style={{marginTop:0}}> 
      <View key={provider.id} style={{ height: 80, backgroundColor: 'white', margin: 1, flexDirection: 'row' }}>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
          <Image source={require('../../assets/images/profile.png')} style={{ height: 50, width: 50, borderRadius: 25 }} />
          
        </View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent:'center' }}>
          <Text style={{ fontSize: 15 }}>{provider.Name}</Text>
          <TextInput defaultValue={provider.Service} editable={false} style={{ textAlign:'center', height:23,width:150, fontSize: 18, fontWeight:'600' }}></TextInput>
          <View style={{backgroundColor:'#0B486B', padding:7, borderRadius:6}} >
            <TextInput defaultValue={provider.tags.toString()} editable={false} style={{textAlign:'center', color:'#fff', fontWeight:'600', height:17, width:150}}></TextInput>
          </View>
        </View>
        <View style={{ justifyContent: 'space-around', flex: 1, alignItems: 'center', paddingHorizontal:10 }}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Icon name='md-pin' style={{fontSize:23, paddingRight:2, color:'gray'}} />
            <Text style={{ fontSize: 15, color:'gray', }}>{provider.Dist}</Text>
          </View>
          <View style={{width:'100%', alignItems:'center', borderWidth:1, borderRadius:8, borderColor:'#ccc', padding:5}}>
            <Text style={{color:'#0B486B', fontWeight:"800"}}>${provider.price}</Text>
          </View>
          {/*<Icon name='md-thumbs-up' size={35} style={{ padding: 4 }} />
          <Icon name='md-chatbubbles' size={40} />*/}
        </View>
      </View>
    </Card>
  );
};

export default ItemRow;