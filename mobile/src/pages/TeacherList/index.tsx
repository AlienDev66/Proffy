import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";

function TeacherList() {
  return (
    <View style={styles.container}>
      <Header title='Proffys disponíveis' />
    </View>
  );
}

export { TeacherList };
