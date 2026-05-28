import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, typography } from "../../themes";

interface InputProps extends TextInputProps {
  error?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  label?: string;
}

export default function Input({ error, icon, label, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, error && styles.inputError]}>
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={colors.textSecondary}
            style={styles.icon}
          />
        )}
        <TextInput
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  errorText: {
    marginTop: spacing.xs,
    color: colors.error,
    fontSize: typography.caption,
  },
  inputContainer: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
  },
  icon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: typography.body,
    color: colors.textPrimary,
  },
  inputError: {
    borderColor: colors.error,
  },
  label: {
    marginBottom: spacing.sm,
    fontSize: typography.caption,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});
