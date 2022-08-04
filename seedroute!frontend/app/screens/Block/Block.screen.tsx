import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getSelectedBlockByName } from "../../Api/blocks";
import { getPlantById } from "../../Api/plants";
import Btn from "../../Components/Btn";
import Loading from "../../Components/Loading";
import { useAppSelector } from "../../redux/hooks";
interface homeScreenProps {
  navigation: any;
  name: any;
}
const Block = (props: homeScreenProps) => {
  const route = useRoute();
  const blockState = useAppSelector((state) => state.block);
  const [_block, setBlock]: any = useState({});
  const [_plant, setPlant]: any = useState(null);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { name }: any = blockState;
        const blockByName = await getSelectedBlockByName(name);

        setBlock(blockByName?.data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => { 
    const getData = async (id: number) => {
      try {
        setLoading(true);
        const plantById = await getPlantById(_block?.plant_id);

        setPlant(plantById?.data?.data);
        console.log(plantById?.data?.data);
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData(_block?.plant_id);
  }, [_block]);

  const goToWatering = () => props.navigation.navigate("Arduino");
  const doPlant = () => props.navigation.navigate("DoPlant");

  return (
    <ScrollView>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View>
            {!_block?.plant_id ? (
              <View>
                <Text style={styles.noplant}>
                  This Block is ready To be Planted
                </Text> 
                <Btn
                  text="Plant"
                  style={styles.btn}
                  onPress={() => doPlant()}
                />
              </View>
            ) : (
              <>
                <Btn
                  text="watering"
                  onPress={goToWatering}
                  style={styles.btn}
                />
                <Text style={styles.blockName}>  
                  This is block number {_block?.name}
                </Text>
                <Image
                  source={{uri:`http://10.0.2.2:8000/storage/${_plant?.image}`}}
                  style={{width: 250, height: 250, resizeMode: "contain", alignSelf: "center", borderRadius: 6,marginTop: 40,}}
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
    maxWidth: 250,
    maxHeight: 250,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 6,
    marginTop: 0,
    marginBottom: 10,
  },
  btn: {
    marginTop: 3,
    marginLeft: 100,
    marginRight: 100,
    alignSelf: "center",
  },
  blockName: {
    margin: 20,
    fontSize: 18,
    marginTop: 30,
    alignSelf: "center",
  },
  noplant: {
    fontSize: 22,
    alignSelf: "center",
    marginTop: 200,
    marginBottom:20
  },
  yesPlant: {
    fontSize: 22,
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  phase: {
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 7,
  },
  phaseTitle: {
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 7,
    fontWeight: "bold",
  },
});
export default Block;
