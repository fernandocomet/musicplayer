import React from 'react';
import {action} from '@storybook/addon-actions';

import Caratule from '../components/Caratule'

export default{
    title: 'Caratule',
    component: Caratule,
};

export const Text = () => <Caratule onClick={action('clicked')}></Caratule>
