import React from 'react';
import {action} from '@storybook/addon-actions';

import Shuffle from '../components/Shuffle/Shuffle.js'


export default{
    title: 'Shuffle',
    component: Shuffle,
};

export const Text = () => <Shuffle onClick={action('clicked')}>Shuffle</Shuffle>