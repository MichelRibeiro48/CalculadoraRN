import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    marginTop: '30%',
    alignSelf: 'center',
  },
  padNumber: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    width: 60,
    marginLeft: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padOperatorRight: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: '20%',
    marginRight: '5%',
  },
  padOperatorLeft: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    width: 80,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: '20%',
    marginRight: 5,
  },
  title: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  containerOpRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 40,
    marginTop: 30,
  }
})