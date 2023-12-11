import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Categories from "./Categories";
import Products from "../Home/Products";

export default function Shop() {
  const [categoryName, setCategoryName] = useState("All");

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}
    >
      <View className="mt-[10vh]">
        <Categories setCategoryName={setCategoryName} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className=" pb-20 pt-8">
          <Products categoryName={categoryName} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
