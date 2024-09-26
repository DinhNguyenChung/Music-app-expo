
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors } from "./Colors";

export const StackScreenWithSeachBar : NativeStackNavigationOptions ={
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor:colors.background,
    },
    headerTitleStyle:{
        color:colors.text,
    
    },
    headerTintColor:colors.text,
    headerTransparent:true,
    headerShadowVisible:false,
    headerBlurEffect:'prominent',
    

}