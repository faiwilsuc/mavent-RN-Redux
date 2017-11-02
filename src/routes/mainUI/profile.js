import React, { Component } from 'react';
import { StyleSheet, View, Platform, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RateComponent from '../../components/rateComponent';
import ReviewComponent from '../../components/reviewComponent';
import data from '../../services/reviews.json';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      details: [],
      rateData: [{ name: 'Photographer', rate: 3.5 }, { name: 'React', rate: 5 }, { name: 'Angular 2/4', rate: 4.5 }],
      reviewData: data.slice(0, 4),
    };
  }
  componentWillMount() {
    this.fetchdetails();
  }

  componentDidMount() {

  }

  fetchdetails = () => {
    const getID = 'https://graph.facebook.com/me?access_token=' + this.props.token;
    fetch(getID)
      .then((response) => response.json())
      .then((responseData) => this.setState({ id: responseData.id }, () => {
        const fetchdetails = 'https://graph.facebook.com/v2.9/' + this.state.id + '?fields=name,first_name,last_name,gender,age_range,email&access_token=' + this.props.token;
        fetch(fetchdetails)
          .then((response) => response.json())
          .then((responseData1) => this.setState({ details: responseData1 }));
      }
      ));
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ backgroundColor: '#0B486B', padding: 10 }} >
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
              <View style={styles.ball} />
              <Image source={require('../../../assets/images/profile.png')} style={{ height: 150, width: 150, borderRadius: 75, position: 'absolute' }} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'flex-start', paddingTop: 2 }}>
              <Text style={{ fontSize: 26, color: 'white', fontWeight: 'bold', textShadowColor: 'black', textShadowOffset: { width: 2, height: 1 } }}>{this.state.details.name}</Text>
              <Text style={{ fontSize: 18, color: 'white', paddingBottom: 2 }}>{this.state.details.email}</Text>
            </View>
          </View>
          <View style={{ backgroundColor: 'rgba(17, 109, 161, 0.9)' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.socialView}>
                <Text style={styles.socialTextValue}>1094</Text>
                <Text style={styles.socialTextTitle}>FOLLOWERS</Text>
              </View>
              <View style={styles.socialView}>
                <Text style={styles.socialTextValue}>223</Text>
                <Text style={styles.socialTextTitle}>FOLLOWING</Text>
              </View>
              <View style={{flex:1, justifyContent: 'center', padding: 5, alignItems: 'center' }}>
                <Text style={styles.socialTextValue}>88</Text>
                <Text style={styles.socialTextTitle}>LIKES</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: 'rgba(196, 219, 231, 0.9)', padding: 12 }}>
            <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 8 }}>
              <View style={[styles.wrapper, { alignItems: 'center' }]}>
                <Text style={{ fontSize: 16 }}>Verified</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icon name='logo-facebook' style={{ marginRight: 10, color: '#3B5895' }} />
                  <Icon name='md-mail' />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 16 }}>Member since </Text>
                  <Text style={{ fontSize: 16 }}>12/06/2017</Text>
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 5 }}>About</Text>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>"I am a dedicated person. I enjoy reading, and the knowledge and perspective that my reading gives me has strengthened my teaching skills...."</Text>
              </View>
              <View style={[styles.wrapper]}>
                <View style={{ paddingBottom: 3 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Skills and Expertise!</Text>
                </View>
                {
                  this.state.rateData.map((item, index) => {
                    return <RateComponent key={index} data={item} />
                  })
                }
                <TouchableOpacity onPress={() => Actions.skillList()}>
                  <View style={{ marginVertical: 5, padding: 5, backgroundColor: 'rgba(177, 183, 185, 0.1)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
                    <Icon name='md-add-circle' style={{ color: 'rgba(177, 183, 185, 0.6)' }} />
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <View style={{ paddingBottom: 10 }}>
                  <View style={{ padding: 5, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Reviews</Text>
                    <Text> (</Text><Text>{data.length}</Text><Text>)</Text>
                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {
                      this.state.reviewData.map((item, index)=>{
                        return <ReviewComponent key={index} data={item}/>

                      })
                    }
                    <TouchableOpacity onPress={() => this.setState({ reviewData: data })}>
                      <Icon name='ios-more' color='rgba(177, 183, 185, 0.6)' />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

          </View>

        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 80,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  socialTextValue: { fontSize: 20, color: 'white', fontWeight: 'bold' },

  socialTextTitle: {
    fontSize: 13, color: 'white', textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 }
  },

  socialView: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    borderColor: 'rgba(31, 95, 97, 0.9)', borderRightWidth: 1, padding: 5
  },

  wrapper: { padding: 5, borderBottomWidth: 1, borderColor: '#EDF4F7' }
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps)(Profile);


