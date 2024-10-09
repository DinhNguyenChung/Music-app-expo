import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },

  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
  },

  renderImgSuggestion: {
    width: 225,
    height: 300,
    borderRadius: 10,
    marginRight: 20,
  },

  renderImg: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginRight: 20,
  },

  titleRender: {
    fontSize: 17,
    marginTop: 5,
    width: 140,
  },
  subTitleRender: {
    marginTop: 5,
    width: 140,
    opacity: 0.5,
  },

  containerRenderArtists: {
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
  },

  buttonFollow: {
    backgroundColor: "black",
    width: 80,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
  },

  textUserName: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 5,
  },

  containerSearch: {
    paddingLeft: -10,
    paddingRight: -10,
    paddingTop: 20,
    marginBottom: -10,
  },

  inputContainerSearch: {
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },

  titleCatagory: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  headerCatagory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 30,
  },

  textSeeAll: {
    opacity: 0.5,
    fontWeight: "bold",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalMenuContainer: {
    position: "absolute",
    right: 0,
    width: "80%",
    backgroundColor: "#fff",
    marginTop: 50,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    borderTopLeftRadius: 10,
    borderBottomStartRadius: 10,
  },

  //
  headerMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  usernameOnMenu: {
    fontSize: 25,
    fontWeight: "bold",
  },
  listAction: {
    gap: 5,
  },
  titleButtonMenu: {
    color: "black",
  },
  buttonActionMenu: {
    backgroundColor: "transparent",
    justifyContent: "center",
    gap: 10,
  },
  containerButtonMenu: {
    alignItems: "flex-start",
    // borderWidth: 1,
  },
});
