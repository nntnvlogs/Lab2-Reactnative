import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>LOGIN</Text>
      <View style={styles.item}>
        <FontAwesome
          name="user"
          size={25}
          color={"black"}
          style={styles.icon}
        />
        <TextInput
          placeholder="Name"
          placeholderTextColor={"black"}
          style={styles.inputName}
        ></TextInput>
      </View>
      <View style={styles.item}>
        <FontAwesome
          name="lock"
          size={25}
          color={"black"}
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"black"}
          secureTextEntry
          style={styles.inputPass}
        ></TextInput>
        <FontAwesome
          name="eye"
          size={25}
          color={"black"}
          style={styles.iconRight}
        />
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnForgot}>
        <Text style={styles.txtForgot}>Forgot your password?</Text>
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
    backgroundColor: "#FBCB00",
  },
  txtHeader: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 60,
    marginLeft: 10,
  },
  item: {
    flexDirection: "row",
    width: "86%",
    borderWidth: 1,
    marginBottom: 20,
    borderColor: "#fff",
    justifyContent: "center",
  },
  inputName: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 40,
  },
  inputPass: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    padding: 10,
  },
  iconRight: {
    padding: 10,
  },
  btnLogin: {
    width: "86%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 30,
    borderRadius: 4,
  },
  txtLogin: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  btnForgot: {
    width: "85%",
    alignItems: "center",
    marginTop: 40,
  },
  txtForgot: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LoginScreen;
