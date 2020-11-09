import React from 'react';
import {action} from '@storybook/addon-actions';

import Menu from '../components/Menu'

export default{
    title: 'Menu',
    component: Menu,
};

export const Text = () => <Menu onClick={action('clicked')}></Menu>
