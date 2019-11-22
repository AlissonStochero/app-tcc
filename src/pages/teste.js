import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;
    const { navigate } = this.props.navigation;

    voltar=()=>{
      this.props.navigation.navigate('BuscaMaterial')
    }

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          marginTop: -64,
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

     
          <TouchableOpacity style={styles.voltar} onPress={voltar} >
            <Text style={styles.textButton}>
              voltar
            </Text>
          </TouchableOpacity>
     

        <View style={styles.form}>
          <TouchableOpacity style={styles.button} onPress={() => this.setState({ scanned: false })} >
            <Text style={styles.textButton}>
              Ler
            </Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    const dado = JSON.stringify(data)
    this.props.navigation.navigate('BuscaMaterial', { dado })
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  voltar: {
    height: 30,
    width: 90,
    backgroundColor: 'rgba(0,191,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    marginBottom:450,
  },

  form: {
    alignSelf: 'center',
    paddingHorizontal: 30,
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  button: {
    height: 87,
    width: 87,
    backgroundColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 400,
    padding: 5,
  }
});
