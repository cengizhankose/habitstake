import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";

interface HabitBlock {
  id: string;
  name: string;
  participants: number;
  stake: number;
}

const DiscoverHabitsScreen = () => {
  const habitBlocks: HabitBlock[] = [
    { id: "1", name: "30-Day Fitness Challenge", participants: 50, stake: 10 },
    { id: "2", name: "Daily Meditation", participants: 30, stake: 5 },
    { id: "3", name: "Learn a New Language", participants: 20, stake: 15 },
  ];

  const renderHabitBlock = ({ item }: { item: HabitBlock }) => (
    <View style={styles.habitBlock}>
      <Text style={styles.habitName}>{item.name}</Text>
      <Text>Participants: {item.participants}</Text>
      <Text>Stake: {item.stake} SOL</Text>
      <Button
        mode="outlined"
        onPress={() => console.log("Join habit:", item.id)}
      >
        Join
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Habit Blocks</Text>
      <FlatList
        data={habitBlocks}
        renderItem={renderHabitBlock}
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
  habitBlock: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  habitName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default DiscoverHabitsScreen;
