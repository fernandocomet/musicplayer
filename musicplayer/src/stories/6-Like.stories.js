import React from 'react';
import {action} from '@storybook/addon-actions';

import Like from '../components/Like'

export default{
    title: 'Like',
    component: Like,
};

export const Text = () => <Like onClick={action('clicked')}></Like>
