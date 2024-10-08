import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

const CreateHabitScreen = ({ navigation }: { navigation: any }) => {
  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateHabit = () => {
    // Implement habit creation logic here
    console.log("Creating habit:", habitName, description);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Habit Name"
        value={habitName}
        onChangeText={setHabitName}
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleCreateHabit}
        style={styles.button}
      >
        Create Habit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});

export default CreateHabitScreen;
