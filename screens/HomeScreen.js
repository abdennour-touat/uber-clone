import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { APIKEY } from "@env";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-black h-full`}>
      <View style={tw`p-5 mt-6`}>
        <Image
          style={{ width: 120, height: 120, resizeMode: "contain" }}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1045783102000230400/TPLLaqYR_400x400.jpg",
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          placeholder="Search a place"
          query={{
            key: APIKEY,
            language: "en",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}
