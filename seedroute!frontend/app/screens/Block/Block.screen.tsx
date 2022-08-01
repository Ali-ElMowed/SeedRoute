import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getSelectedBlockByName } from "../../Api/blocks";
import Btn from "../../Components/Btn";
interface homeScreenProps {
  navigation: any;
  name: any
}
const Block = (props: homeScreenProps) => {
  const route = useRoute();

  const [_block, setBlock]: any = useState(null);

  useEffect(() => {
    const getData = async (blockName: number) => {
      try {
        const { blockName }: any = route.params;
        const blockByName = await getSelectedBlockByName(blockName);
        setBlock(blockByName?.data?.data);
        console.log(blockByName?.data?.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData(props.name);
  }, []);

  

  

const goToWatering = () => props.navigation.navigate('Watering')
const doPlant = () => props.navigation.navigate('doPlant')
  return (
    <ScrollView>
      <View >
        <Btn text="watering" onPress={goToWatering} style={styles.btn}/>
        <Text style={styles.blockName}>This is block number {_block?.name}</Text>
        <View>
          {_block?.plant_id === null ? <View>
            <Text style={styles.noplant}> This Block is ready To be Planted</Text>
            <Btn text="Plant" style={styles.btn} onPress={doPlant}/>
          </View> 
          : 
          <Text>This is block has {_block?.plant_id}</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
btn:{
    marginTop:30,
    width:200,
    alignSelf:'center',
},
blockName:{
  margin:20,
  fontSize:18,
  marginTop:30,
  alignSelf:'center'
},
noplant:{
  fontSize:22,
  alignSelf:'center',
  marginTop: 100

},

})
export default Block;