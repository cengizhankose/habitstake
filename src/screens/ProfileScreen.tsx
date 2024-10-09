import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, Button, List, useTheme, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const theme = useTheme();

  const userProfile = {
    name: "John Doe",
    username: "@john_doe",
    bio: "Fitness enthusiast and Web3 advocate. Love to track my habits and stay motivated with friends.",
    followers: "1.5K",
    following: "300",
    posts: "75",
  };

  const nftGallery = [
    { id: "1", uri: "https://dummyjson.com/icon/abc123/150" },
    { id: "2", uri: "https://dummyjson.com/icon/abc123/150" },
    { id: "3", uri: "https://dummyjson.com/icon/abc123/150" },
    { id: "4", uri: "https://dummyjson.com/icon/abc123/150" },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView>
        <View style={styles.header}>
          <Avatar.Image
            size={80}
            source={{ uri: "https://dummyjson.com/icon/abc123/150" }}
          />
          <View style={styles.userInfo}>
            <Text style={[styles.name, { color: theme.colors.onBackground }]}>
              {userProfile.name}
            </Text>
            <Text
              style={[
                styles.username,
                { color: theme.colors.onSurfaceVariant },
              ]}
            >
              {userProfile.username}
            </Text>
          </View>
          <Text style={[styles.bio, { color: theme.colors.onSurfaceVariant }]}>
            {userProfile.bio}
          </Text>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text
                style={[styles.statValue, { color: theme.colors.onBackground }]}
              >
                {userProfile.followers}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                Followers
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text
                style={[styles.statValue, { color: theme.colors.onBackground }]}
              >
                {userProfile.following}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                Following
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text
                style={[styles.statValue, { color: theme.colors.onBackground }]}
              >
                {userProfile.posts}
              </Text>
              <Text
                style={[
                  styles.statLabel,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                Posts
              </Text>
            </View>
          </View>
          <Button mode="contained" style={styles.followButton}>
            Follow
          </Button>
        </View>

        <View style={styles.habitStats}>
          <Button mode="outlined" style={styles.habitButton}>
            Total Habits
          </Button>
          <Button mode="outlined" style={styles.habitButton}>
            Completed
          </Button>
          <Button mode="outlined" style={styles.habitButton}>
            Success Rate
          </Button>
          <Button mode="outlined" style={styles.habitButton}>
            Weekly...
          </Button>
        </View>

        <List.Section>
          <List.Subheader style={{ color: theme.colors.onBackground }}>
            Profile Settings
          </List.Subheader>
          <List.Item
            title="Notifications"
            description="Manage your notification preferences"
            left={(props) => <List.Icon {...props} icon="bell" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        </List.Section>

        <List.Section>
          <List.Subheader style={{ color: theme.colors.onBackground }}>
            Account
          </List.Subheader>
          <List.Item
            title="Change Password"
            left={(props) => <List.Icon {...props} icon="lock" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="Privacy Settings"
            left={(props) => <List.Icon {...props} icon="shield-account" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="Language"
            left={(props) => <List.Icon {...props} icon="translate" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        </List.Section>

        <List.Section>
          <List.Subheader style={{ color: theme.colors.onBackground }}>
            NFT Gallery
          </List.Subheader>
          <View style={styles.nftGallery}>
            {nftGallery.map((nft) => (
              <Image
                key={nft.id}
                source={{ uri: nft.uri }}
                style={styles.nftImage}
              />
            ))}
          </View>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    alignItems: "center",
  },
  userInfo: {
    alignItems: "center",
    marginTop: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    fontSize: 16,
  },
  bio: {
    textAlign: "center",
    marginTop: 8,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
  },
  followButton: {
    marginTop: 16,
  },
  habitStats: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  habitButton: {
    width: "48%",
    marginBottom: 8,
  },
  nftGallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  nftImage: {
    backgroundColor: "red",
    width: "48%",
    height: "48%",
    aspectRatio: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default ProfileScreen;
