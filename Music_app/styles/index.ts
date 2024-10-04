import { colors, fontSize } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: fontSize.base,
    color: colors.text,
  },
});

export const utilsStyles = StyleSheet.create({
  centeredRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    height: 7,
    borderRadius: 16,
  },
  itemSeparator: {
    borderColor: colors.textMuted,
    borderWidth: StyleSheet.hairlineWidth,
    opacity: 0.3,
  },
  emptyContentText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: 20,
  },
  emptyContentImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 40,
    opacity: 0.3,
  },
  ModalTrack: {
    position: "absolute",
    bottom: 80, // Căn chỉnh bên trên tab bar (điều chỉnh nếu cần)
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#fff", // Hoặc màu bạn muốn cho thanh
    padding: 15, // Khoảng cách bên trong cho nội dung
    // borderRadius: 10, // Tạo bo góc
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Đổ bóng cho Android
    height: 70, // Chiều cao của thanh
    borderTopWidth: 1, // Đường viền trên
  },
});
