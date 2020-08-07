import React from "react";

import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsApp from "../../assets/images/icons/whatsapp.png";

export default function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars3.githubusercontent.com/u/59874434?v=4",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Domingos Capitango</Text>
          <Text style={styles.subject}>Língua Portuguesa</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiasta das tecnologias de Língua Portuguesa avançadas.
        {"\n"}
        {"\n"}
        Apaixonado por calões e Curu Curu linguagem do pássaro e outras
        linguages não muito aceptivas na língua portuguesa.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsApp} />
            <Text style={styles.contactButtonText}>Entrar em contacto</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}
