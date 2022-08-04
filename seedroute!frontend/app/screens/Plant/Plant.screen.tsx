import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getPlantById } from "../../Api/plants";
import Loading from "../../Components/Loading";
interface homeScreenProps {
  navigation: any;
  id: number;
}
const Plant = (props: homeScreenProps) => {
  const route = useRoute();

  const [_plant, setPlant]: any = useState(null);
  const [_image, setImage]: any = useState(null);

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const { id }: any = route.params;
        const plantById = await getPlantById(id);
        setPlant(plantById?.data?.data);
        const image = plantById?.data?.data?.image
        setImage(image)
        console.log(image);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData(props.id);
  }, []);

  return (
    <ScrollView>
      {_plant ? (
        <>
          <View style={styles.container}>
            <Image
              source={{ uri: `http://10.0.2.2:8000/storage/${_image}`}}
              style={{width: 250, height: 250, resizeMode: "contain", alignSelf: "center", borderRadius: 6,marginTop: 40,}}
            /> 
            <Text style={styles.plant_name}>{_plant?.name}</Text>
            <View style={styles.info}>
              <Text style={styles.secTitle}>General Information :-</Text>
              <Text style={styles.secContent}>
                &#8226; Growth Duration: {_plant?.growth_duration} days
              </Text>
              <Text style={styles.secContent}>
                &#8226; Plant Type: {_plant?.type}
              </Text>
              <Text style={styles.secContent}>
                &#8226; Soil Type: {_plant?.soil_type}
              </Text>
              <Text style={styles.secContent}>
                &#8226; The plant go through {_plant?.number_of_phases} phases
              </Text>

              <Text style={styles.secTitle}>Recommendations :-</Text>
              <Text style={styles.secContent}>
                &#8226; Watering {_plant?.watering} per week
              </Text>
            </View>
          </View>
        </>
      ) : (
        <Loading />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  img: {
    maxWidth: 250,
    maxHeight: 250,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 6,
    marginTop: 40,
  },
  plant_name: {
    textAlign: "center",
    margin: 20,
    fontSize: 32,
    fontWeight: "bold",
    color: "#4D544D",
  },
  secTitle: {
    margin: 10,
    marginLeft: 20,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#4D544D",
  },
  secContent: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 17,
    color: "#4D544D",
  },
  info: {
    margin: 15,
    borderRadius: 6,
    paddingBottom: 10,
  },
});
export default Plant;
