import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Screen2c = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.txtHeader}>PASSWORD {"\n"}GENERATOR</Text>
        <TextInput style={styles.btnNhap} />
        <View style={styles.passLength}>
          <Text style={styles.txtPasslength}>Password length</Text>
          <TextInput style={styles.passLengthtext} />
        </View>
        <View style={styles.passLength}>
          <Text style={styles.txtPasslength}>Include lower case letters</Text>
          <TextInput style={styles.tickNote} />
        </View>
        <View style={styles.passLength}>
          <Text style={styles.txtPasslength}>Include upcase letters</Text>
          <TextInput style={styles.tickNote} />
        </View>
        <View style={styles.passLength}>
          <Text style={styles.txtPasslength}>Include number</Text>
          <TextInput style={styles.tickNote} />
        </View>
        <View style={styles.passLength}>
          <Text style={styles.txtPasslength}>Include special symbol</Text>
          <TextInput style={styles.tickNote} />
        </View>
        <TouchableOpacity
          style={{
            width: "70%",
            backgroundColor: "#3B3B98",
            justifyContent: "center",
            alignItems: "center",
            padding: 6,
            marginTop: 26,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
            GENERATE PASSWORD
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screen2c;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#5A5AA4",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "90%",
    backgroundColor: "#23235B",
    alignItems: "center",
    borderRadius: 6,
  },
  txtHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 30,
  },
  btnNhap: {
    width: "80%",
    height: 40,
    backgroundColor: "#151537",
    marginTop: 50,
  },
  passLength: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  passLengthtext: {
    width: 90,
    height: 30,
    backgroundColor: "#fff",
  },
  txtPasslength: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  tickNote: {
    width: 30,
    height: 30,
    backgroundColor: "#fff",
  },
});
