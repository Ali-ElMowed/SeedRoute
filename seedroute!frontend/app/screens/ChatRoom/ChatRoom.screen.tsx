
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { IconButton } from "react-native-paper";

interface RoomScreenProps {
  navigation: any;
}
export default function RoomScreen() {
  const [messages, setMessages]: any = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "Henlo!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
      },
    },
  ]);

  // helper method that is sends a message
  function handleSend(newMessage: any = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }
  function renderBubble(props: RoomScreenProps) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: "#6646ee",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  }
  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#6646ee" />
      </View>
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => handleSend(newMessage)}
      user={{ _id: 1, name: "User Test" }}
      renderBubble={() => renderBubble}
      placeholder="Type your message here..."
      showUserAvatar
      alwaysShowSend
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}
const styles = StyleSheet.create({
    bottomComponentContainer:{

    }

})
