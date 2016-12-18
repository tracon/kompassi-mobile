import { StyleSheet } from 'react-native';


const fontSize = 52;


export default StyleSheet.create({
  happyFace: {
    color: '#4caf50',
    fontSize,
  },
  sadFace: {
    color: '#e91e63',
    fontSize,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
