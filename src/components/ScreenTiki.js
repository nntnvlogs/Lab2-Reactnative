import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenTiki = () => {
  const price = 141800;
  const [count, setCount] = useState(1);
  const Decrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };
  const Increase = () => {
    setCount((prev) => prev + 1);
  };
  const priceTotal = count * price;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/img/book.png")}
          style={styles.logoBook}
        />
        <View style={styles.bookBody}>
          <Text style={styles.txtBook}>
            Nguyên hàm tích phân và ứng dụng {"\n"}
            Cung cấp bởi Tiki Trading
          </Text>
          <Text style={styles.priceMoney}>{price.toLocaleString()} đ</Text>
          <Text style={styles.priceSale}>{price.toLocaleString()} đ</Text>
          <View style={styles.btnIndecrea}>
            <TouchableOpacity onPress={Decrease} style={{ marginRight: 8 }}>
              <Text style={styles.iconDecrease}>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={Increase} style={{ marginLeft: 8 }}>
              <Text style={styles.iconIncrease}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBuylater}>
              <Text style={styles.buyLater}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.voucher}>
        <View style={styles.itemOne}>
          <Text style={{ fontWeight: "bold", marginLeft: 14, fontSize: 14 }}>
            Mã giảm giá đã lưu
          </Text>
          <TouchableOpacity style={{ marginLeft: 14 }}>
            <Text style={{ color: "blue", fontWeight: "bold", fontSize: 14 }}>
              Xem tại đây
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemTwo}>
          <TouchableOpacity
            style={{
              width: "56.8%",
              height: 50,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 14,
              borderRadius: 2,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Mã giảm giá
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#1D5EB7",
              borderRadius: 4,
              width: "30%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              padding: 6,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          marginTop: 10,
          borderTopWidth: 16,
          borderBottomWidth: 16,
          borderColor: "#C4C4C4",
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <TouchableOpacity style={{ marginLeft: 6 }}>
          <Text style={{ color: "blue", fontWeight: "bold", fontSize: 12 }}>
            Nhập tại đây?
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          padding: 10,
          borderBottomWidth: 60,
          borderColor: "#C4C4C4",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tạm tính</Text>
        <Text
          style={{
            color: "red",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {priceTotal.toLocaleString()} đ
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#C4C4C4",
            marginLeft: 10,
          }}
        >
          Thành tiền
        </Text>
        <Text
          style={{
            color: "red",
            fontSize: 20,
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          {priceTotal.toLocaleString()} đ
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          padding: 14,
          marginTop: 10,
          borderRadius: 4,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          TIẾN HÀNH ĐẶT HÀNG
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScreenTiki;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    padding: 6,
    paddingTop: 14,
    paddingBottom: 14,
  },
  logoBook: {
    width: 120,
    resizeMode: "contain",
    marginLeft: 6,
  },
  bookBody: {
    marginLeft: 14,
    flex: 1,
  },
  txtBook: {
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 8,
  },
  priceMoney: {
    fontWeight: "bold",
    fontSize: 16,
    color: "red",
    marginBottom: 8,
  },
  priceSale: {
    textDecorationLine: "line-through",
    fontSize: 13,
    marginBottom: 8,
  },
  btnIndecrea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  iconDecrease: {
    backgroundColor: "pink",
    width: 16,
    textAlign: "center",
  },
  iconIncrease: {
    backgroundColor: "pink",
    width: 16,
    textAlign: "center",
  },
  btnBuylater: {
    marginLeft: "auto",
  },
  buyLater: {
    fontSize: 14,
    color: "blue",
    fontWeight: "bold",
  },
  voucher: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
  },
  itemOne: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  itemTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
