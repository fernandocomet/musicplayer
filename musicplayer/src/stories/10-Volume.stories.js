import React from 'react';
import {action} from '@storybook/addon-actions';

import Volume from '../components/Volume'

export default{
    title: 'Volume',
    component: Volume,
};

export const Text = () => <Volume onClick={action('clicked')}></Volume>
