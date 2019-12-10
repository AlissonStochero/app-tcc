import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage, Alert, Picker, KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native';

import api from '../services/api';
import { apisAreAvailable } from 'expo';

export default function TransferirMaterial({ navigation }) {


    const [material, setMaterial] = useState('');
    const [depto, setDepto] = useState([])
    const [deptoSelect,setDeptoSelect] = useState('')

    async function initUnidadeDepto() {
        
        console.log(depto);
            const res = await api.post('/alldeptoandunidade')
            //console.log(res.data)
            const dep = JSON.stringify(res.data)
            setDepto(JSON.parse(dep));
        
    }

    async function initMat() {
        //console.log(JSON.stringify(navigation.getParam('material')));
        let mat = JSON.stringify(navigation.getParam('material'))
        mat = JSON.parse(mat)
        setMaterial(mat)
        //console.log(material)
    }

    useEffect(() => {
        initMat()
        //initUnidadeDepto()
        
    },[material])
    useEffect(() => {
        //initMat()
        initUnidadeDepto()
        
    },[])
    function setaUnidade(un){
        //console.log(un)
        return setUnidadeSelect(un)
    }

    function setaDepto(dep){
        //console.log(un)
        return setDeptoSelect(dep)
    }

    async function transferir(){
        const res = await api.post('/transferirmaterial',{
            material,
            depto:deptoSelect,
        })
        if(res.data === true){
            navigation.navigate('BuscaMaterial')
            Alert.alert(
                'Sucesso',
                'Material Transferido com sucesso',
                [
                  
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        }
    }

    let deptos = depto.map((value,k)=>{
        //console.log(depto)
        return <Picker.Item key={k} label={`${value.unidade_nome} - ${value.departamento_nome}`} value={value} />
    })

    //<Picker.Item key={0} label={unidade.nome} value={unidade.id_unidade} />
    //<Picker.Item key={1} label={unidade.nome} value={unidade.id_unidade} />
    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.titulo}>Transferir Material</Text>
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
            
            <View style={styles.form}>
            <Text style={styles.label}>Departamento destino: </Text>
                <Picker
                style={styles.select}
                selectedValue={deptoSelect}
                onValueChange={(itemValue, itemIndex) =>
                    setaDepto(itemValue)
                }>
                {deptos}
            </Picker>
            </View>
            
            <TouchableOpacity onPress={transferir} style={styles.button}>
                <Text style={styles.textButton}>Confirmar Tranferência</Text>
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
    select:{
        height: 50, 
        paddingHorizontal:100,
        alignItems: 'center',
        justifyContent: 'center',
        color:'#4b4141'
    },
    titulo: {
        color: '#00BFFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems:'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#696969',
        height: 44,
        marginBottom: 20,
        borderRadius: 5
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    button: {
        height: 42,
        backgroundColor: '#00BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 30,
    },
    dados: {
        fontSize: 18,
        color: '#4b4141',
        alignItems:'center',
    }
});
