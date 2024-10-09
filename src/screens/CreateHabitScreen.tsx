import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  TextInput,
  Button,
  Checkbox,
  Text,
  Menu,
  useTheme,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CreateHabitScreenProps = {
  navigation: NativeStackNavigationProp<any, any>;
};

const CreateHabitScreen: React.FC<CreateHabitScreenProps> = ({
  navigation,
}) => {
  const theme = useTheme();
  const [habitTitle, setHabitTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");
  const [showFrequencyMenu, setShowFrequencyMenu] = useState(false);
  const [lockSOL, setLockSOL] = useState(false);
  const [solAmount, setSOLAmount] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Create Habit Block",
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTintColor: theme.colors.onBackground,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    });
  }, [navigation, theme]);

  const handleCreateHabit = () => {
    // Implement habit creation logic here
    console.log("Creating habit:", {
      habitTitle,
      description,
      frequency,
      lockSOL,
      solAmount,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onBackground, marginTop: 0 },
            ]}
          >
            Habit Title
          </Text>
          <TextInput
            label="Habit Title"
            value={habitTitle}
            onChangeText={setHabitTitle}
            style={styles.input}
          />
          <Text
            style={[styles.sectionTitle, { color: theme.colors.onBackground }]}
          >
            Proof of Work
          </Text>
          <TextInput
            label="Habit Description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            style={styles.input}
          />

          <Text
            style={[styles.sectionTitle, { color: theme.colors.onBackground }]}
          >
            Frequency
          </Text>
          <Menu
            visible={showFrequencyMenu}
            onDismiss={() => setShowFrequencyMenu(false)}
            anchor={
              <Button
                onPress={() => setShowFrequencyMenu(true)}
                mode="outlined"
                style={[
                  styles.input,
                  { backgroundColor: theme.colors.surface },
                ]}
                textColor={theme.colors.onSurface}
              >
                {frequency || "Daily, Weekly, Custom"}
              </Button>
            }
          >
            <Menu.Item
              onPress={() => {
                setFrequency("Daily");
                setShowFrequencyMenu(false);
              }}
              title="Daily"
            />
            <Menu.Item
              onPress={() => {
                setFrequency("Weekly");
                setShowFrequencyMenu(false);
              }}
              title="Weekly"
            />
            <Menu.Item
              onPress={() => {
                setFrequency("Custom");
                setShowFrequencyMenu(false);
              }}
              title="Custom"
            />
          </Menu>

          <Text
            style={[styles.sectionTitle, { color: theme.colors.onBackground }]}
          >
            Proof of Work
          </Text>
          <Text
            style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            Optionally add an image or text as proof to validate logs
          </Text>
          <View style={styles.proofButtons}>
            <Button icon="upload" mode="contained" style={styles.proofButton}>
              Image Upload
            </Button>
            <Button icon="camera" mode="contained" style={styles.proofButton}>
              Take Photo
            </Button>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={lockSOL ? "checked" : "unchecked"}
              onPress={() => setLockSOL(!lockSOL)}
            />
            <Text style={{ color: theme.colors.onBackground }}>
              Lock SOL for this habit
            </Text>
          </View>
          {lockSOL && (
            <TextInput
              label="SOL Amount"
              value={solAmount}
              onChangeText={setSOLAmount}
              keyboardType="numeric"
              style={styles.input}
            />
          )}

          <Text
            style={[styles.sectionTitle, { color: theme.colors.onBackground }]}
          >
            Invite Friends
          </Text>
          <Text
            style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            Add friends to this habit block
          </Text>
          <View style={styles.friendButtons}>
            <Button mode="contained" style={styles.friendButton}>
              Add
            </Button>
            <Button mode="outlined" style={styles.friendButton}>
              Remove
            </Button>
          </View>

          <Text
            style={[styles.sectionTitle, { color: theme.colors.onBackground }]}
          >
            Summary
          </Text>
          <Text
            style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            Brief summary of the habit block showing title, description,
            frequency, proof requirement, SOL lock status, and invited friends
          </Text>

          <Button
            mode="contained"
            onPress={handleCreateHabit}
            textColor={theme.colors.onSecondary}
            style={[
              styles.createButton,
              {
                backgroundColor: theme.colors.secondary,
              },
            ]}
          >
            Create Habit Block
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
    borderBottomWidth: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  proofButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  proofButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  friendButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  friendButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  createButton: {
    marginTop: 20,
  },
});

export default CreateHabitScreen;
