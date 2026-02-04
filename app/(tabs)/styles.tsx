import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  separator: {
    marginVertical: 30,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1b75d0",
    color: "#fff",
  },
  headerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  headerText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  },
});

export const Colors = {
  white: "#FFFFFF",
  lighter: "#F3F3F3",
  light: "#DAE1E7",
  dark: "#444444",
  darker: "#222222",
  black: "#000000",
};
