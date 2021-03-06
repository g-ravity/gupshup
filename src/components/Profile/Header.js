import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Feather } from "@expo/vector-icons";

import Header from "../Header";

const ProfileHeader = ({ navigation }) => {
  return (
    <Header>
      <View style={style.flexRowStyle}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Feather name="arrow-left" size={20} style={style.iconStyle} />
        </TouchableOpacity>
        <Text style={style.headerTextStyle}>Profile</Text>
      </View>
    </Header>
  );
};

const style = StyleSheet.create({
  flexRowStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconStyle: {
    color: "#ffffff"
  },
  headerTextStyle: {
    color: "#ffffff",
    fontFamily: "Mark-Bold",
    fontSize: 22,
    marginLeft: 15
  }
});

export default withNavigation(ProfileHeader);
