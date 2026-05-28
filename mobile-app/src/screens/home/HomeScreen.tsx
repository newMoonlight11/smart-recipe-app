import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenContainer from "../../components/common/ScreenContainer";
import SearchBar from "../../components/home/SearchBar";
import CategoryCard from "../../components/home/CategoryCard";
import RecipeCard from "../../components/recipe/RecipeCard";
import FloatingTabBar from "../../components/navigation/FloatingTabBar";
import { colors, spacing, typography } from "../../themes";

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <ScreenContainer style={styles.container} padded={false}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <View style={styles.userContainer}>
              <View>
                <Text style={styles.greeting}>
                  Good evening,
                  <Text style={styles.username}> Camila</Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={colors.textPrimary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>
              What would you like to cook today?
            </Text>
          </View>
          <SearchBar placeholder="Search " />
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Categories</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesContainer}
            >
              <CategoryCard icon="leaf-outline" label="Healthy" active />
              <CategoryCard icon="cafe-outline" label="Breakfast" />
              <CategoryCard icon="pizza-outline" label="Italian" />
              <CategoryCard icon="ice-cream-outline" label="Dessert" />
              <CategoryCard icon="restaurant-outline" label="Dinner" />
            </ScrollView>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recommended for you</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recipesContainer}
            >
              <View style={styles.recipeCardWrapper}>
                <RecipeCard
                  title="Creamy Garlic Pasta with Herbs"
                  image={require("../../assets/images/garlic_pasta.webp")}
                  time="25 min"
                  difficulty="Easy"
                  category="Italian"
                  isFavorite
                />
              </View>
              <View style={styles.recipeCardWrapper}>
                <RecipeCard
                  title="Healthy Chicken Bowl"
                  image={require("../../assets/images/chicken-bowl.webp")}
                  time="35 min"
                  difficulty="Medium"
                  category="Healthy"
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular this week</Text>
            </View>
            <RecipeCard
              title="Avocado Toast with Egg and Fresh Herbs"
              image={require("../../assets/images/avocado_toast.webp")}
              time="15 min"
              difficulty="Easy"
              category="Breakfast"
            />
            <RecipeCard
              title="Spicy Asian Noodles"
              image={require("../../assets/images/spicy_noodles.webp")}
              time="30 min"
              difficulty="Medium"
              category="Dinner"
            />
          </View>
          <View style={styles.bottomSpacing} />
        </ScrollView>
      </ScreenContainer>
      <FloatingTabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSpacing: {
    height: 120,
  },
  categoriesContainer: {
    paddingRight: spacing.lg,
  },
  container: {
    flex: 1,
  },
  greeting: {
    fontSize: typography.body,
    color: colors.textSecondary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.xl,
  },
  heroSection: {
    marginBottom: spacing.xl,
  },
  heroTitle: {
    fontSize: 38,
    fontWeight: "700",
    lineHeight: 46,
    color: colors.textPrimary,
    opacity: 0.7,
  },
  notificationButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  recipesContainer: {
    paddingRight: spacing.xl,
  },
  recipeCardWrapper: {
    width: 290,
    marginRight: spacing.lg,
  },
  section: {
    marginTop: spacing.xxl,
  },
  seeAll: {
    fontSize: typography.caption,
    color: colors.primary,
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.title,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: typography.subtitle,
    fontWeight: "600",
    color: colors.primary,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
