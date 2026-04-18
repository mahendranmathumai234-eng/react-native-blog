import { View, Text, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import { COLORS } from "../utils/colors";
import { useState } from "react";
import {apiClient} from "../utils/api";


export default function AddPostScreen() {
  const [title,setTitle] =useState("");
  const [content,setContent] =useState("");
  try {
    const response = await apiClient.post("/posts",{title,content});
    console.log("Post created:",response.data);
    setContent("");
    setTitle("");
    Alert.alert("Success","Post created successfully");
  } catch (error) {
    Alert.alert("Error","Failed to submit post" )
  }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );


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
