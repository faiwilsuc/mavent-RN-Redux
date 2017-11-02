import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import data from '../../services/request.json';
import { Actions } from 'react-native-router-flux';

class MySkills extends Component {
  constructor() {
    super();
    this.state = {
      offered: true,
    };
  }
  // This is to remove fb token for retry purposes
  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <Content>
          {
            data.map((request) => {
              return (
                <View key={request.id} style={{backgroundColor:'#fff', paddingVertical:5, width: '100%', borderTopWidth: 1, borderColor: '#ccc', flexDirection: 'row' }}>
                  <View style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../../assets/images/profile.png')} style={{ height: 60, width: 60, borderRadius: 30 }} />
                    <Text>{request.Dist}</Text>
                  </View>

                  <View style={{ flex: 3, paddingLeft: 3, paddingTop: 4 }}>
                    <Text style={{ fontSize: 12, color: '#ccc' }}>{request.Name}</Text>
                    <View style={{ height: 2 }}></View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{request.Title}</Text>
                    <View style={{ height: 2 }}></View>
                    <Text style={{ fontSize: 13 }}>{request.Message}</Text>
                  </View>

                  <View style={{ flex: 1.5, alignItems: 'center' }}>
                    <View style={(request.offered === 'true') ? styles.offered : styles.n_offered}>
                      <Text style={{ fontSize: 12, color: 'white' }}>Offer:</Text>
                      <Text style={{ fontSize: 16, color: 'white' }}>{request.price}</Text>
                    </View>

                    <View style={{ marginTop: 4, flexDirection: 'row', justifyContent: 'space-around', width: 80 }}>
                      <TouchableOpacity style={[styles.icon,{paddingHorizontal:7}]}>
                        <Icon name='md-close'/>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.icon,{paddingHorizontal:5}]}>
                        <Icon name='md-checkmark'/>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
              );
            })}
        </Content>
      </Container>

    );
  }
}

const styles = {
  listContainer: {
    flex: 1,
  },
  offered: {
    height: 40,
    width: 80,
    borderRadius: 3,
    marginTop: 4,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  n_offered: {
    height: 40,
    width: 80,
    borderRadius: 3,
    marginTop: 4,
    backgroundColor: '#bdc3c7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{borderWidth: 1, borderRadius: 3, borderColor: '#ccc' }
};

export default MySkills;
