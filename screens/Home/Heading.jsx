import { View, Text } from "react-native";
import React from "react";
import { greet } from "./Greeting";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Heading() {
  const navigation = useNavigation();
  return (
    <View className=" pt-[10vh] flex-row justify-between  items-center">
      <View>
        <Text className="text-emerald-900 text-lg font-bold">Hey Santhosh</Text>
        <Text className="">{greet()} 👋</Text>
      </View>
      <SimpleLineIcons
        name="handbag"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
}
