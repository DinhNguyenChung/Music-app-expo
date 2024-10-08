import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerLoginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  titleScreen: {
    width: 260,
    paddingTop: 200,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    padding: 10,
    borderColor: "white",
  },
  containerInputStyle: {
    width: "100%",
    marginBottom: -20,
  },
  titleOnInput: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  titleButtonStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  buttonStyle: {
    backgroundColor: "#3BE477",
    width: "100%",
    height: 50,
    borderRadius: 25,
  },

  footerText: {
    flexDirection: "row",
    justifyContent: "center",
  },

  textAsButton: {
    color: "white",
    fontWeight: "bold",
  },
});
