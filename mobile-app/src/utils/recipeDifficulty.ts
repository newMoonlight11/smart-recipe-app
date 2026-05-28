import { colors } from "../themes";

export const getDifficultyIcon = (
    difficulty: string
) => {
    switch (difficulty.toLowerCase()) {
        case "easy":
            return "leaf-outline";
        case "medium":
            return "restaurant-outline";
        case "hard":
            return "trophy-outline";
        default:
            return "ellipse-outline";
    }
};

export const getDifficultyColor = (
    difficulty: string
) => {
    switch (difficulty.toLowerCase()) {
        case "easy":
            return colors.success;
        case "medium":
            return colors.warning;
        case "hard":
            return colors.accent;
        default:
            return colors.textSecondary;
    }
};