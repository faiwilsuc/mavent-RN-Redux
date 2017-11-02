import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from 'react-native';
import {Icon, Container, Content, Card} from 'native-base'
import { Actions } from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
import Search from 'react-native-search-box';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class GenericView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    // console.log(this.state);
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=8`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  onSearch = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onSearch', text);
            resolve();
        });
    }

    onChangeText = (text) => {
        return new Promise((resolve, reject) => {
            console.log('onChangeText', text);
            resolve();
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 0.09 * SCREEN_HEIGHT, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#CED0CE' }}>
          <View style={{ height: 0.065 * SCREEN_HEIGHT, flexDirection: 'row' }}>

            <View style={{ flex: 0.3, borderRightWidth: 1, borderColor: '#CED0CE', paddingLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: '#8C8C8C' }}>Tag</Text>
              <Text>Event: Wedding</Text>
            </View>

            <View style={{ flex: 0.3, borderRightWidth: 1, borderColor: '#CED0CE', paddingLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: '#8C8C8C' }}>Distance</Text>
              <Text>2 km radius</Text>
            </View>

            <View style={{ flex: 0.3, paddingLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: '#8C8C8C' }}>Filter</Text>
              <Text>Nearest</Text>
            </View>

          </View>
        </View>
        <View style={{backgroundColor:'#0B486B', padding:3}}>
                        <Search
                            ref="search_box" backgroundColor={'#0B486B'} inputStyle={{ backgroundColor:'#032d44'}}  
                                placeholderTextColor="#d3d3d3"
                                tintColorSearch="#fff"
                                tintColorDelete="#fff"
                            onSearch={this.onSearch}  onChangeText={this.onChangeText}     />
                    </View>

        <Container>
          <Content>
            {this.state.data.map((item, index)=>{
              return <Card key={index} style={{marginTop:0}}>
              <View  style={{ height: 100, width: SCREEN_WIDTH, flexDirection: 'row' }}>
                <View style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: item.picture.thumbnail }} style={{ height: 60, width: 60, borderRadius: 30 }} />
                  <Text>x.x km</Text>
                </View>

                <View style={{ flex: 3, paddingLeft: 3, paddingTop: 10 }}>
                  <Text style={{ fontSize: 14, color: '#8C8C8C' }}>{`${item.name.first} ${item.name.last}`}</Text>
                  <View style={{ height: 2 }}></View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.data.name}</Text>
                  <View style={{ height: 8 }}></View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <StarRating
                      disabled
                      maxStars={5}
                      rating={3.5}
                      starSize={20}
                      starColor="#FFDD44"
                    />
                    <View style={{ backgroundColor: '#00CCE4', marginLeft: 8, borderRadius: 4, justifyContent: 'center', alignItems: 'center', width: 110, padding: 5 }}>
                      <Text style={{ color: 'white' }}>Event: Wedding</Text>
                    </View>
                  </View>
                </View>

                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>

                  <View style={{ marginTop: 4, flexDirection: 'row', justifyContent: 'space-around', width: 80 }}>
                      <TouchableOpacity onPress={() => Actions.GenericBookingPage({ title: `${item.name.first} ${item.name.last}` })}>
                        <Icon name='md-chatboxes' style={{fontSize:34}}  />
                      </TouchableOpacity>
                      <Icon name='ios-arrow-forward' style={{fontSize:30}}/>
                  </View>

                </View>
              </View>
              </Card>
            })
            }
        </Content>
      </Container>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
});

export default GenericView;
