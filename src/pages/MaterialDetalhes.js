import React , {useState,useEffect} from 'react';
import { StyleSheet, AsyncStorage, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity} from 'react-native';

import api from '../services/api';

export default function MaterialDetalhes({navigation}) {


    const [material,setMaterial] = useState('');
    const [codPat,setCodPat] = useState('');
    
    useEffect(()=>{
        setMaterial(JSON.parse(navigation.getParam('material')))
        //console.log(JSON.stringify(navigation.getParam('material')))   
    },[])

    async function buscarMaterial(){
        
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.titulo}>Detalhes do Material</Text>
        <View style={styles.form}>
            <Text style={styles.label}>Numero Patrimônio: </Text>
            <Text style={styles.dados}>{material.cod_patrimonio}</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Material: </Text>
            <Text style={styles.dados}>{material.nome_material}</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Valor Atual: </Text>
            <Text style={styles.dados}>{material.nome_material}</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Unidade pertencente: </Text>
            <Text style={styles.dados}>{material.nome_unidade}</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.label}>Depto pertencente: </Text>
            <Text style={styles.dados}>{material.nome_depto}</Text>
        </View>        
        <TouchableOpacity onPress={buscarMaterial} style={styles.button}>
                <Text style={styles.textButton}>Transferir Material</Text>
        </TouchableOpacity>
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
        flexDirection:'row',
    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        color:'#000',
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
        paddingHorizontal:50,
    },
    dados:{
        fontSize:18,
        color:'#4b4141',
    }
});
