import PokemonCard from "@/components/pokemonCard";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const PokemonPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View>
          <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: 700 }}>
            Pokemon List
          </Text>
          <PokemonCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PokemonPage;
