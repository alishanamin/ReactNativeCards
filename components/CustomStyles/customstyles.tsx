import {StyleSheet} from 'react-native';

const customStyles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    fontStyle:'italic',
  
  },
  contactListTextStyle:{
    color: 'white',
    fontSize: 15,
    fontWeight: '400',

  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 10,
  },
  fancyCardHeadingStyle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 8,
  },
  fancyCardTimeTextStyle:{
    color: 'black',
    fontSize: 12,
    fontStyle: 'italic',
    paddingLeft: 8,
    textAlign:'right'
  },
  fancyCardLabelStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  fancyCardDesStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    padding: 8,
  },
  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 20.0,
    position: 'absolute',
    opacity: 0.8,
  },
  mainImageStyle: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 20.0,
    borderTopRightRadius: 20.0,
    opacity: 0.8,
    resizeMode: 'cover',
  },

  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    objectFit: 'cover',
  },
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginTop:10,
  },

  circleTextStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  //  position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle1: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    margin: 10.0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  square: {
    height: 150,
    width: 200,
    backgroundColor: 'yellow',
    margin: 20.0,
    borderRadius: 10.0,
    justifyContent: 'center',
  },

  rectangle: {
    height: 150,
    width: 250,
    backgroundColor: 'pink',
    margin: 20.0,
    borderRadius: 10.0,
    justifyContent: 'center',
  },
});

export default customStyles;
