import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";

const Home = ({ navigation }) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "Ryacudu",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  // menu dibawah tulisan mau print apa
  const categoryData = [
    {
      id: 1,
      name: "Order",
      icon: icons.order,
    },
    {
      id: 2,
      name: "Delivery",
      icon: icons.delivery,
    },
    {
      id: 3,
      name: "Lagi Promo",
      icon: icons.promo,
    },
    {
      id: 4,
      name: "Terbaru",
      icon: icons.terbaru,
    },
    {
      id: 5,
      name: "Favorite",
      icon: icons.favorite,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: "ARIEF Fotocopy",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.fotocopy1,
      duration: "30 - 45 min",
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Arief Syahni",
      },
      menu: [
        {
          menuId: 1,
          name: "A4",
          photo: images.berwarna,
          description: "Berwarna",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "A4",
          photo: images.hitamputih,
          description: "Hitam Putih",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Jilid",
          photo: images.jilid,
          description: "Ring",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: "Lotus Fotocopy",
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.fotocopy2,
      duration: "15 - 20 min",
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: "Jackson Rinaldi",
      },
      menu: [
        {
          menuId: 4,
          name: "A4",
          photo: images.berwarna,
          description: "Berwarna",
          calories: 200,
          price: 10,
        },
        {
          menuId: 5,
          name: "A4",
          photo: images.hitamputih,
          description: "Hitam Putih",
          calories: 250,
          price: 15,
        },
        {
          menuId: 6,
          name: "Jilid",
          photo: images.jilid,
          description: "Ring",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 3,
      name: "Santuy Fotocopy",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.fotocopy3,
      duration: "20 - 25 min",
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: "Ujang Japri",
      },
      menu: [
        {
          menuId: 7,
          name: "A4",
          photo: images.berwarna,
          description: "Berwarna",
          calories: 200,
          price: 10,
        },
        {
          menuId: 8,
          name: "A4",
          photo: images.hitamputih,
          description: "Hitam Putih",
          calories: 250,
          price: 15,
        },
        {
          menuId: 9,
          name: "Jilid",
          photo: images.jilid,
          description: "Ring",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 4,
      name: "Milenial Fotocopy",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.fotocopy4,
      duration: "10 - 15 min",
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Ahmad Dhani",
      },
      menu: [
        {
          menuId: 10,
          name: "A4",
          photo: images.berwarna,
          description: "Berwarna",
          calories: 200,
          price: 10,
        },
        {
          menuId: 11,
          name: "A4",
          photo: images.hitamputih,
          description: "Hitam Putih",
          calories: 250,
          price: 15,
        },
        {
          menuId: 12,
          name: "Jilid",
          photo: images.jilid,
          description: "Ring",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 5,
      name: "Apu Fotocopy",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.fotocopy5,
      duration: "15 - 20 min",
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Uncle Muthu",
      },
      menu: [
        {
          menuId: 13,
          name: "A4",
          photo: images.berwarna,
          description: "Berwarna",
          calories: 200,
          price: 10,
        },
        {
          menuId: 14,
          name: "A4",
          photo: images.hitamputih,
          description: "Hitam Putih",
          calories: 250,
          price: 15,
        },
        {
          menuId: 15,
          name: "Jilid",
          photo: images.jilid,
          description: "Ring",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: "Sabyan Fotocopy",
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.fotocopy6,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Nissa Sabyan",
      },
      menu: [
        {
          menuId: 16,
          name: "A4",
          photo: images.berwarna,
          description: "Berwarna",
          calories: 200,
          price: 10,
        },
        {
          menuId: 17,
          name: "A4",
          photo: images.hitamputih,
          description: "Hitam Putih",
          calories: 250,
          price: 15,
        },
        {
          menuId: 18,
          name: "Jilid",
          photo: images.jilid,
          description: "Ring",
          calories: 194,
          price: 8,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 3 }}>
        <Text style={{ ...FONTS.h1 }}>Mau print apa ?</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() =>
          navigation.navigate("Restaurant", {
            item,
            currentLocation,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
                    {" "}
                    .{" "}
                  </Text>
                </View>
              );
            })}

            {/* Price */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
