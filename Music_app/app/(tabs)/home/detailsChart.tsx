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

// import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
// import { PanGestureHandler } from 'react-native-gesture-handler';
// import useAnimatedGestureHandler  from 'react-native-reanimated';

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
const DetailChart = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    // Khai báo biến state để lưu bài hát hiện tại
    const [currentSong, setCurrentSong] = useState(null);
    // Khai báo trạng thái cho việc mở rộng modal
    const [isFullScreen, setIsFullScreen] = useState(true);
    // Lấy dữ liệu từ URL
    const {id, title, name, imgPath} = useLocalSearchParams();
    // Khai báo biến state dùng để hiển thị modal
    const [modalVisiblePlayMusic, setModalVisiblePlayMusic] = useState(false);
    const router = useRouter();
    // Khai báo biến state dùng để đổi màu icon Favourite
    const [colorFavourite, setColorFavourite] = useState();
    // Hàm để hiển thị modal và lưu bài hát hiện tại
    const handlePress = (item) => {
        setCurrentSong(item);
        setIsPlaying(true); // Bắt đầu chơi nhạc
        toggleFullScreen(); // Gọi lại hàm để mở rộng modal
    };
    // Hàm để chuyển đổi giữa chế độ thanh ngang và toàn màn hình
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
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
                    <Text style={{ fontSize: 15}}>{item.artist}</Text>
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
    // Trả về giao diện
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
                <Image
                    source={imgPath}
                    style={{marginRight: 20}}
                />
                <View style={{gap: 5}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>{name}</Text>
                    <View style={{flexDirection: 'row', gap: 20}}>
                        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                            <AntDesign name="hearto" size={12} color="black" />
                            <Text>1,234</Text>
                        </View>
                        <View>
                            <Text>05:10:18</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 15}}>{title}</Text>
                </View>
            </View>

            {/* Hiển thị nút chức năng như Yêu thích, Phát ngẫu nhiên, Phát từ đầu */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center', paddingTop: -10}}>
                <View style={{flexDirection: 'row', gap: 20}}>              
                    <TouchableOpacity><AntDesign name="hearto" size={20} color="black" /></TouchableOpacity>
                    <TouchableOpacity><Entypo name="dots-three-horizontal" size={20} color="black" /></TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                    <TouchableOpacity><FontAwesome name="random" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><AntDesign name="play" size={50} color="black" /></TouchableOpacity>
                </View>
            </View>

            {/* Hiển thị Flatlist */}
            <View>
                <FlatList
                    data={dataTop50Canada}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
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
};

export default DetailChart;