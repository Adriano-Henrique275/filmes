import React from "react";
import { BackButton, Name } from "./styles";
import { Feather } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

function ModalLink({ link, title, closeModal }) {
  return (
    <>
      <BackButton onPress={closeModal}>
        <Feather name="x" size={24} color="#FFF" />
        <Name numberOfLines={1}>{title}</Name>
      </BackButton>

      <WebView
        source={{ uri: link }}
      />
    </>
  )
}

export default ModalLink;