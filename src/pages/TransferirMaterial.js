import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage, Picker, KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native';

import api from '../services/api';
import { apisAreAvailable } from 'expo';

export default function TransferirMaterial({ navigation }) {


    const [material, setMaterial] = useState('');
    const [unidade, setUnidade] = useState([]);
    const [unidadeSelect, setUnidadeSelect]= useState('')
    const [depto, setDepto] = useState([])
    const [deptoSelect,setDeptoSelect] = useState('')

    async function initUnidadeDepto() {
        let response = await api.post('/allunidades')
        const un = JSON.stringify(response.data)
        setUnidade(JSON.parse(un))
        const res = await api.post('/alldepto')
        //console.log(res.data)
        const dep = JSON.stringify(res.data)
        setDepto(JSON.parse(dep))
    }

    async function initMat() {
        const mat = JSON.stringify(navigation.getParam('material'))
        setMaterial(JSON.parse(mat))
    }

    useEffect(() => {
        initMat()
        initUnidadeDepto()
    }, [])

    function setaUnidade(un){
        //console.log(un)
        return setUnidadeSelect(un)
    }

    function setaDepto(dep){
        //console.log(un)
        return setDeptoSelect(dep)
    }

    async function transferir(){
        console.log(unidadeSelect)
    }

    let unidades = unidade.map((value,k)=>{
        return <Picker.Item key={k} label={value.nome} value={value} />
    })

    let deptos = depto.map((value,k)=>{
        return <Picker.Item key={k} label={value.nome} value={value} />
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
                <Text style={styles.label}>Unidade destino: </Text>
                <Picker
                style={styles.select}
                selectedValue={unidadeSelect}
                onValueChange={(itemValue, itemIndex) =>
                    setaUnidade(itemValue)
                }>
                {unidades}
            </Picker>
            </View>
            <View style={styles.form}>
            <Text style={styles.label}>Departamento destino: {console.log(depto)}</Text>
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
        paddingHorizontal: 30,
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
        paddingHorizontal: 10,
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
        paddingHorizontal: 80,
    },
    dados: {
        fontSize: 18,
        color: '#4b4141',
        alignItems:'center',
    }
});
