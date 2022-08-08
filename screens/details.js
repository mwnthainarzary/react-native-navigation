import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Details({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", margin: 10 }}>
      <View>
        <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>
          This is Details
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              marginRight: 10,
              justifyContent: "center",
              backgroundColor: "coral",
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Go to Home</Text>
          </TouchableOpacity>
          <Button
            title="Go to About"
            onPress={() => {
              navigation.navigate("About");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Details;
