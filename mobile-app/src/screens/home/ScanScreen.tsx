import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ScreenContainer from "../../components/common/ScreenContainer";
import IngredientChip from "../../components/ingredient/IngredientChip";
import Button from "../../components/common/Button";
import { colors, spacing, radius, typography, shadows } from "../../themes";

export default function ScanScreen() {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scan ingredients</Text>
      </View>
      <View style={styles.previewWrapper}>
        <ImageBackground
          source={require("../../assets/images/ingredients.webp")}
          style={styles.preview}
          imageStyle={styles.previewImage}
        >
          <View style={styles.overlay} />
          <View style={styles.topChips}>
            <IngredientChip label="Pepper" selected />
            <IngredientChip label="Onion" selected />
            <IngredientChip label="Potato" selected />
          </View>
          <View style={styles.centerContent}>
            <View style={styles.scanFrame}>
              <Text style={styles.heroTitle}>
                Your next meal starts with a photo.
              </Text>
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />
            </View>
            <Button
              title="Take photo"
              onPress={() => {}}
              style={styles.captureButton}
              variant="secondary"
            />
          </View>
        </ImageBackground>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 24,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 24,
  },
  button: {
    marginBottom: spacing.xl,
  },
  captureButton: {
    position: "absolute",
    bottom: spacing.xl,
    width: "95%",
  },
  centerContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.xl,
  },
  container: {
    paddingBottom: spacing.xl,
  },
  corner: {
    position: "absolute",
    width: 42,
    height: 42,
    borderColor: "rgba(255,255,255,0.95)",
  },
  header: {
    marginBottom: spacing.md,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
    lineHeight: 40,
    paddingHorizontal: spacing.lg,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.38)",
  },
  preview: {
    width: "100%",
    height: 620,
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage: {
    borderRadius: radius.lg,
  },
  previewWrapper: {
    marginBottom: spacing.xl,
    borderRadius: radius.lg,
    overflow: "hidden",
    ...shadows.card,
  },
  scanFrame: {
    width: 260,
    height: 380,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: typography.titleLarge,
    fontWeight: "700",
    color: colors.primaryDark,
    textAlign: "center",
  },
  topChips: {
    position: "absolute",
    marginHorizontal: spacing.lg,
    top: spacing.xl,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 24,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 24,
  },
});
