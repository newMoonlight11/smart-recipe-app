import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, typography } from "../../themes";

interface IngredientChipProps {
  confidence?: number;
  filled?: boolean;
  label: string;
  onPress?: () => void;
  onRemove?: () => void;
  removable?: boolean;
  selected?: boolean;
}

export default function IngredientChip({
  confidence,
  label,
  filled = false,
  onPress,
  onRemove,
  removable = false,
  selected = false,
}: IngredientChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.chip,
        selected && styles.selectedChip,
        filled && styles.filledChip,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.label, selected && styles.selectedLabel]}>
        {label}
      </Text>
      {confidence && (
        <View style={styles.confidenceBadge}>
          <Text style={styles.confidenceText}>{confidence}%</Text>
        </View>
      )}
      {removable && (
        <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
          <Ionicons
            name="close"
            size={14}
            color={selected ? colors.white : colors.textSecondary}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  confidenceBadge: {
    marginLeft: spacing.sm,
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  confidenceText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "700",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.cream,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  filledChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    color: colors.primaryDark,
    fontSize: typography.caption,
    fontWeight: "600",
  },
  removeButton: {
    marginLeft: spacing.xs,
  },
  selectedChip: {
    backgroundColor: "rgba(255,255,255,0.16)",
    borderColor: "rgba(255,255,255,0.24)",
  },
  selectedLabel: {
    color: colors.white,
  },
});
