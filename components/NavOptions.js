import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";


const data = [ 
  {
    id: "123",
    title: "Get a ride",
    image:
      "data:image/png;base64,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",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image:
      "https://play-lh.googleusercontent.com/MMBG4AZmpMhSfhF5k7QnFmhvFbaF5ZC_BtEOIKRt9TIkUZjul2lWwPZV75PwTfoSm23-jgMxkroRGA-vkDg=s90-rw-no-tmp_uber_eats_livraison_de_repas_pr_s_de_chez_vous_apk.WebP",
    screen: "EatsScreen",
  },
];

export default function NavOptions() {
    const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity  onPress={ ()=> navigation.navigate(item.screen)} style={tw`p-1  pl-2 pb-8 pt-4  mt-8 `}>
          <View style={tw`text-center`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`ml-5 text-white mt-2 text-lg font-semibold`}>
              {item.title}
            </Text>
            <Icon style={tw`p-2 ml-5 bg-white rounded-full w-10 mt-4`} type="antdesign" name="arrowright" color="black" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
