import { colors, fontSize } from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import { useRouter } from "expo-router";
import { ImageBackground, SafeAreaView, Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { Button, Input } from "react-native-elements";

const dataPremium = [
    {
        id: 1,
        title: "Mini",
        free: "Free for 1 month",
        price: "₫10,500 for 1 week",
        list: [
            "1 mobile-only Premium account",
            "Offline listening of up to 30 songs on 1 device",
            "One-time payment",
            "Basic audio quality"
        ]
    },
    {
        id: 2,
        title: "Individual",
        free: "Free for 2 month",
        price: "₫29,500 for 2 months",
        list: [
            "1 Premium account",
            "Cancel anytime",
            "Subscribe or one-time payment",
        ]
    },
    {
        id: 3,
        title: "Student",
        free: "Free for 1 month",
        price: "₫29,500 for 2 months",
        list: [
            "1 verified Premium account",
            "Discount for eligible students",
            "Cancel anytime",
            "Subscribe or one-time payment"
        ]
    }
]

const SubscribePremium = () => {
    const router = useRouter();
    const renderItem = ({ item }) => (
    <View style={{
        backgroundColor: 'white',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
        width: 300,
        height: 400,
    }}>
        {/* Hiển thị tên gói Premium */}
        <View>
            <Text style={{fontSize: 60, fontWeight: 'bold'}}>{item.title}</Text>
        </View>

        {/* Hiển thị giá và chức năng */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
            <View style={{backgroundColor: '#F5F2FD', justifyContent: 'center', padding: 10, borderRadius: 18}}>
                <Text style={{ color: '#A581E9', fontWeight: 'bold' }}>{item.free}</Text>
            </View>
            <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
        </View>

        {/* Hiển thị các chức năng */}
      {item.list.map((feature, index) => (
        <View key={index} style={{flexDirection: 'row', paddingRight: 10, marginVertical: 8}}>
          <Text style={{fontSize: 18, color: '#4CAF50', marginRight: 8}}>{`\u2714`}</Text>
          <Text style={{fontSize: 18}}>{feature}</Text>
        </View>
        ))}

        {/* Nút Subscribe */}
        <View style={{marginTop: 20}}>
            <Button
                title="Subscribe"
                titleStyle={{fontWeight: 'bold', fontSize: 20, color: 'black'}}
                buttonStyle={{backgroundColor: '#3BE477', width: '100%', height: 50, borderRadius: 25}}
                onPress={() => router.push("(tabs)")}
            />
        </View>
    </View>
  );
    return (
        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', }}>
            <ImageBackground
                source={require("../../assets/LaunchScreen/PremiumBG.png")}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            />
            <View>
                <Text style={{fontSize: 50, color: 'white', fontWeight: 'bold', textAlign: 'center', marginTop: 150, marginBottom: 50}}>
                    Unlimited music selections
                </Text>
            </View>
            <FlatList
                data={dataPremium}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <View style={{paddingBottom: 70}}>
                <TouchableOpacity onPress={() => router.push("(tabs)")}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>Back home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SubscribePremium;