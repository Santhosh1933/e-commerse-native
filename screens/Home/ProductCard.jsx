import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";

export default function ProductCard(props) {
  const data = props.data;
  const width = Dimensions.get("window").width - 44;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("Product", {
          id: data.id,
        })
      }
    >
      <View
        style={{ backgroundColor: "#fff", width: width / 2 }}
        className={`h-[250px]  p-3 rounded-lg mx-[1px] my-[4px] border `}
      >
        <Image
          className={`h-3/4 rounded-lg `}
          source={{ uri: data.thumbnail }}
        />
        <Text className="font-bold pt-3 pb-1" numberOfLines={1}>
          {data.title}
        </Text>
        <Text>
          Rs.
          {data.price * 80 - (data.price * 80 * data.discountPercentage) / 100}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
