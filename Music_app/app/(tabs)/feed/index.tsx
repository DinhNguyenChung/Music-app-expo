import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View, FlatList, ScrollView, ImageBackground, requireNativeComponent } from "react-native";
import { Image, TouchableOpacity, Modal } from "react-native";
import { Button, Input } from "react-native-elements";

import Icon from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import {useRouter, useLocalSearchParams} from "expo-router";
import { useState } from "react";

const dataFeed = [
  {
    id: 1,
    artists: "Jessica Gonzalez",
    song: "FLOWER",
    description: "Poster a track",
    date: "2 days ago",
    avtPath: require("../../../assets/Feed/Avatar 4.png"),
    imgPath: require("../../../assets/Feed/Image 93.png"),
    view: 125,
    like: 25,
    duration: "05:15",
    comment: 3,
    share: 1,
  },
  {
    id: 2,
    artists: "William King",
    song: "ME",
    description: "Poster a track",
    date: "5 days ago",
    avtPath: require("../../../assets/Feed/Avatar 5.png"),
    imgPath: require("../../../assets/Feed/Image 94.png"),
    view: 125,
    like: 25,
    duration: "05:15",
    comment: 3,
    share: 1,
  }
]

const FeedScreen = () => {
  const renderFeed = ({ item }) => (
    <View style={{ margin: 20, overflow: 'hidden', gap: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Image source={item.avtPath} style={{width: 35, height: 35}}/>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.artists}</Text>
            <AntDesign name="checkcircleo" size={13} color="blue" />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
            <Text>{item.description}</Text>
            <Entypo name="dot-single" size={20} color="gray" />
            <Text>{item.date}</Text>
          </View>
        </View>
      </View>

      <View style={{width: 375, height: 375, justifyContent: 'flex-end'}}>
        <ImageBackground
          source={item.imgPath}
          style={{position: 'absolute', height: 375, width: 375}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: 20, height: 100}}>
          <View style={{}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>{item.song}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>{item.artists}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Ionicons name="play-outline" size={15} color="white" />
            <Text style={{color: 'white'}}>{item.view}</Text>
            <Entypo name="dot-single" size={20} color="white" />
            <Text style={{color: 'white'}}>{item.duration}</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        {/*  */}
        <TouchableOpacity>
          <AntDesign name="hearto" size={20} color="black" />
        </TouchableOpacity>
        <Text style={{paddingRight: 20}}>{item.like}</Text>
        {/*  */}
        <TouchableOpacity>
          <FontAwesome5 name="comment-dots" size={20} color="black" />
        </TouchableOpacity>
        <Text style={{paddingRight: 20}}>{item.comment}</Text>
        {/*  */}
        <TouchableOpacity>
          <AntDesign name="sharealt" size={20} color="black" />
        </TouchableOpacity>
        <Text>{item.share}</Text>
      </View>

    </View>
  );
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={dataFeed}
        renderItem={renderFeed}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom: 50}}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
