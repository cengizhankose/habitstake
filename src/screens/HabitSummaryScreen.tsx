import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const HabitSummaryScreen = ({ navigation }: { navigation: any }) => {
  // In a real app, you'd get this data from the route params or fetch it based on an ID
  const habitData = {
    name: "Morning Meditation",
    completionRate: 80,
    tokensEarned: 100,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{habitData.name}</Text>
      <Text style={styles.stat}>
        Completion Rate: {habitData.completionRate}%
      </Text>
      <Text style={styles.stat}>Tokens Earned: {habitData.tokensEarned}</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("SubmitProof")}
        style={styles.button}
      >
        Submit Proof
      </Button>
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
  stat: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default HabitSummaryScreen;
