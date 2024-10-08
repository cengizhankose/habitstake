import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SubmitProofScreen = ({ navigation }: { navigation: any }) => {
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const handleSubmitProof = () => {
    // Implement proof submission logic here
    console.log("Submitting proof:", description, imageUri);
    navigation.goBack();
  };

  const handleSelectImage = () => {
    // Implement image selection logic here
    console.log("Selecting image");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <Button mode="outlined" onPress={handleSelectImage} style={styles.button}>
        Select Image
      </Button>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button
        mode="contained"
        onPress={handleSubmitProof}
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
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 15,
  },
});

export default SubmitProofScreen;
