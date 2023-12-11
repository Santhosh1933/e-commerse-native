import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Products from "./Products";
import Heading from "./Heading";
export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading />
        <View className="py-8 rounded-lg">
          <Image
            source={require("../../assets/banner.jpg")}
            style={styles.bannerImage}
            onError={(error) => console.log("Image load error:", error)}
          />
        </View>
        <View className="pb-16">
          <Products  TopProduct={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  bannerImage: {
    flex: 1,
    height: 170,
    borderRadius: 8,
  },
});
