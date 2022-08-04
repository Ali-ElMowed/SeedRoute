import React, { Component, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch,
} from "react-native";

import BluetoothSerial from "react-native-bluetooth-serial";

const Arduino = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [discovering, setDiscovering] = useState(false);
  const [devices, setDevices] = useState([]);
  const [unpairedDevices, setUnpairedDevices] = useState([]);
  const [connected, setConnected] = useState(false);


Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
  (values) => {
    const [isEnabled, devices] = values;
    setIsEnabled(values);
    setDevices(values);
  }
);

BluetoothSerial.on("bluetoothEnabled", () => {
  Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
    (values) => {
      const [isEnabled, devices] = values;
      setDevices(values)
    }
  );

  BluetoothSerial.on("bluetoothDisabled", () => {
    setDevices([]);
  });
  BluetoothSerial.on("error", (err) => console.log(`Error: ${err.message}`));
});

const _renderItem = (item) => {
  return (
    <View style={styles.deviceNameWrap}>
      <Text style={styles.deviceName}>{item.item.name}</Text>
    </View>
  );
};

const enable = () => {
  BluetoothSerial.enable()
    .then((res) => {
      // this.setState({ isEnabled: true }))
      setIsEnabled(true);
    })
    .catch((err) => Toast.showShortBottom(err.message));
};

const disable = () => {
  BluetoothSerial.disable()
    .then((res) => {
      // this.setState({ isEnabled: false }))
      setIsEnabled(false);
    })
    .catch((err) => Toast.showShortBottom(err.message));
};

const toggleBluetooth = (value) => {
  if (value === true) {
    enable();
  } else {
    disable();
  }
};

return (
  <View style={styles.container}>
    <View style={styles.toolbar}>
      <Text style={styles.toolbarTitle}>Bluetooth Device List</Text>

      <View style={styles.toolbarButton}>
        <Switch
          value={isEnabled}
          onValueChange={(val) => this.toggleBluetooth(val)}
        />
      </View>
    </View>
    <FlatList
      style={{ flex: 1 }}
      data={devices}
      keyExtractor={(item) => item.id}
      renderItem={(item) => this._renderItem(item)}
    />
  </View>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: "row",
  },
  toolbarButton: {
    width: 50,
    marginTop: 8,
  },
  toolbarTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    marginTop: 6,
  },
  deviceName: {
    fontSize: 17,
    color: "black",
  },
  deviceNameWrap: {
    margin: 10,
    borderBottomWidth: 1,
  },
});
export default Arduino;