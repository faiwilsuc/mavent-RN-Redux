import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, AsyncStorage, Platform, Text, Image } from 'react-native';
import { Container, Content } from 'native-base';
import Carousel from 'react-native-looped-carousel';
import { Actions } from 'react-native-router-flux';
import RenderItem from '../../components/categoryItem'
import Search from 'react-native-search-box';


const { width, height } = Dimensions.get('window');

const imageDetails = [
        {
          name: 'Comfortable Home',
          id: 'comfy',
          image: require('../../../assets/images/ListView/Category1.jpg')
        },
        {
          name: 'Enhancing knowledge',
          id: 'enKnowledge',
          image: require('../../../assets/images/ListView/Category2.jpg')
        },
        {
          name: 'Enhancing Events',
          id: 'enEvent',
          image: require('../../../assets/images/ListView/Category3.jpg')
        },
        {
          name: 'Extra Care',
          id: 'Care',
          image: require('../../../assets/images/ListView/Category4.jpg')
        },
        {
          name: 'Filling Tummies',
          id: 'fillTummy',
          image: require('../../../assets/images/ListView/Category5.jpg')
        },
        {
          name: 'Healthy Lifestyle',
          id: 'health',
          image: require('../../../assets/images/ListView/Category6.jpg')
        },
        {
          name: 'Helping Hands',
          id: 'helpHand',
          image: require('../../../assets/images/ListView/Category7.jpg')
        },
        {
          name: 'Look Better',
          id: 'lookBetter',
          image: require('../../../assets/images/ListView/Category8.jpg')
        },
  ];


class CategoryView extends Component {
    
    componentWillMount() {

    }

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
            <View style={{flex:1}}>
                <Search
                ref="search_box" backgroundColor={'#0B486B'} inputStyle={{ backgroundColor:'#032d44'}}  
                    placeholderTextColor="#d3d3d3"
                    tintColorSearch="#fff"
                    tintColorDelete="#fff"
                onSearch={this.onSearch}  onChangeText={this.onChangeText}     />
                <Carousel
                    delay={6000}
                    style={styles.carouselItem}
                    autoplay
                    pageinfo
                >
                    <View style={styles.carouselItem}>
                        <Image source={require('../../../assets/images/CarouselView/Image2-1.jpg')} style={styles.carouselImage} />
                    </View>

                    <View style={styles.carouselItem}>
                        <Image source={require('../../../assets/images/CarouselView/Image1.jpg')} style={styles.carouselImage} />
                    </View>

                    <View style={styles.carouselItem}>
                        <Image source={require('../../../assets/images/CarouselView/Image3-1.jpg')} style={styles.carouselImage} />
                    </View>
                </Carousel>
                <Container>
                    <Content style={{width:width}}>
                       {imageDetails.map((item,index)=>{
                           if(index % 2 ==0){
                            return <View key={index} style={{flexDirection:'row', paddingTop:5, justifyContent:'space-around', alignItems:'flex-start'}}>
                                <RenderItem data={imageDetails[index]} />
                                {
                                    imageDetails[index+1] &&
                                        <RenderItem data={imageDetails[index+1]} />
                                }
                            </View>
                           }
                        })}
                    </Content>
                </Container>
                
              
            </View>

        );
    }
}

const styles = StyleSheet.create({
    carouselItem: {
        width: width, height: height / 4.5
    },
    carouselImage: {
        width: width, height: 160
    },
    list: {
        borderWidth:1, width:width, height:height,backgroundColor:'red',

  },

});

export default CategoryView;
