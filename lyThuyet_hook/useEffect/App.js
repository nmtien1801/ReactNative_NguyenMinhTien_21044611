import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
      console.log("data: ", data);
    } catch (error) {
      console.error("error get: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // // Hàm cập nhật bài viết
  // const updatePost = async (id) => {
  //   try {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //       method: 'PATCH', // Hoặc 'PUT'
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         title: 'Updated Title',
  //         body: 'This is the updated body content.',
  //       }),
  //     });

  //     if (response.ok) {
  //       const updatedPost = await response.json();
  //       // Cập nhật state với bài viết mới
  //       setData((prevData) => prevData.map((item) => (item.id === id ? updatedPost : item)));
  //       Alert.alert('Success', 'Post updated successfully!');
  //     }
  //   } catch (error) {
  //     console.error('Error updating post:', error);
  //   }
  // };

  // // Hàm xóa bài viết
  // const deletePost = async (id) => {
  //   try {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //       method: 'DELETE',
  //     });

  //     if (response.ok) {
  //       // Loại bỏ bài viết đã xóa khỏi state
  //       setData((prevData) => prevData.filter((item) => item.id !== id));
  //       Alert.alert('Success', 'Post deleted successfully!');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting post:', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
              {/* Nút để sửa bài viết */}
              <Button title="Edit" onPress={() => updatePost(item.id)} />
              {/* Nút để xóa bài viết */}
              <Button
                title="Delete"
                onPress={() => deletePost(item.id)}
                color="red"
              />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 50,
  },
});
