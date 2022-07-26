import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getPlantById } from "../../Api/plants";
interface homeScreenProps {
  navigation: any;
  id: number
}
const Plant = (props: homeScreenProps) => {
  const route  = useRoute()
  
  const [_plant, setPlant]:any = useState(null);
  
    useEffect(() => {
        const getData = async (id:number) => {
            try {
                const {id}:any = route.params
                const plantById = await getPlantById(id)                
                setPlant(plantById?.data?.data)
                
            } catch (error) {
                console.log(error);
            }
        }
        getData(props.id)
    }, [])

  return (
    <ScrollView>
      <View >
        <Image source={require("../../../assets/images/potato.jpg")} style={styles.img}/>
        <Text style={styles.plant_name}>{_plant?.name}</Text>
        <Text style={styles.secTitle}>General Information</Text>
        <Text style={styles.secTitle}>Recommendations</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    img:{
        maxWidth:250,
        maxHeight:250,
        resizeMode:'contain',
        alignSelf:'center',
        borderRadius:6,
        marginTop:40
    },
    plant_name:{
        textAlign:'center',
        margin:20,
        fontSize:32,
        fontWeight:'bold'
    },
    secTitle:{
        margin:10,
        fontSize:20,
        
    }
})
export default Plant;