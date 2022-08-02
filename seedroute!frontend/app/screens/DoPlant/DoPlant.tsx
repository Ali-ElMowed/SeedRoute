import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { doPlant, plants } from "../../Api/plants";
import Loading from "../../Components/Loading";
import { useRoute } from "@react-navigation/native";
import { useAppSelector } from "../../redux/hooks";
interface homeScreenProps {
  navigation: any;
}
const DoPlant = (props: homeScreenProps) => {
  const blockState = useAppSelector(state=>state.block) 

  const [loading, setLoading] = useState(false);
  const [_plants, setPlants] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const allPlants = await plants();
        setPlants(allPlants?.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const route : any = useRoute()
  const {name}:any = blockState
  const handlePickingPlant = async (blockId:any ,plantId:number) => {
    try {
      setLoading(true)
      const res = await doPlant(plantId,blockId)
      
      props.navigation.replace('Block') 
      return res  
      
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }

  return (
    <ScrollView>
      <View style={styles.search_bar}>
        <TextInput
          placeholder="Search for a Plant"
          style={styles.search_input}
        />
        <FontAwesomeIcon icon={faSearch} style={styles.icon} />
      </View>

      {loading ? (
        <Loading />
      ) : _plants ? (
        <>
          <View style={styles.container}>
            {_plants?.map((plant: any) => (
              <Pressable
                style={styles.plant_card}
                onPress={()=>
                  handlePickingPlant(name,plant?.id)
                }
              >
                <Image
                  source={require("../../../assets/images/symbol1.jpg")}
                  style={styles.plant_img}
                />
                <Text style={styles.plant_name}>{plant?.name}</Text>
              </Pressable>
            ))}
          </View>
        </>
      ) : (
        <Text>No Plants Found</Text>
      )}
    </ScrollView>
  );
};
``;

const styles = StyleSheet.create({
  icon: {
    color: "#0D9B81",
    marginTop: 10,
    padding: 14,
    marginLeft: 4,
  },
  search_bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  search_input: {
    borderWidth: 2,
    padding: 10,
    width: 330,
    borderRadius: 6,
    borderColor: "#0D9B81",
  },
  plant_card: {
    padding: 20,
    width: 160,
    margin: 5,
    borderRadius: 6,
    backgroundColor: "white",
    borderColor: "#0D9B81",
  },
  plant_img: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderColor: "#0D9B81",
    borderRadius: 6,
  },
  btn: {
    maxWidth: 100,
    maxHeight: 30,
    alignSelf: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 15,
  },
  plant_name: {
    textAlign: "center",
    marginBottom: 5,
  },
});
export default DoPlant;
