import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getPlantById } from "../../Api/plants";
interface homeScreenProps {
  navigation: any;
  id: number
}
const Plant = (props: homeScreenProps) => {

  const [_plant, setPlant] = useState(null);
  
    useEffect(() => {
        const getData = async (id:number) => {
            try {
                const plantById = await getPlantById(1 )
                setPlant(plantById?.data.name)
                console.log(plantById);
                
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
        <Text style={styles.plant_name}>potato</Text>
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