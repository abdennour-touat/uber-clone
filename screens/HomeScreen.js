import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`p-5`}>
        <Image
        style={{width: 100, height:100, resizeMode: 'contain'}}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1045783102000230400/TPLLaqYR_400x400.jpg",
          }}
        />
      </View>
    </SafeAreaView>
  );
}
