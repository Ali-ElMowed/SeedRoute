import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Btn from "../../Components/Btn";
import firestore from "@react-native-firebase/firestore";
import { Divider, List } from "react-native-paper";

interface homeScreenProps {
  navigation: any;
}
const Chats = (props: homeScreenProps) => {
  const goToChat = () => props.navigation.navigate("ChatRoom");
  const [threads, setThreads]: any = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("THREADS")
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            // give defaults
            name: "",
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    /**
     * unsubscribe listener
     */
    return () => unsubscribe();
  }, []);

  //STILL hardcoded it need to be done
  return (
    // <ScrollView>
    //   <View >
    //     <Pressable onPress={goToChat} style={styles.chatBar}>
    //       <Image
    //         source={require("../../../assets/images/avatar.jpg")}
    //         style={styles.avatar}
    //       />
    //       <View>
    //         <Text style={styles.uname}>John Doe</Text>
    //         <Text style={styles.lmsg}>Hey, how are you doing?</Text>
    //       </View>
    //     </Pressable>
    //   </View>
    // </ScrollView>
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ChatRoom", { thread: item })}
          >
            <List.Item
              title={item.name}
              description="Item description"
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  avatar: {
    alignSelf: "flex-start",
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  chatBar: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  uname: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  lmsg: {
    marginLeft: 20,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
export default Chats;
