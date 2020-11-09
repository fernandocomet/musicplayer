import React from 'react';
import {action} from '@storybook/addon-actions';

import Play from '../components/Play'

export default{
    title: 'Play',
    component: Play,
};

export const Text = () => <Play onClick={action('clicked')}></Play>
