import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { supabase } from "../lib/supabase";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    console.log("🚀 ~ LoginScreen ~ email:", email);
    console.log("🚀 ~ LoginScreen ~ password:", password);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log("🚀 ~ signInWithEmail ~ error:", error);
      Alert.alert("Error", error.message);
    } else {
      navigation.navigate("CreateHabit");
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Error", error.message);
    } else if (!session) {
      Alert.alert("Success", "Please check your inbox for email verification!");
    } else {
      navigation.navigate("CreateHabit");
    }
    setLoading(false);
  }

  const handleWalletLogin = () => {
    // Implement wallet login logic here
    console.log("Login with wallet");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="email@address.com"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
      />
      <Button
        mode="contained"
        onPress={signInWithEmail}
        style={styles.button}
        disabled={loading}
      >
        Sign In
      </Button>
      <Button
        mode="outlined"
        onPress={signUpWithEmail}
        style={styles.button}
        disabled={loading}
      >
        Sign Up
      </Button>
      <Button
        mode="outlined"
        onPress={handleWalletLogin}
        style={styles.button}
        disabled={loading}
      >
        Login with Wallet
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default LoginScreen;
