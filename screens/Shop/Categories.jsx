import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Categories({ setCategoryName }) {
  const [categories, setCategories] = useState([]);
  const [activeCategories, setActivecategories] = useState(0);
  async function getCategories() {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(["All",...data]);
      setCategoryName("All");
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  const renderItem = ({ item, index }) => (
    <View
      className={`${
        activeCategories == index &&
        "border-emerald-900 bg-emerald-600 text-white"
      }  py-3 px-4 border mr-2 rounded-md`}
    >
      <Text
        key={index}
        className={`${activeCategories == index && "text-white"}`}
        onPress={() => {
          setActivecategories(index);
          setCategoryName(categories[index]);
        }}
      >
        {item}
      </Text>
    </View>
  );
  return (
    <View>
      <Text className="text-lg font-bold ">Categories</Text>
      <FlatList
        className="py-4"
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
