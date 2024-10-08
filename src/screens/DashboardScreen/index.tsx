import React from "react";
import { View, FlatList } from "react-native";
import {
  Text,
  useTheme,
  Avatar,
  ProgressBar,
  Button,
  IconButton,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { createStyles } from "./style";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { IconProps } from "react-native-paper/lib/typescript/components/MaterialCommunityIcon";

interface Habit {
  id: string;
  name: string;
  category: string;
  progress: number;
  icon: string;
  color: string;
  completedSessions: number;
  totalSessions: number;
}

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const habits: Habit[] = [
    {
      id: "1",
      name: "Gym 3 times a week",
      category: "Fitness",
      progress: 0.66,
      icon: "dumbbell",
      color: "#6C5CE7",
      completedSessions: 2,
      totalSessions: 3,
    },
    {
      id: "2",
      name: "Read 20 pages daily",
      category: "Reading",
      progress: 0.45,
      icon: "book-open-variant",
      color: "#FF7675",
      completedSessions: 9,
      totalSessions: 20,
    },
  ];

  const renderHabitItem = ({ item }: { item: Habit }) => (
    <View style={styles.habitItem}>
      <View style={styles.habitHeader}>
        <View
          style={[styles.habitIconContainer, { backgroundColor: item.color }]}
        >
          <MaterialCommunityIcon
            name={item.icon as any}
            size={24}
            color="#FFFFFF"
          />
        </View>
        <Text style={styles.habitName}>{item.name}</Text>
        <IconButton
          icon="dots-vertical"
          iconColor="#FFFFFF"
          size={20}
          onPress={() => {}}
        />
      </View>
      <Text style={styles.habitCategory}>{item.category}</Text>
      <View style={styles.habitProgressContainer}>
        <ProgressBar
          progress={item.progress}
          style={styles.habitProgressBar}
          color={item.color}
        />
        <Text style={styles.habitProgressText}>{`${Math.round(
          item.progress * 100
        )}%`}</Text>
      </View>
      <Text style={styles.habitSessions}>
        {`${item.completedSessions} out of ${item.totalSessions} sessions completed`}
      </Text>
    </View>
  );

  const renderInviteItem = ({
    name,
    avatar,
  }: {
    name: string;
    avatar: string;
  }) => (
    <View style={styles.inviteItem}>
      <View style={styles.inviteUser}>
        <Avatar.Text size={40} label={avatar} />
        <Text style={styles.inviteUserName}>{name}</Text>
      </View>
      <Button mode="contained" style={styles.inviteButton} onPress={() => {}}>
        Invite
      </Button>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={habits}
          renderItem={renderHabitItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => (
            <View style={styles.inviteSection}>
              <Text style={styles.inviteTitle}>Habit Details</Text>
              {renderInviteItem({ name: "John Doe", avatar: "JD" })}
              {renderInviteItem({ name: "Jane Smith", avatar: "JS" })}
            </View>
          )}
        />
      </View>
      <IconButton
        icon="plus"
        size={24}
        onPress={() => navigation.navigate("CreateHabit")}
        style={styles.addButton}
        iconColor="#000"
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;
