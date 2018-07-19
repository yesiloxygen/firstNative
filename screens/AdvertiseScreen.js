import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from "expo";
export default class App extends React.Component {
  static navigationOptions = {
    title: 'Advertise',
  };
  componentDidMount() {
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    // ALWAYS USE TEST ID for Admob ads
    AdMobInterstitial.setAdUnitID("ca-app-pub-1425926517331745/1141181467");
    AdMobInterstitial.addEventListener("interstitialDidLoad", () =>
      console.log("interstitialDidLoad")
    );
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () =>
      console.log("interstitialDidFailToLoad")
    );
    AdMobInterstitial.addEventListener("interstitialDidOpen", () =>
      console.log("interstitialDidOpen")
    );
    AdMobInterstitial.addEventListener("interstitialDidClose", () =>
      console.log("interstitialDidClose")
    );
    AdMobInterstitial.addEventListener("interstitialWillLeaveApplication", () =>
      console.log("interstitialWillLeaveApplication")
    );
    AdMobRewarded.setTestDeviceID("EMULATOR");
    // ALWAYS USE TEST ID for Admob ads
    AdMobRewarded.setAdUnitID("ca-app-pub-4443845376824715/2320254234");
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () =>
      console.log("interstitialDidLoad")
    );
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", () =>
      console.log("interstitialDidLoad")
    );
    AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () =>
      console.log("interstitialDidLoad")
    );
    AdMobRewarded.addEventListener("rewardedVideoDidOpen", () =>
      console.log("interstitialDidLoad")
    );
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () =>
      console.log("interstitialDidLoad")
    );
    AdMobRewarded.addEventListener("rewardedVideoWillLeaveApplication", () =>
      console.log("interstitialDidLoad")
    );
  }

  componentWillUnmount() {
    AdMobInterstitial.removeAllListeners();
    AdMobRewarded.removeAllListeners();
  }

  bannerError() {
    console.log("An error");
    return;
  }

  showInterstitial = async () => {
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  };

  showRewarded = async () => {
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>This is ad screeen!</Text>
        <Button
          title="Interstitial"
          onPress={this.showInterstitial}
          containerViewStyle={styles.interstitialBanner}
        />
        <Button
          title="Rewarded"
          onPress={this.showRewarded}
          containerViewStyle={styles.rewardedBanner}
        />
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-4443845376824715/6547812853"
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="ca-app-pub-4443845376824715~8510781156"
          didFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rewardedBanner: {
    width: "100%",
    marginLeft: 0
  },
  interstitialBanner: {
    width: "100%",
    marginLeft: 0
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});