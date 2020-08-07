import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import TeacherItem from "../../components/TeacherItem";
import { ScrollView } from "react-native-gesture-handler";

function TeacherList() {
  return (
    <View style={styles.container}>
      <Header title="Proffys disponíveis" />
      <ScrollView style={styles.teacherList}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export { TeacherList };
