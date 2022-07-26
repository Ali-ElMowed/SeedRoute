import React, { useEffect, useState, } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faSeedling } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../Components/Btn";
import { plants } from "../../Api/plants";
interface homeScreenProps {
  navigation: any;
}
const Plants = (props: homeScreenProps) => {
  const goInfo = (id : number) => props.navigation.navigate('Plant',{id});

  // const { id } = useParams();

    const [_plants, setPlants] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const allPlants = await plants()
                setPlants(allPlants?.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])


  return (
    <ScrollView>
      <View style={styles.search_bar}>
        <TextInput
          placeholder="Search for a Plant"
          style={styles.search_input}
        />
        <FontAwesomeIcon icon={faSearch} style={styles.icon} />
      </View>
      <View style={styles.container}>
        {_plants?.map((plant: any)=>( 
          
           <View style={styles.plant_card}>
            <Image
              source={require("../../../assets/images/symbol1.jpg")}
              style={styles.plant_img}
            />
            <Text style={styles.plant_name}>{plant?.name}</Text>
            <Btn text="Info" style={styles.btn} onPress={goInfo(plant?.id)} />
          </View>
          ))}
      </View>
    </ScrollView>
  );
};``

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
    borderColor:"#0D9B81"
  },
  plant_card: {
    borderWidth: 2,
    padding: 20,
    width: 170,
    margin: 10,
    borderRadius: 6,
    backgroundColor: "white",
    borderColor: "#0D9B81",
  },
  plant_img: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderColor:"#0D9B81",
    borderWidth:1,
    borderRadius:6
  },
  btn: {
    maxWidth: 100,
    maxHeight: 30,
    alignSelf: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  plant_name: {
    textAlign: "center",
    marginBottom: 5,
  },
});
export default Plants;
