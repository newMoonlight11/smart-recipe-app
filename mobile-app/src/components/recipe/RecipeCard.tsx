import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, typography, shadows } from "../../themes";
import {
  getDifficultyIcon,
  getDifficultyColor,
} from "../../utils/recipeDifficulty";
interface RecipeCardProps {
  category?: string;
  difficulty: string;
  image: any;
  isFavorite?: boolean;
  matchPercentage?: number;
  onPress?: () => void;
  time: string;
  title: string;
}

export default function RecipeCard({
  category,
  difficulty,
  image,
  isFavorite = false,
  matchPercentage,
  onPress,
  time,
  title,
}: RecipeCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.92}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        {category && (
          <View style={styles.categoryBadgeOverlay}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        )}
        {matchPercentage && (
          <View style={styles.matchBadgeOverlay}>
            <Text style={styles.matchText}>{matchPercentage}%</Text>
          </View>
        )}
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color={isFavorite ? colors.accent : colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons
              name="time-outline"
              size={16}
              color={colors.textSecondary}
            />
            <Text style={styles.metaText}>{time}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons
              name={getDifficultyIcon(difficulty) as any}
              size={16}
              color={getDifficultyColor(difficulty)}
            />
            <Text style={styles.metaText}>{difficulty}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  badgesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    overflow: "hidden",
    marginBottom: spacing.lg,
    ...shadows.card,
  },
  categoryBadgeOverlay: {
    position: "absolute",
    top: spacing.md,
    left: spacing.md,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  categoryText: {
    color: colors.white,
    fontSize: typography.caption,
    fontWeight: "600",
  },
  content: {
    padding: spacing.lg,
  },
  favoriteButton: {
    position: "absolute",
    bottom: spacing.md,
    right: spacing.md,
    width: 40,
    height: 40,
    borderRadius: radius.full,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 220,
  },
  imageContainer: {
    position: "relative",
  },
  matchBadgeOverlay: {
    position: "absolute",
    top: spacing.md,
    right: spacing.md,
    backgroundColor: colors.cream,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  matchText: {
    color: colors.primary,
    fontSize: typography.caption,
    fontWeight: "600",
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: spacing.lg,
  },
  metaText: {
    marginLeft: spacing.xs,
    color: colors.textSecondary,
    fontSize: typography.caption,
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.md,
    lineHeight: 28,
    minHeight: 56,
  },
});
