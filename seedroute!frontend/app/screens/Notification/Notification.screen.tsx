import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Pressable, Platform } from "react-native";
import { faFaucetDrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Notificationss from "expo-notifications";
import Constants from "expo-constants";

interface homeScreenProps {
  navigation: any;

}
const Notifications = (props: homeScreenProps) => {

  Notificationss.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification]:any = useState(false);
  const notificationListener:any = useRef();
  const responseListener:any = useRef();

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notificationss.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notificationss.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notificationss.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }
  
    if (Platform.OS === "android") {
      Notificationss.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notificationss.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        sound: "true",
        lightColor: "#FF231F7C",
        lockscreenVisibility: Notificationss.AndroidNotificationVisibility.PUBLIC,
        bypassDnd: true,
      });
    }
  
    return token;
  }
  useEffect(() => {
    registerForPushNotificationsAsync().then((token:any) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notificationss.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notificationss.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notificationss.removeNotificationSubscription(
        notificationListener.current
      );
      Notificationss.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  return (
    <ScrollView>
      <View >
        
        
        <Pressable  style={styles.chatBar}>
          <FontAwesomeIcon icon={faFaucetDrip} style={styles.icon} />
          <View>
          <Text style={styles.text}>Watering has just started.</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: "#0D9B81",
    margin:25,
    padding: 14,
    
  },
  chatBar: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
  },
  text:{
    fontSize: 22,
    marginTop: 25
  }
})
export default Notifications;

export async function schedulePushNotification(
  title:any,
  slot:any,
  time:any,
  day:any
) {
  time = new Date(time.getTime() - 5 * 60000);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = days.indexOf(day) + 2;
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const id = await Notificationss.scheduleNotificationAsync({
    content: {
      title,
      body: slot,
      // sound: 'default',
    },
    trigger: {
      weekday: weekday,
      hour: hours,
      minute: minutes,
      repeats: true,
    },
  });
  console.log("notif id on scheduling",id)
  return id;
}

export async function cancelNotification(notifId:any){
  await Notificationss.cancelScheduledNotificationAsync(notifId);
}