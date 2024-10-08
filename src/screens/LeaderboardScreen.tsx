import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

interface LeaderboardEntry {
  id: string;
  username: string;
  score: number;
  rank: number;
}

const LeaderboardScreen = () => {
  const leaderboardData: LeaderboardEntry[] = [
    { id: "1", username: "user1", score: 1000, rank: 1 },
    { id: "2", username: "user2", score: 950, rank: 2 },
    { id: "3", username: "user3", score: 900, rank: 3 },
    // Add more entries as needed
  ];

  const renderLeaderboardItem = ({ item }: { item: LeaderboardEntry }) => (
    <View style={styles.leaderboardItem}>
      <Text style={styles.rank}>{item.rank}</Text>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        renderItem={renderLeaderboardItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  leaderboardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rank: {
    fontSize: 18,
    fontWeight: "bold",
    width: 30,
  },
  username: {
    fontSize: 16,
    flex: 1,
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LeaderboardScreen;
