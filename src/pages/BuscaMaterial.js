import React , {useState} from 'react';
import { StyleSheet, AsyncStorage, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity} from 'react-native';

import api from '../services/api';

export default function BuscaMaterial({navigation}) {


    const [codPat,setCodPat] = useState('');

    async function buscarMaterial(){
        const response = await api.post('/matbypat',{
            codPat,
        })
        const material = JSON.stringify(...response.data)
        try{
          await AsyncStorage.setItem('materialStore',material);
          navigation.navigate('MaterialDetalhes',{material});
      }catch(error){
          console.log(error)
      }
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.titulo}>Procurar Material</Text>
        <View style={styles.form}>
            <Text style={styles.label}>Numero de Patrimônio*</Text>
            <TextInput style={styles.input}
                placeholder="029160"
                placeholderTextColor="#999"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                value={codPat}
                onChangeText={setCodPat}
            />
            <TouchableOpacity onPress={buscarMaterial} style={styles.button}>
                <Text style={styles.textButton}>Procurar</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
      color:'#00BFFF',
      fontSize: 28,
      fontWeight:'bold',
      marginBottom:30
  },
    form:{
        alignSelf:'stretch',
        paddingHorizontal:30,
    },
    label:{
        fontWeight:'bold',
        color:'#696969',
        marginBottom:8
    },
    input:{
        borderWidth: 1,
        borderColor:'#DDD',
        paddingHorizontal:10,
        fontSize:16,
        color:'#696969',
        height:44,
        marginBottom:20,
        borderRadius:5
    },
    textButton:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
    },
    button:{
        height:42,
        backgroundColor:'#00BFFF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    }
});
