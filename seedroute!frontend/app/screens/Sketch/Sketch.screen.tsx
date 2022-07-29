import React, { useCallback, useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { postSelectedBlocks } from "../../Api/blocks";
import Block from "../../Components/Block";
import Btn from "../../Components/Btn";
import Loading from "../../Components/Loading";

interface homeScreenProps {
  navigation: any;
}

const Sketch = (props: homeScreenProps) => {
  const myLand = () => props.navigation.replace("Home");
  const [loading,setLoading] = useState(false)
  const [blocks, setBlocks]: any = useState([
    {
      name: 0,
      value: 0,
    },
    {
      name: 1,
      value: 0,
    },
    {
      name: 2,
      value: 0,
    },
    {
      name: 3,
      value: 0,
    },
    {
      name: 4,
      value: 0,
    },
    {
      name: 5,
      value: 0,
    },
    {
      name: 6,
      value: 0,
    },
    {
      name: 7,
      value: 0,
    },
    {
      name: 8,
      value: 0,
    },
    {
      name: 9,
      value: 0,
    },
    {
      name: 10,
      value: 0,
    },
    {
      name: 11,
      value: 0,
    },
    {
      name: 12,
      value: 0,
    },
    {
      name: 13,
      value: 0,
    },
    {
      name: 14,
      value: 0,
    },
    {
      name: 15,
      value: 0,
    },
    {
      name: 16,
      value: 0,
    },
    {
      name: 17,
      value: 0,
    },
    {
      name: 18,
      value: 0,
    },
    {
      name: 19,
      value: 0,
    },
    {
      name: 20,
      value: 0,
    },
    {
      name: 21,
      value: 0,
    },
    {
      name: 22,
      value: 0,
    },
    {
      name: 23,
      value: 0,
    },
    {
      name: 24,
      value: 0,
    },
    {
      name: 25,
      value: 0,
    },
    {
      name: 26,
      value: 0,
    },
    {
      name: 27,
      value: 0,
    },
  ]);

  const handleChange = (index: number, name: number, value: number) => {
    setBlocks((old: string | any[]) => [
      ...old.slice(0, index),
      {
        name,
        value: value == 0 ? 1 : 0,
      },
      ...old.slice(index + 1),
    ]);
  };

  const handleSelection = useCallback(async ()=>{
    try {
      setLoading(true)
      const res = await postSelectedBlocks({"selected_blocks" :blocks})
      myLand()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  },[blocks])


  return (
    <ScrollView>
      <View>
        <Text style={styles.titleTxt}>Sketch Your Land</Text>
        <View style={styles.container}>
          {blocks?.map((block: any, index: number) => (
            <Block
              name={block.name}
              value={block.value}
              onClick={() => {
                handleChange(index, block.name, block.value);
              }}
            />
          ))}
        </View>

        {/* <Button title="BACK" onPress={goBackk}></Button> */}
        {loading && <Loading/>}
        <Btn text="Next" onPress={handleSelection} style={styles.nxtBtn} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 7,
  },
  nxtBtn: {
    marginLeft: 100,
    marginRight: 100,
    color: "white",
  },
  titleTxt: {
    margin: 10,
    marginBottom: 13,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default Sketch;
