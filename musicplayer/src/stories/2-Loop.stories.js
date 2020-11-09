import React from 'react';
import {action} from '@storybook/addon-actions';

import Loop from '../components/Loop'

export default{
    title: 'Loop',
    component: Loop,
};

export const Text = () => <Loop onClick={action('clicked')}></Loop>
