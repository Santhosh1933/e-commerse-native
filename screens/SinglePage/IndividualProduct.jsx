import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Share,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";



export default function IndividualProduct() {
  const RatingStar = (count) => {
    const totalStars = 5;
    count = Math.round(count);
    console.log(count);

    const stars = Array.from({ length: totalStars }, (_, index) => (
      <AntDesign
        key={index}
        name={index < count ? "star" : "staro"}
        size={20}
        color="#d97706"
      />
    ));

    return (
      <View className="flex-row justify-end self-end w-fit py-1 rounded-full mt-4 items-center">
        {stars}
      </View>
    );
  };
  const route = useRoute();
  const { id } = route.params;
  console.log(id);
  const [productData, setProductData] = useState([]);
  const navigation = useNavigation();
  const [Loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState();
  async function getProducts() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductData(data);
      console.log(data);
      setActiveImage(data.thumbnail);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (id) {
      getProducts();
    } else {
      () => navigation.navigate("home");
    }
  }, []);

  const height = Dimensions.get("window").height;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}
    >
      {Loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View className="flex flex-col gap-4">
            <Image
              style={{ height: height / 2 }}
              className={` rounded-lg `}
              source={{ uri: activeImage }}
            />
            <ScrollView horizontal className="">
              {productData.images.map((item, i) => (
                <TouchableOpacity onPress={() => setActiveImage(item)}>
                  <Image
                    key={i}
                    source={{ uri: item }}
                    className={`h-[100px] w-[100px] mr-2`}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{ flex: 1 }}>
            <Text className="text-emerald-800 text-2xl text-center pt-4 font-bold">
              {productData.title}
            </Text>
            <Text className="text-slate-700 text-center pb-4">
              {productData.brand}
            </Text>
            <Text className="text-center">{productData.description}</Text>
            <View>{RatingStar(productData.rating)}</View>
            <View className="py-3 flex flex-row justify-start  gap-4 items-center">
              <Text className=" font-bold text-lg text-red-700">
                Rs.
                {productData.price * 80 -
                  (productData.price * 80 * productData.discountPercentage) /
                    100}
              </Text>

              <Text className=" font-semibold line-through">
                Rs.{productData.price * 80}
              </Text>
            </View>

            <View className=" flex flex-row py-4 justify-around items-stretch h-fit">
              <TouchableOpacity className="border p-2 rounded-md">
                <AntDesign name="sharealt" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  elevation: 5,
                }}
                className="border rounded-md px-4 py-1 bg-emerald-700 "
                activeOpacity={0.8}
              >
                <TouchableOpacity
                  className="flex-row gap-3 justify-between items-center"
                  onPress={() => AddToCart(1, productData.id)}
                >
                  <Text className="text-lg  text-white">Add to Cart</Text>
                  <SimpleLineIcons name="handbag" size={20} color="white" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
            <View className="py-8" />
          </View>
        </View>
      )}
    </ScrollView>
  );
}
