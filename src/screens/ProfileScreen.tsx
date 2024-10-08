import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const userProfile = {
    username: "JohnDoe",
    email: "john@example.com",
    completedHabits: 10,
    tokensEarned: 500,
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.profileImage}
      />
      <Text style={styles.username}>{userProfile.username}</Text>
      <Text style={styles.email}>{userProfile.email}</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userProfile.completedHabits}</Text>
          <Text style={styles.statLabel}>Habits Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userProfile.tokensEarned}</Text>
          <Text style={styles.statLabel}>Tokens Earned</Text>
        </View>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Settings")}
        style={styles.button}
      >
        Settings
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    width: "80%",
  },
});

export default ProfileScreen;
