import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, VirtualizedList } from "react-native";

const APIPage = () => {
  const [data, setData] = useState([]);
  const fetchAction = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchAction();
  }, []);

  const getItemCount = (_data: unknown) => 100;

  const getItem = (_data: unknown, index: number): any => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  return (
    <VirtualizedList
      data={data}
      getItemCount={getItemCount}
      getItem={getItem}
      keyExtractor={(item) => item.id}
      renderItem={(flatData) => {
        const { item }: any = flatData;
        return (
          <View key={item.id} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.body}</Text>
          </View>
        );
      }}
    />
  );
};

export default APIPage;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "justify",
  },
});
