import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  headerPersonalInfo: {
    alignItems: "center",
    gap: 10,
  },

  buttonChangePic: {
    backgroundColor: "rgba(193, 144, 144, 0.2)",
    width: 200,
    height: 30,
    borderRadius: 15,
  },

  titleChangePic: {
    fontSize: 15,
    color: "black",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
  },

  introduce: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  account: {
    padding: 20,
  },

  containerInfor: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    gap: 10,
    marginTop: 10,
    backgroundColor: "rgba(193, 144, 144, 0.2)",
    borderRadius: 10,
  },

  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
