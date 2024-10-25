import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Screen2b = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/img/usb.png")}
          style={styles.imgUsb}
        />
        <Text style={styles.txtUsb}>
          USB Bluetooth Music Receiver {"\n"}HJX-001-Biến loa thường thành loa
          {"\n"}
          bluetooh
        </Text>
      </View>
      <Text style={{ fontSize: 19, fontWeight: "bold", marginTop: 30 }}>
        Cực kỳ hài lòng
      </Text>
      <View style={styles.rateIcon}>
        <FontAwesome
          name="star"
          size={39}
          color={"#F2DD1B"}
          style={styles.icon}
        />
        <FontAwesome
          name="star"
          size={39}
          color={"#F2DD1B"}
          style={styles.icon}
        />
        <FontAwesome
          name="star"
          size={39}
          color={"#F2DD1B"}
          style={styles.icon}
        />
        <FontAwesome
          name="star"
          size={39}
          color={"#F2DD1B"}
          style={styles.icon}
        />
        <FontAwesome
          name="star"
          size={39}
          color={"#F2DD1B"}
          style={styles.icon}
        />
      </View>
      <View style={styles.upCamera}>
        <FontAwesome
          name="camera"
          size={39}
          color={"black"}
          style={styles.iconCamera}
        />
        <Text style={styles.txtImage}>Thêm hình ảnh</Text>
      </View>
      <TextInput
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        multiline={true}
        textAlignVertical="top"
        style={styles.textProduct}
      ></TextInput>
      <TouchableOpacity style={styles.btnGui}>
        <Text style={styles.txtGui}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
  },
  imgUsb: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginLeft: 20,
  },
  txtUsb: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  rateIcon: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    marginTop: 30,
  },
  icon: {
    marginLeft: 20,
  },
  upCamera: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "blue",
    padding: 14,
  },
  iconCamera: {
    marginRight: 10,
  },
  txtImage: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textProduct: {
    width: "80%",
    height: 200,
    borderWidth: 0.6,
    borderColor: "gray",
    marginTop: 10,
    borderRadius: 4,
    padding: 18,
  },
  btnGui: {
    width: "80%",
    backgroundColor: "#1C5DB6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 20,
  },
  txtGui: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 6,
  },
});

export default Screen2b;
