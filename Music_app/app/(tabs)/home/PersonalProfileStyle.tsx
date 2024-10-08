import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  //
  containerProfile: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 10,
  },

  userName: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  numberFollow: {
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.5,
  },

  containerFollow: {
    flexDirection: "row",
    gap: 20,
  },

  //

  containerAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 10,
  },
  buttonEdit: {
    backgroundColor: "",
    borderWidth: 1,
    width: 130,
    height: 40,
    borderRadius: 20,
    borderColor: "black",
  },

  containerCatagory: {
    alignItems: "center",
    //     borderWidth: 1,
  },

  buttonAction: {
    backgroundColor: "rgba(193, 144, 144, 0.3)",
    width: 180,
    height: 60,
    margin: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    gap: 10,
  },
  titleButtonCatagory: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitleButtonCatagory: {
    opacity: 0.5,
  },
});
