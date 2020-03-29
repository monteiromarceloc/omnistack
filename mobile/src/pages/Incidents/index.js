import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';

import logoImg from "../../assets/logo.png";
import styles from './styles'

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail(){
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Image source={logoImg} />
        <Text style={styles.headerText} >
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        style={styles.list}
        data={[1,2,3]}
        keyExtractor={ i => String(i)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident} >
            <Text style={styles.property}>ONG:</Text>
            <Text style={styles.value}>APAD</Text>

            <Text style={styles.property}>CASO:</Text>
            <Text style={styles.value}>blablabla</Text>
            
            <Text style={styles.property}>VALOR:</Text>
            <Text style={styles.value}>R$ 120,00</Text>

            <TouchableOpacity 
              style={styles.btn}
              onPress={navigateToDetail}
            >
              <Text style={styles.btnText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color='#e02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
