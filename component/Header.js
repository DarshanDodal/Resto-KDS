import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Header() {
  return (
    <View style={styles.Header}>
      <Image
        style={styles.logo}
        source={require("./../assets/BrandIcon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    height: hp("10%"),
    backgroundColor: "#e84e4e",
    justifyContent: "center",
    marginTop: 25,
  },
  logo: {
    height: hp("6%"),
    width: wp("9%"),
    justifyContent: "center",
    alignItems: "center",
    margin: wp("1%"),
  },
});
