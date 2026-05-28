import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import { colors, radius, typography } from "../../themes";

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  title: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  disabled = false,
  loading = false,
  onPress,
  style,
  title,
  variant = "primary",
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
      disabled={disabled || loading}
      onPress={onPress}
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
        <Text style={[styles.baseText, getTextStyle()]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    height: 56,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: typography.body,
    fontWeight: "600",
  },
  disabledButton: {
    opacity: 0.5,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  outlineText: {
    color: colors.primary,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  primaryText: {
    color: colors.white,
  },
  secondaryButton: {
    backgroundColor: colors.primaryDark,
  },
  secondaryText: {
    color: colors.white,
  },
});
