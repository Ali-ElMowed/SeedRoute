import React, { useEffect, useState, } from "react";
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
import Btn from "../../Components/Btn";
import { plants } from "../../Api/plants";
import Loading from "../../Components/Loading";
interface homeScreenProps {
  navigation: any;
}
const Plants = (props: homeScreenProps) => {
  const goInfo = (id : number) => props.navigation.navigate('Plant',{id});
  const [loading,setLoading] = useState(false)

  // const { id } = useParams();

    const [_plants, setPlants] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const allPlants = await plants()
                setPlants(allPlants?.data.data)
                console.log(allPlants?.data.data);
                
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false)
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

      {loading?<Loading/>
      :_plants?<>
      <View style={styles.container}>
        {_plants?.map((plant: any)=>( 
          
           <Pressable style={styles.plant_card} onPress={()=>{goInfo(plant?.id)}}>
            <Image
              source={{uri:`http://10.0.2.2:8000/storage/${plant?.image}`}}
              style={styles.plant_img}
            />
            <Text style={styles.plant_name}>{plant?.name}</Text>
          </Pressable>
          ))}
      </View>
     </> : <Text>No Plants Found</Text>}
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
    borderColor:"#0D9B81",
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
    marginLeft: 15
  },
  plant_name: {
    textAlign: "center",
    marginBottom: 5,
  },
});
export default Plants;
