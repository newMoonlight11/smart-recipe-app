import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, typography } from "../../themes";

interface CategoryCardProps {
  active?: boolean;
  icon: any;
  label: string;
}

export default function CategoryCard({
  active = false,
  icon,
  label,
}: CategoryCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.card, active && styles.activeCard]}
    >
      <View
        style={[styles.iconContainer, active && styles.activeIconContainer]}
      >
        <Ionicons
          name={icon}
          size={24}
          color={active ? colors.primaryDark : colors.primary}
        />
      </View>
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  activeCard: {
    backgroundColor: colors.cream,
  },
  activeIconContainer: {
    backgroundColor: "rgba(109,170,99,0.15)",
  },
  activeLabel: {
    color: colors.primaryDark,
  },
  card: {
    width: 92,
    height: 108,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: typography.caption,
    color: colors.textPrimary,
    fontWeight: "600",
  },
});
