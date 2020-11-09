import React from 'react';
import {action} from '@storybook/addon-actions';

import Previous from '../components/Previous'

export default{
    title: 'Previous',
    component: Previous,
};

export const Text = () => <Previous onClick={action('clicked')}></Previous>
