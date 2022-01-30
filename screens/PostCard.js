import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
let posts = require("./temp_posts.json");

export default class PostCard extends Component {
    constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image source={require('../assets/profile_img.png')} style={{width:25, height:25, borderRadius:75, marginBottom:-25,}}></Image>
            </View>

            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(20)} color={'white'} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: 'beige',
    borderRadius: RFValue(20),
  },
  authorContainer: {
    paddingLeft: RFValue(10),
    justifyContent: 'center',
  },
  authorImageContainer: {
    width:20,
    height:10,
     justifyContent: 'center',
  },
  authorNameContainer: {
    width: 300, 
    height:20,
    marginBottom:8,
    marginLeft:30,
  },
  authorNameText: {
    fontSize: RFValue(15),
    color: 'black',
    fontWeight:'bold'
  },
  postImage: {
    width: '70%',
    alignSelf: 'center',
    height: RFValue(150),
  },
  captionContainer: {
    marginHorizontal:7,
  },
  captionText: {
    fontSize: 13,
    color: 'black',
    paddingTop: RFValue(10),
  
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(130),
    height: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'coral',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontSize: RFValue(20),
    marginLeft: RFValue(5),
  },
});
