import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, shadows, typography } from "../../themes";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={22} color={colors.textSecondary} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
      />
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={18} color={colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.white,
    borderRadius: radius.full,
    paddingHorizontal: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    ...shadows.card,
  },
   filterButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    marginLeft: spacing.md,
    fontSize: typography.body,
    color: colors.textPrimary,
  },
});
