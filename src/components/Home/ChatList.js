import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Avatar, Badge } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import faker from "faker";
import { withNavigation } from "react-navigation";

import { formatTime } from "../../utils";

const ChatList = ({ navigation }) => {
  const renderChats = num => {
    const chatList = [];
    while (num--) {
      chatList.push({
        name: faker.name.findName(),
        image: faker.image.avatar(),
        text: faker.lorem.sentence(),
        time: formatTime(faker.date.recent()),
        isActive: Math.floor(Math.random() * 2),
        readReceipt: Math.floor(Math.random() * 4)
      });
    }

    return (
      <FlatList
        data={chatList}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Chat", {
                image: item.image,
                name: item.name,
                isActive: item.isActive,
                lastSeen: item.time
              })
            }
            activeOpacity={0.4}
          >
            <View style={style.chatContainerStyle}>
              <View style={{ marginRight: 10 }}>
                <Avatar
                  rounded
                  source={{
                    uri: item.image
                  }}
                  size={50}
                />
                <Badge
                  badgeStyle={{
                    backgroundColor: item.isActive ? "#7e95f7" : "#eaeaea"
                  }}
                  containerStyle={{
                    position: "absolute",
                    top: -4,
                    right: -4
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <View style={style.flexRowStyle}>
                  <Text style={style.headerStyle} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={style.timeStyle}>{item.time}</Text>
                </View>
                <View style={style.flexRowStyle}>
                  <Text style={style.subHeaderStyle} numberOfLines={1}>
                    {item.text}
                  </Text>
                  <MaterialCommunityIcons
                    name={
                      item.readReceipt
                        ? item.readReceipt > 1
                          ? "check-all"
                          : "check"
                        : "timer-sand"
                    }
                    size={15}
                    color={item.readReceipt === 3 ? "#7e95f7" : "#999999"}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <View style={style.containerStyle}>
      <Text style={style.headerTextStyle}>Chats</Text>
      {renderChats(10)}
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    marginTop: 10,
    marginRight: 10,
    flex: 1
  },
  headerTextStyle: {
    fontFamily: "Mark-Bold",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "left",
    marginLeft: 20,
    color: "#7e95f7"
  },
  chatContainerStyle: {
    flexDirection: "row",
    marginVertical: 15,
    marginLeft: 20,
    marginRight: 10,
    alignItems: "center"
  },
  headerStyle: {
    fontFamily: "Mark-Regular",
    fontSize: 18,
    marginBottom: 5,
    marginRight: 10,
    flex: 1
  },
  subHeaderStyle: {
    fontFamily: "Mark-Regular",
    fontSize: 16,
    color: "#999999",
    marginRight: 10,
    flex: 1
  },
  timeStyle: {
    fontFamily: "Mark-Light",
    fontSize: 12,
    color: "#999999"
  },
  flexRowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default withNavigation(ChatList);
