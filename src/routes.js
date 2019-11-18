import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import BuscaMaterial from './pages/BuscaMaterial';
import MaterialDetalhes from './pages/MaterialDetalhes'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        BuscaMaterial,
        MaterialDetalhes
    })
);

export default Routes;