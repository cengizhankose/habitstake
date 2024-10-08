import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Text, useTheme } from "react-native-paper";
import { TopBarWalletButton, TopBarWalletMenu } from "./top-bar-ui";
import { useNavigation } from "@react-navigation/core";

export function TopBar() {
  const navigation = useNavigation();
  const theme = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        topBar: {
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          paddingHorizontal: 20,
        },
      }),
    [theme.colors.background]
  );

  return (
    <Appbar.Header mode="small" style={styles.topBar}>
      <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
        HabitStake
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TopBarWalletMenu />

        <Appbar.Action
          icon="cog"
          mode="contained-tonal"
          onPress={() => {
            navigation.navigate("Settings");
          }}
        />
      </View>
    </Appbar.Header>
  );
}
