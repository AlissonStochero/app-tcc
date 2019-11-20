import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import BuscaMaterial from './pages/BuscaMaterial';
import MaterialDetalhes from './pages/MaterialDetalhes'
import TransferirMaterial from './pages/TransferirMaterial'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        BuscaMaterial,
        MaterialDetalhes,
        TransferirMaterial
    })
);

export default Routes;