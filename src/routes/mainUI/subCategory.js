import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Container, Content, Icon} from 'native-base';
const SCREEN_WIDTH = Dimensions.get('window').width;
const { width, height } = Dimensions.get('window');
const HORIZONTAL_PADDING = 10;

class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentDidMount(){

   }

  navigate = (data) => {
    Actions.genericView({data:data, title:data.name});
    
  }

  renderItem(data, index) {
    const { renderItemContainer, itemImageStyle, placeholderItemNameStyle } = styles;
    return (
      <View style={renderItemContainer}>
        <TouchableOpacity onPress={() => this.navigate(data)}>
          <Image source={data.image} style={itemImageStyle} >
            <Text style={placeholderItemNameStyle}> {data.name} </Text>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <View style={styles.imageContainer}>
            <Image source={require('../../../assets/images/chatImage.jpg')} style={styles.chatImageStyle} />
          </View>
          <View style={styles.contentContainer}>
            <View style={{ backgroundColor: 'white', borderRadius: 5, flex: 2, justifyContent: 'center' }}>
              <View style={{ padding: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: (Platform.OS === 'ios' ? 15 : 13), fontWeight: 'bold' }}>#ComfyHomeChatRoom</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text>652</Text>
                  <Text> people in chatroom</Text>
                </View>
                <Text>5 minutes ago</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{color:'#fff', fontSize:17}} >Join Chat</Text>
              <Icon name='arrow-forward' style={{color:'#fff', fontSize:20}}/>

            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 2.4 }}>
            <Container>
                <Content>
                    {
                      this.props.data.map((item, index)=>{
                        if(index % 2 ==0){
                          return <View key={index} style={{paddingHorizontal:5, width:width, flexDirection:'row', paddingTop:5, justifyContent:'space-between', alignItems:'flex-start'}}>
                                  {this.renderItem(this.props.data[index], index)}
                                  {this.props.data[index+1] &&
                                    this.renderItem(this.props.data[index+1], index)
                                  }
                            </View>
                        }
                      })
                    }
                </Content>
            </Container>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topHalf: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal:5,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(196, 219, 231, 0.9)'
  },
  imageContainer: {
    borderRadius: 10,
    height: 180,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2
  },
  contentContainer: {
    height: 180,
    width: (Platform.OS === 'ios' ? SCREEN_WIDTH / 2.3 : SCREEN_WIDTH / 2.4),
  },
  chatImageStyle: {
    height: 170,
    width: 190,
    borderRadius: 10,
    position: 'absolute'
  },
  buttonStyle: {
    flexDirection:'row',
    marginTop:10, padding:10, backgroundColor:'#1F57A0', justifyContent: 'space-around', alignItems: 'center',
    borderRadius:5
  },
  item: {
    flex: 1,
    height: 160,
  },
  renderItemContainer: {

  	justifyContent: 'center',
  	alignItems: 'center',
  	paddingTop: 5
  },
  itemImageStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: (width / 2) - HORIZONTAL_PADDING,
    height: 160,
  },
  placeholderItemNameStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#0000007F',
    borderRadius: 5,
    paddingLeft: 1,
    paddingRight: 3,
    overflow: 'hidden'
  },

});

export default SubCategory;
