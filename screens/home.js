import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", margin: 10 }}>
      <View>
        <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>
          This is Home Page
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Details");
            }}
            style={{
              marginRight: 10,
              justifyContent: "center",
              backgroundColor: "orange",
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Go to Details</Text>
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

export default Home;
