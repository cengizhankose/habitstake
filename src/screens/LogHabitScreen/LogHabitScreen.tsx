import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

type LogHabitScreenProps = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
};

const LogHabitScreen: React.FC<LogHabitScreenProps> = ({
  navigation,
  route,
}) => {
  const theme = useTheme();
  const { habitName } = route.params as { habitName: string };
  const [logEntry, setLogEntry] = useState("");
  const [proofImage, setProofImage] = useState<string | null>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Log ${habitName}`,
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTintColor: theme.colors.onBackground,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    });
  }, [navigation, theme, habitName]);

  const handleLogHabit = () => {
    // Implement habit logging logic here
    console.log("Logging habit:", {
      habitName,
      logEntry,
      proofImage,
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
            style={[styles.sectionTitle, { color: theme.colors.onBackground }]}
          >
            Log Entry
          </Text>
          <TextInput
            label="Describe your progress"
            value={logEntry}
            onChangeText={setLogEntry}
            multiline
            numberOfLines={4}
            style={styles.input}
          />

          <Text
            style={[styles.sectionTitle, { color: theme.colors.onBackground }]}
          >
            Proof of Work
          </Text>
          <Text
            style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            Add an image as proof to validate your log
          </Text>
          <View style={styles.proofButtons}>
            <Button
              icon="upload"
              mode="contained"
              style={styles.proofButton}
              onPress={() => {}}
            >
              Image Upload
            </Button>
            <Button
              icon="camera"
              mode="contained"
              style={styles.proofButton}
              onPress={() => {}}
            >
              Take Photo
            </Button>
          </View>

          {proofImage && (
            <Text
              style={[
                styles.subtitle,
                { color: theme.colors.onSurfaceVariant },
              ]}
            >
              Image uploaded successfully
            </Text>
          )}

          <Button
            mode="contained"
            onPress={handleLogHabit}
            style={[
              styles.logButton,
              { backgroundColor: theme.colors.secondary },
            ]}
          >
            Log Habit
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
  logButton: {
    marginTop: 20,
  },
});

export default LogHabitScreen;
