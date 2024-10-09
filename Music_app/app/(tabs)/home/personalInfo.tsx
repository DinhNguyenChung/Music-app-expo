import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View, FlatList, ScrollView } from "react-native";
import { Image, TouchableOpacity, Modal } from "react-native";
import { Button, Input, Tile } from "react-native-elements";

import Icon from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { styles } from "./PersonalInfoStyle";

function PersonalInfo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerPersonalInfo}>
        <Image
          source={require("../../../assets/User/Avata.png")}
          style={{ width: 160, height: 160, borderRadius: 80 }}
        />
        <Button
          title={"Change the profile picture"}
          titleStyle={styles.titleChangePic}
          buttonStyle={styles.buttonChangePic}
        />
      </View>

      <View style={styles.introduce}>
        <Text style={styles.title}>Introduce about you</Text>
        <View style={styles.containerInfor}>
          <View style={styles.rows}>
            <Text>Full name</Text>
            <Text>Nguyễn Nhựt Anh</Text>
          </View>
          <View style={styles.rows}>
            <Text>ID</Text>
            <Text style={{ opacity: 0.3 }}>nhutanhngxx</Text>
          </View>
          <View style={styles.rows}>
            <Text>Bio</Text>
            <Text style={{ opacity: 0.3 }}>Add bio</Text>
          </View>
          <View style={styles.rows}>
            <Text>Birthday</Text>
            <Text>17/03/2003</Text>
          </View>
          <View style={styles.rows}>
            <Text>Sex</Text>
            <Text>Male</Text>
          </View>
        </View>
      </View>

      <View style={styles.account}>
        <Text style={styles.title}>Account information</Text>
        <View style={styles.containerInfor}>
          <View style={styles.rows}>
            <Text>Telephone</Text>
            <Text style={{ opacity: 0.3 }}>(+84) 939 968 135</Text>
          </View>
          <View style={styles.rows}>
            <Text>Email</Text>
            <Text style={{ opacity: 0.3 }}>nhutanhngxx@gmail.com</Text>
          </View>
          <View style={styles.rows}>
            <Text>Password</Text>
            <Text>********</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PersonalInfo;
