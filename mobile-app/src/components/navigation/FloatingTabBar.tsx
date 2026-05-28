import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius, shadows } from "../../themes";

export default function FloatingTabBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="home" size={24} color={colors.primaryDark} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={24} color={colors.textSecondary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.scanButton}>
        <Ionicons name="scan" size={28} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="person-outline"
          size={24}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    left: 20,
    right: 20,
    height: 78,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: radius.full,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    ...shadows.card,
  },
  scanButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -26,
  },
});
