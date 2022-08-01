import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
interface homeScreenProps {
  navigation: any;
}
const EditProfile = (props: homeScreenProps) => {

  return (
    <ScrollView>
      <View >
        <Image source={require('../../../assets/images/avatar.jpg')}/>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

})
export default EditProfile;