import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View, FlatList, ScrollView, ImageBackground, requireNativeComponent } from "react-native";
import { Image, TouchableOpacity, Modal } from "react-native";
import { Button, Input } from "react-native-elements";

import Icon from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useRouter, useLocalSearchParams} from "expo-router";

import dataTop50Canada from "../../../assets/data/top50canada.json";
import { useState } from "react";

const DetailsTrending = () => {
    return (
        <SafeAreaView></SafeAreaView>
    );
}

export default DetailsTrending;