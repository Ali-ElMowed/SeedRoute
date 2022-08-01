import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getSelectedBlockByName } from "../../Api/blocks";
import { getPlantById } from "../../Api/plants";
import Btn from "../../Components/Btn";
import Loading from "../../Components/Loading";
interface homeScreenProps {
  navigation: any;
  name: any;
}
const Block = (props: homeScreenProps) => {
  




  
 
  const goToWatering = () => props.navigation.navigate("Watering");
  const doPlant = () => props.navigation.navigate("doPlant");
  const plantedAt = new Date(_block.planted_at);
 
  return (
    <ScrollView>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <Btn text="watering" onPress={goToWatering} style={styles.btn} />
          <Text style={styles.blockName}>
            This is block number {_block?.name}
          </Text>

          <View>
            {_block?.plant_id === null ? (
              <View>
                <Text style={styles.noplant}>
                  This Block is ready To be Planted
                </Text>
                <Btn text="Plant" style={styles.btn} onPress={doPlant} />
              </View>
            ) : (
              <>
                <Image
                  source={require("../../../assets/images/potato.jpeg")}
                  style={styles.img}
                />
                <Text style={styles.yesPlant}>Plant: {_plant?.name}</Text>
                <Text style={styles.phase}>
                  {" "}
                  <Text style={styles.phaseTitle}>Phase:</Text> {_block?.phase}{" "}
                  of {_plant?.number_of_phases}
                </Text>
                <Text style={styles.phase}>
                  {" "}
                  <Text style={styles.phaseTitle}>Planted on:</Text>{" "}
                  {_block?.planted_at}
                </Text>
                <Text style={styles.phase}>
                  {" "}
                  <Text style={styles.phaseTitle}>Growth Duration:</Text>{" "}
                  {_plant?.growth_duration} days
                </Text>
                <Text style={styles.phase}>
                  {" "}
                  <Text style={styles.phaseTitle}>Expected Harvest :</Text>{" "}
                  {_block?.planted_at + _plant?.growth_duration}
                </Text>
              </>
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
   
  },
  btn: {
   
  },
  blockName: {
    
  },
  noplant: {
    
  },
  yesPlant: {
    
  },
  phase: {
   
  },
  phaseTitle: {
    
  },
});
export default Block;
