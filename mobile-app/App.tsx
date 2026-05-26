import { View, StyleSheet } from "react-native";

import Button from "./src/components/common/Button";

import {
  colors,
  spacing,
} from "./src/themes";

export default function App() {
  return (
    <View style={styles.container}>

      <Button
        title="Scan Ingredients"
        onPress={() => console.log("Pressed")}
      />

      <Button
        title="Favorites"
        variant="secondary"
        onPress={() => console.log("Pressed")}
        style={styles.spacing}
      />

      <Button
        title="Create Account"
        variant="outline"
        onPress={() => console.log("Pressed")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    backgroundColor: colors.background,

    padding: spacing.lg,
  },

  spacing: {
    marginVertical: spacing.md,
  },
});