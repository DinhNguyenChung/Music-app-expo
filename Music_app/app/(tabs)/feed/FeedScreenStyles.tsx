import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  containerModalComment: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  containerComment: {
    backgroundColor: "white",
    padding: 20,
    maxHeight: "80%",
  },
  headerModalComment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalComment: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  containerRenderFeed: {
    margin: 20,
    overflow: "hidden",
    gap: 20,
  },
  containerHeaderPost: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentOnImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 20,
    height: 100,
  },
  avataComment: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  enterCommet: {
    height: 50,
    width: 230,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
  },
  inputComment: {
    marginBottom: -25,
    borderBottomWidth: 0,
  },
  containerEnterComment: {
    width: 300,
    paddingBottom: 20,
    paddingTop: 20,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
