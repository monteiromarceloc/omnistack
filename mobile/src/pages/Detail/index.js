import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, TouchableOpacity, FlatList, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'
import logoImg from "../../assets/logo.png";
import styles from './styles'

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Blabla".'

  function navigateToIncidents(){
    navigation.navigate('Incidents');
  }

  function sendWpp(){
    Linking.openURL(`whatsapp://send?phone=+5531988886549&text=${message}`)
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: 'titulo',
      recipients: ['a@b.com'],
      body: message,
    })
  }

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <TouchableOpacity 
          style={styles.btn}
          onPress={navigateToIncidents}
        >
          <Feather name="arrow-left" size={28} color='#e02041' />
        </TouchableOpacity>
        <Image source={logoImg} />
      </View>

      <View style={styles.incident} >
        <Text style={styles.property}>ONG:</Text>
        <Text style={styles.value}>APAD</Text>

        <Text style={styles.property}>CASO:</Text>
        <Text style={styles.value}>blablabla</Text>
        
        <Text style={styles.property}>DESCRIÇÃO:</Text>
        <Text style={styles.value}>blablabla</Text>

        <Text style={styles.property}>VALOR:</Text>
        <Text style={[styles.value, {marginBottom: 0}]}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.actionBtn} onPress={sendWpp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}
