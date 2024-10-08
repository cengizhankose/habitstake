import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: 16,
    },

    habitItem: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
    },
    habitHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    habitIconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    habitName: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FFFFFF",
      flex: 1,
      marginLeft: 12,
    },
    habitCategory: {
      fontSize: 12,
      color: "#8E8E93",
      marginBottom: 8,
    },
    habitProgressContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    habitProgressBar: {
      flex: 1,
      height: 4,
      borderRadius: 2,
    },
    habitProgressText: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginLeft: 8,
    },

    habitSessions: {
      fontSize: 12,
      color: "#8E8E93",
      marginTop: 4,
    },

    inviteSection: {
      marginTop: 24,
    },
    inviteTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginBottom: 16,
    },
    inviteItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    inviteUser: {
      flexDirection: "row",
      alignItems: "center",
    },
    inviteUserName: {
      fontSize: 16,
      color: "#FFFFFF",
      marginLeft: 12,
    },
    inviteButton: {
      borderRadius: 20,
    },
    addButton: {
      position: "absolute",
      bottom: 16,
      right: 16,
      borderRadius: 6,
      backgroundColor: theme.colors.tertiary,
    },
  });
