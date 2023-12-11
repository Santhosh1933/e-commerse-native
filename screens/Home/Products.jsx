import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ProductCard from "./ProductCard";

export default function Products({ categoryName, TopProduct = false }) {
  const [productsDetails, setProductDetails] = useState([]);
  async function getProducts() {
    let ProductApi = "";
    if (TopProduct) {
      ProductApi = `https://dummyjson.com/products?limit=6&skip=10`;
    } else {
      if (categoryName == "All") {
        ProductApi = `https://dummyjson.com/products`;
      } else {
        ProductApi = `https://dummyjson.com/products/category/${categoryName}`;
      }
    }
    try {
      const response = await fetch(ProductApi);
      const data = await response.json();
      setProductDetails(data.products);
      console.log(ProductApi);
      console.log(categoryName);
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getProducts();
  }, [categoryName, TopProduct]);

  const renderItem = ({ item, index }) => (
    <View>
      <ProductCard key={index} data={item} />
    </View>
  );
  return (
    <View className="">
      <Text className="text-lg font-bold pb-4">
        {TopProduct ? "Top Products" : "Products"}
      </Text>
      <FlatList
        data={productsDetails}
        renderItem={renderItem}
        style={{ flex: 1 }}
        numColumns={2}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
}
