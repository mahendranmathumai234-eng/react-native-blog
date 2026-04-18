import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../utils/colors";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const[posts,setPosts]=useState([]);
  const[pagination,setPagination]=useState({
    currentPage: 1,
    totalPages: 0,
    totalCount: 0,
    limit: 5,
  });


  useEffect(async ()=>{
    const response=await apiClient.get("/posts");
    console.log("Posts fetched:",response.data.data.posts);
    setPosts(response.data.data.posts);
    setPagination(response.data.data.pagination);
  
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <Text style={styles.body}>
        Home screen – posts feed will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
