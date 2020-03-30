import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  list: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 48,
  },

  property: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  value: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  btn: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },

  btnText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: "bold"
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  contactBox: {
    padding: 24,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },

  actionBtn: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: "bold",
  }

});
