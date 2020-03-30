import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View, TouchableOpacity, Linking, ActivityIndicatorComponent } from 'react-native';
import * as MailComposer from 'expo-mail-composer'
import logoImg from "../../assets/logo.png";
import styles from './styles'

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { incident } = route.params
  const formatedValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${formatedValue}.`

  function navigateToIncidents(){
    navigation.navigate('Incidents');
  }

  function sendWpp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: 'titulo',
      recipients: [incident.email],
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
        <Text style={styles.value}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.property}>CASO:</Text>
        <Text style={styles.value}>{incident.title}</Text>
        
        <Text style={styles.property}>DESCRIÇÃO:</Text>
        <Text style={styles.value}>{incident.description}</Text>

        <Text style={styles.property}>VALOR:</Text>
        <Text style={[styles.value, {marginBottom: 0}]}>{formatedValue}</Text>
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
