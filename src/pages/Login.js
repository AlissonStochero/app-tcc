import React , {useState, useEffect} from 'react';
import { StyleSheet, AsyncStorage, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity} from 'react-native';

import api from '../services/api';

export default function Login({navigation}) {


    const [usuario,setUsuario] = useState('');
    const [senha,setSenha] = useState('');
    useEffect(()=>{
        AsyncStorage.getItem('id_usuario').then(id_usuario=>{
            if(id_usuario)
                navigation.navigate('BuscaMaterial');
        })
    },[])
    async function logar(){
        const response = await api.post('/login',{
            usuario,
            senha,
        })
        const {id_usuario,nome_usuario} = Object(...response.data)
        try{
            await AsyncStorage.setItem('id_usuario',toString(id_usuario))
            await AsyncStorage.setItem('nome_usuario',nome_usuario)
            navigation.navigate('BuscaMaterial');
        }catch(error){
            console.log(error)
        }
        
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.titulo}>Sistema Patrimonial</Text>
        <Text style={styles.spam}>Mobile</Text>
        <View style={styles.form}>
            <Text style={styles.label}>USUÁRIO*</Text>
            <TextInput style={styles.input}
                placeholder="Seu usuário"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={usuario}
                onChangeText={setUsuario}
            />
            <Text style={styles.label}>SENHA*</Text>
            <TextInput style={styles.input}
                placeholder="Sua senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={senha}
                onChangeText={setSenha}
            />
            <TouchableOpacity onPress={logar} style={styles.button}>
                <Text style={styles.textButton}>Login</Text>
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
      fontWeight:'bold'
  },
  spam:{
    color:'#00BFFF',
    fontSize: 14,
    fontWeight:'bold',
    marginBottom:40
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
