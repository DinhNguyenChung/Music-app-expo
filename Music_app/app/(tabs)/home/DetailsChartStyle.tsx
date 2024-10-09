import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerRenderItem: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
  },
  imageRender: {
    width: 65,
    height: 65,
    borderRadius: 5,
    marginRight: 10,
  },
  detailsSong: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-between",
    width: 100,
  },

  containerCharts: {
    flex: 1,
    backgroundColor: "white",
  },
  detailsChart: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  titleChart: {
    fontSize: 25,
    fontWeight: "bold",
  },
  containerDetailsChart: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  containerAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    paddingTop: -10,
  },
  touchAction: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});
