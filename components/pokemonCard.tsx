import { pokemonData } from "@/data/pokemon";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const PokemonCard = () => {
  return (
    <FlatList
      data={pokemonData}
      renderItem={(data) => {
        const { item } = data;
        return (
          <View key={item.id} style={style.card}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>{item.name}</Text>
            <Image
              style={{ height: 120, width: "100%" }}
              source={{ uri: item.imageUrl }}
              resizeMode="contain"
            />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 700 }}>
                  {item.type.join(",")}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
                paddingTop: 20,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 700 }}>
                HP:{item.baseStats.hp}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>
                Attack:{item.baseStats.attack}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>
                Defense:{item.baseStats.defense}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>
                Speed:{item.baseStats.speed}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default PokemonCard;

const style = StyleSheet.create({
  card: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "orange",
    borderRadius: 10,
  },
});
