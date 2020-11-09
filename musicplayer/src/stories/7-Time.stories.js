import React from 'react';
import {action} from '@storybook/addon-actions';

import Time from '../components/Time'

export default{
    title: 'Time',
    component: Time,
};

export const Text = () => <Time onClick={action('clicked')}></Time>
