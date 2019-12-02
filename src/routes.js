import React , {useState, useEffect} from 'react';
import {createAppContainer, createSwitchNavigator, DrawerActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from 'react-navigation-drawer';
import 'react-native-gesture-handler';

import Login from './pages/Login';
import BuscaMaterial from './pages/BuscaMaterial';
import MaterialDetalhes from './pages/MaterialDetalhes'
import TransferirMaterial from './pages/TransferirMaterial'
import LerBarCode from './pages/LerBarCode'

const Routes = (createSwitchNavigator({
    Login,
    BuscaMaterial,
    MaterialDetalhes,
    TransferirMaterial,
    LerBarCode
}),
createDrawerNavigator({
    BuscaMaterial:{
      screen: BuscaMaterial,
      navigationOptions: () => ({
        title: `Procurar Material`,
        drawerIcon: <Icon name="search" size={20} color="#000" />
      }),
    },
    MaterialDetalhes:{
      screen: MaterialDetalhes,
      navigationOptions: () => ({
        drawerLabel: () => null,
      }),
    },
    TransferirMaterial:{
      screen: TransferirMaterial,
      navigationOptions: () => ({
        drawerLabel: () => null,
      }),
    },
    LerBarCode:{
      screen: LerBarCode,
      navigationOptions: () => ({
        title: `Ler Codigo de Barras`,
        drawerIcon: <Icon name="barcode" size={20} color="#000" />
      }),
    },
    Login:{
      screen: Login,
      navigationOptions: () => ({
        drawerIcon: <Icon name="sign-in" size={20} color="#000" />
      }),
    },
}))


export default createAppContainer(Routes);