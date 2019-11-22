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
    Login,
    BuscaMaterial,
    MaterialDetalhes,
    TransferirMaterial,
    LerBarCode
},{
    BuscaMaterial: {
      screen: BuscaMaterial,
    },
    Login: {
        screen: Login,
      },
  }))


export default createAppContainer(Routes);