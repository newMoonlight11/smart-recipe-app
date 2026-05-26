import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from "react-native";

import {
  colors,
  spacing,
  radius,
  typography,
} from "../../themes";

interface ButtonProps {
  title: string;
  onPress: () => void;

  variant?: "primary" | "secondary" | "outline";

  loading?: boolean;
  disabled?: boolean;

  style?: ViewStyle;
}

export default function Button({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryButton;

      case "outline":
        return styles.outlineButton;

      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryText;

      case "outline":
        return styles.outlineText;

      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.baseButton,
        getButtonStyle(),
        disabled && styles.disabledButton,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={[styles.baseText, getTextStyle()]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    height: 56,

    borderRadius: radius.md,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: spacing.lg,
  },

  primaryButton: {
    backgroundColor: colors.primary,
  },

  secondaryButton: {
    backgroundColor: colors.cream,
  },

  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primary,
  },

  disabledButton: {
    opacity: 0.5,
  },

  baseText: {
    fontSize: typography.body,
    fontWeight: "600",
  },

  primaryText: {
    color: colors.white,
  },

  secondaryText: {
    color: colors.primary,
  },

  outlineText: {
    color: colors.primary,
  },
});