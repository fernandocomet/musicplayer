import React from 'react';
import {action} from '@storybook/addon-actions';

import Next from '../components/Next'

export default{
    title: 'Next',
    component: Next,
};

export const Text = () => <Next onClick={action('clicked')}></Next>
