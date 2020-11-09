import React from 'react';
import {action} from '@storybook/addon-actions';

import Timeline from '../components/Timeline'

export default{
    title: 'Timeline',
    component: Timeline,
};

export const Text = () => <Timeline onClick={action('clicked')}></Timeline>
