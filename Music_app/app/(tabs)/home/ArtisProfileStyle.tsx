import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 50,
  },
  containerArtist: {
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  avataArtist: {
    width: 150,
    height: 150,
  },
  nameArtist: {
    fontSize: 32,
    fontWeight: "bold",
  },
  containerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  buttonFollow: {
    backgroundColor: "",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 100,
  },
  containerAction: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  containerCategory: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
  },
  titleCategory: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
