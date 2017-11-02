
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const HORIZONTAL_PADDING = 6;
const { width, height } = Dimensions.get('window');
const compy = [
      {
        name: 'Cleaning',
        id: 'clean',
        image: require('../../assets/images/subCategories/comfy/cleaning.jpg')
      },
      {
        name: 'Plumber',
        id: 'plumber',
        image: require('../../assets/images/subCategories/comfy/plumber.jpg')
      },
    ];
const enKnowledge = [
      {
        name: 'Music',
        id: 'music',
        image: require('../../assets/images/subCategories/enKnowledge/music.jpg')
      },
      {
        name: 'Tuition',
        id: 'tuition',
        image: require('../../assets/images/subCategories/enKnowledge/tuition.jpg')
      },
      {
        name: 'Others',
        id: 'others',
        image: require('../../assets/images/subCategories/enKnowledge/others.jpg')
      },
    ];
const enEvent = [
      {
        name: 'Makeup Artist',
        id: 'makeup',
        image: require('../../assets/images/subCategories/enEvent/makeup.jpg')
      },
      {
        name: 'Performer',
        id: 'performer',
        image: require('../../assets/images/subCategories/enEvent/performer.jpg')
      },
      {
        name: 'Photographer',
        id: 'photog',
        image: require('../../assets/images/subCategories/enEvent/photog.jpg')
      },
      {
        name: 'Others',
        id: 'others',
        image: require('../../assets/images/subCategories/enEvent/others.jpg')
      },
    ];
const care = [
      {
        name: 'Midwives',
        id: 'midwives',
        image: require('../../assets/images/subCategories/Care/midwives.jpg')
      },
      {
        name: 'Elderly Care',
        id: 'elderly',
        image: require('../../assets/images/subCategories/Care/elderlycare.jpg')
      },
      {
        name: 'Baby Care',
        id: 'baby',
        image: require('../../assets/images/subCategories/Care/babycare.jpg')
      },
    ];
const fillTummy = [
      {
        name: 'Home Cooked',
        id: 'homecook',
        image: require('../../assets/images/subCategories/fillTummy/HomeCooked.jpg')
      },
      {
        name: 'Cooking Classes',
        id: 'cookingclass',
        image: require('../../assets/images/subCategories/fillTummy/cookingClass.jpg')
      },
    ];
const health = [
      {
        name: 'Gym',
        id: 'gym',
        image: require('../../assets/images/subCategories/health/gym.jpg')
      },
      {
        name: 'Exercise Expert',
        id: 'exercise',
        image: require('../../assets/images/subCategories/health/Running.jpg')
      },
      {
        name: 'Sports',
        id: 'sports',
        image: require('../../assets/images/subCategories/health/Sports.jpg')
      },
    ];
const helpHand = [
      {
        name: 'Grocery Shopper',
        id: 'grocery',
        image: require('../../assets/images/subCategories/helpHand/grocery.jpg')
      },
      {
        name: 'Pet Walker',
        id: 'petwalker',
        image: require('../../assets/images/subCategories/helpHand/petwalking.jpg')
      },
    ];
const lookBetter = [
      {
        name: 'Hair Dresser',
        id: 'hair',
        image: require('../../assets/images/subCategories/lookBetter/hairdresser.jpg')
      },
      {
        name: 'Nail Artist',
        id: 'nail',
        image: require('../../assets/images/subCategories/lookBetter/nailArt.jpg')
      },
      {
        name: 'Others',
        id: 'others',
        image: require('../../assets/images/subCategories/lookBetter/others.jpg')
      },
    ];    
class RenderItem extends React.Component {
     navigate = (id) => {
         let data = [];
        switch (id) {
        case 'comfy':
            data = compy;
            break;
        case 'enKnowledge':
            data = enKnowledge;
            break;
        case 'enEvent':
            data = enEvent;
            break;
        case 'Care':
            data = care;
            break;
        case 'fillTummy':
            data = fillTummy;
            break;
        case 'health':
            data = health;
            break;
        case 'helpHand':
            data = helpHand;
            break;
        case 'lookBetter':
            data = lookBetter;
            break;
        default:
            break;
        }
        Actions.subCategory({data:data, title:this.props.data.name});
    }
    render(){
        return (
            <TouchableOpacity onPress={() => this.navigate(this.props.data.id)}>
                <Image source={this.props.data.image} style={styles.itemImageStyle} >
                    <Text style={styles.placeholderItemNameStyle}> {this.props.data.name} </Text>
                </Image>
            </TouchableOpacity>

        );
    }
}

export default RenderItem;

const styles = StyleSheet.create({
  
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
