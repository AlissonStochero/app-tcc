import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import BuscaMaterial from './pages/BuscaMaterial';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        BuscaMaterial
    })
);

export default Routes;