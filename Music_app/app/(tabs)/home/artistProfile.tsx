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

import dataPopular from "../../../assets/data/popularList.json";

const getImageSource = (imageName) => {
    switch (imageName) {
        case 'Flower':
            return require("../../../assets/DetailsChart/Flower.png");
        case 'ShapeOfYou':
            return require("../../../assets/DetailsChart/ShapeOfYou.png");
        case 'BlindingLights':
            return require("../../../assets/DetailsChart/BlindingLights.png");
        case 'Levitating':
            return require("../../../assets/DetailsChart/Levitating.png");
        case 'Levitating':
            return require("../../../assets/DetailsChart/ShapeOfYou.png");
        case 'Astronaut':
            return require("../../../assets/DetailsChart/Astronaut.png");
        case 'Dynamite':
            return require("../../../assets/DetailsChart/Dynamite.png");                                         
        // default:
        //     return require("../../../assets/DetailsChart/Flower.png");
    }
};

const ArtistProfile = () => {

    const {id, singer, img} = useLocalSearchParams();
    const router = useRouter();

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const [isPlaying, setIsPlaying] = useState(false);
    // Khai báo biến state để lưu bài hát hiện tại
    const [currentSong, setCurrentSong] = useState(null);
    // Khai báo trạng thái cho việc mở rộng modal
    const [isFullScreen, setIsFullScreen] = useState(true);

    const handlePress = (item) => {
        setCurrentSong(item);
        setIsPlaying(true); // Bắt đầu chơi nhạc
        toggleFullScreen(); // Gọi lại hàm để mở rộng modal
    };

    const renderItem = ({item}) => (
        <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center', justifyContent: 'space-between'}}>
            <TouchableOpacity
                style={{ flexDirection: 'row'}}
                onPress={() => handlePress(item)}
            >
                <View>
                    <Image
                        source={getImageSource(item.img)}
                        style={{ width: 65, height: 65, borderRadius: 5, marginRight: 10 }}
                    />
                </View>
                <View style={{gap: 5}}>
                    <Text style={{ fontSize: 20}}>{item.title}</Text>
                    <Text style={{ fontSize: 15}}>{singer}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between', width: 100}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <AntDesign name="hearto" size={12} color="black" />
                            <Text style={{ marginLeft: 5 }}>{item.view}</Text>
                        </View>
                        <Text style={{ alignSelf: 'center' }}>{item.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View>
                <Entypo name="dots-three-horizontal" size={20} color="black" />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{alignItems: 'center', gap: 10, padding: 10}}>
                <Image
                    source={img}
                    style={{width: 150, height: 150}}
                />
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>{singer}</Text>
                <Text>65.1K Followers</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20}}>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <Button
                        title="Follow"
                        titleStyle={{color: 'blue'}}
                        buttonStyle={{backgroundColor: 0, borderWidth: 1, borderRadius: 20, height: 40, width: 100}}
                    />
                    <TouchableOpacity>
                        <Entypo name="dots-three-horizontal" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <FontAwesome name="random" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="play" size={50} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Danh sách nhạc được nghe nhiều nhất */}
            <View style={{ padding: 20, flex: 1 }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', paddingBottom: 10}}>Popular</Text>
                <View>
                    <FlatList
                        data={dataPopular}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 50 }}
                    />
                </View>
            </View>


            {/* Thanh điều khiển nhạc nổi */}
            {isPlaying && currentSong && (
                <View
                    style={{
                        position: 'absolute',
                        bottom: 70, // Cách tabs một khoảng nhỏ
                        left: 0,
                        right: 0,
                        height: isFullScreen ? '100%' : 70, // Chiều cao thay đổi dựa trên chế độ
                        backgroundColor: 'white',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 5,
                    }}
                >
                    {/* Thanh điều khiển nhỏ */}
                    {!isFullScreen && (
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                padding: 10,
                            }}
                            onPress={toggleFullScreen}
                        >
                            <Image
                                source={getImageSource(currentSong.img)}
                                style={{ width: 50, height: 50, borderRadius: 5 }}
                            />
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{currentSong.title}</Text>
                                <Text style={{ fontSize: 12, color: 'gray' }}>{currentSong.artist}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setIsPlaying(false)}>
                                <AntDesign name="pausecircle" size={40} color="black" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}

                    {/* Giao diện TOÀN MÀN HÌNH khi người dùng nhấn vào thanh nhỏ HOẶC nhấn vào bài hát bất kỳ */}
                    {isFullScreen && (
                        <SafeAreaView style={{ padding: 20, alignItems: 'center', flex: 1}}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 10 }}>{currentSong.title}</Text>
                            <Text style={{ fontSize: 18, marginBottom: 20 }}>{currentSong.artist}</Text>
                            <Image
                                source={getImageSource(currentSong.img)}
                                style={{ width: 300, height: 300, marginBottom: 20 }}
                            />
                            <Text>Thời lượng: {currentSong.time}</Text>
                            <Button title="Thu nhỏ" onPress={toggleFullScreen} />
                        </SafeAreaView>
                    )}
                </View>
            )}

        </SafeAreaView>
    );
}

export default ArtistProfile;