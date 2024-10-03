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
import { useState } from "react";

const ArtistProfile = () => {

    const {id, singer, img} = useLocalSearchParams();
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{alignItems: 'center', gap: 10, padding: 10}}>
                <Image
                    source={img}
                    style={{width: 240, height: 240}}
                />
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>{singer}</Text>
                <Text>65.1K Followers</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <View style={{flexDirection: 'row', gap: 15, padding: 10, alignItems: 'center'}}>
                    <Button
                        title="Follow"
                        titleStyle={{color: 'blue'}}
                        buttonStyle={{backgroundColor: 0, borderWidth: 1, borderRadius: 20, height: 40, width: 100}}
                    />
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', gap: 15, padding: 10, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <FontAwesome name="random" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="play" size={50} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Danh sách nhạc được nghe nhiều nhất */}
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Popular</Text>
            </View>
        </SafeAreaView>
    );
}

export default ArtistProfile;