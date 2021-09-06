import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const JoinScreen = (props) => {
  function _doLogin() {
    // do something
    props.navigation.replace("TabNavigator");
  }

  function _checkJoin() {
    Alert.alert(
      "Welcome!",
      "Hello",
      [
        { text: "ok", onPress: _doLogin.bind(this) },
        { text: "cancel", onPress: () => null },
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>GPS APP</Text>
      </View>
      <View style={styles.formArea}>
        <TextInput style={styles.textForm} placeholder={"ID"} />
        <TextInput style={styles.textForm} placeholder={"Password"} />
        <TextInput style={styles.textForm} placeholder={"Check Password"} />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={_checkJoin.bind(this)}>
          <Text style={styles.buttonTitle}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: wp("10%"),
    paddingRight: wp("10%"),
    justifyContent: "center",
    paddingBottom: 100,
  },
  titleArea: {
    width: "100%",
    padding: wp("10%"),
    alignItems: "center",
  },
  title: {
    fontSize: wp("10%"),
  },
  formArea: {
    width: "100%",
    paddingBottom: wp("10%"),
  },
  textForm: {
    borderWidth: 0.5,
    borderColor: "#888",
    width: "100%",
    height: hp("5%"),
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  buttonArea: {
    width: "100%",
    height: hp("5%"),
  },
  button: {
    backgroundColor: "#46c3ad",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  buttonTitle: {
    color: "white",
  },
});

export default JoinScreen;