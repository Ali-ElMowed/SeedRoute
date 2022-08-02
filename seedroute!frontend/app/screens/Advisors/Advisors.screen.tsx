import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { getAdvisors } from "../../Api/advisors";
import Btn from "../../Components/Btn";
import Loading from "../../Components/Loading";
interface homeScreenProps {
  navigation: any;
}
const Advisors = (props: homeScreenProps) => {
  const goAdvInfo = () => props.navigation.navigate("");

  const [_advisors, setaAdvisors]:any = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
      const getData = async () => {
          try {
              setLoading(true)
              const allAdvisors = await getAdvisors()
              setaAdvisors(allAdvisors?.data?.data)
              console.log(allAdvisors?.data?.data);
              
          } catch (error) {
              console.log(error);
          } finally{
              setLoading(false)
          }
      }
      getData()
  }, [])




  // STILL HARDCODED It needs to be done

  return (
    <View style={styles.container}>
      {/* <Btn text="create a room" style={styles.btn} onPress={()=>props.navigation.navigate("AddRoom")}/> */}


      {loading ? <Loading/> :
      _advisors ? 
      <View>
      { _advisors.map((advisor: any)=>( 

      <Pressable style={styles.advisor_card}>
        <Image
          source={require("../../../assets/images/avatar.jpg")}
          style={styles.advisor_img}
        />
        <Text style={styles.advisor_name}>{_advisors?.name}</Text>
        <Text style={styles.advisor_ex}>Expreience: {_advisors?.ex_years} years</Text>
        <Text style={styles.advisor_ex}>Job: {_advisors?.job}</Text>
        <Text style={styles.advisor_ex}>Bio: {_advisors?.bio}</Text>
      </Pressable>
      ))} 
      </View> : <Text> No Advisors found</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  advisor_card: {
    borderWidth: 2,
    padding: 20,
    width: 170,
    margin: 10,
    borderRadius: 6,
    backgroundColor: "white",
    borderColor: "#0D9B81",
  },
  advisor_img: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderColor: "#0D9B81",
    borderWidth: 1,
    borderRadius: 50,
  },
  advisor_ex: {
    textAlign: "center",
    marginBottom: 1,
    fontSize: 13,
  },
  advisor_name: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
  },
  btn:{

  }
});
export default Advisors;
