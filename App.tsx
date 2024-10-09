// Polyfills
import "./src/polyfills";

import "react-native-url-polyfill/auto";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./src/lib/supabase";
import Auth from "./src/components/Auth";

import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ConnectionProvider } from "./src/utils/ConnectionProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
import { ClusterProvider } from "./src/components/cluster/cluster-data-access";
import { AppNavigator } from "./src/navigation/AppNavigator";

// Add this import for custom colors
import {
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperLightTheme,
} from "react-native-paper";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

export const customColors = {
  primary: "#3C2874",
  primaryContainer: "#3C2874",
  secondary: "#32BE8F",
  onSecondary: "#000000",
  secondaryContainer: "#32BE8F",
  tertiary: "#18916C",
  tertiaryContainer: "#18916C",
  surface: "#1E1537",
  onSurface: "#F3F1FA",
  surfaceVariant: "#1E1537",
  surfaceDisabled: "#1E1537",
  onPrimary: "#F3F1FA",
  onPrimaryContainer: "#F3F1FA",
  background: "#000000",
  outline: "#000",
  text: "#FFFFFF",
  onSurfaceVariant: "#DCE0E1",
  placeholder: "#F3F1FA",
  accent: "#4285F4",
};

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...PaperLightTheme,
    ...LightTheme,
    colors: {
      ...PaperLightTheme.colors,
      ...LightTheme.colors,
    },
  };

  const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...DarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...DarkTheme.colors,
      ...customColors,
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ClusterProvider>
        <ConnectionProvider config={{ commitment: "processed" }}>
          <SafeAreaView
            style={[
              styles.shell,
              {
                backgroundColor: customColors.background,
              },
              // {
              //   backgroundColor:
              //     colorScheme === "dark"
              //       ? MD3DarkTheme.colors.background
              //       : MD3LightTheme.colors.background,
              // },
            ]}
          >
            <PaperProvider
              // theme={
              //   colorScheme === "dark"
              //     ? CombinedDarkTheme
              //     : CombinedDefaultTheme
              // }
              theme={CombinedDarkTheme}
            >
              <AppNavigator session={session} />
            </PaperProvider>
          </SafeAreaView>
        </ConnectionProvider>
      </ClusterProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
});
