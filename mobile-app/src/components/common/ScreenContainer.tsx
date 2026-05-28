import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ViewStyle } from "react-native";
import { colors, spacing } from "../../themes";

interface ScreenContainerProps {
  children: ReactNode;
  padded?: boolean;
  scrollable?: boolean;
  style?: ViewStyle;
}

export default function ScreenContainer({
  children,
  padded = true,
  style,
}: ScreenContainerProps) {
  return (
    <SafeAreaView style={[styles.container, padded && styles.padded, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  padded: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
});
