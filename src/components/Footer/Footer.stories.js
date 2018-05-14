import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from './Footer';

let stories = storiesOf('Global/Footer', module);

stories.add('Default', () =>
  <Footer>
    Hello Footer
  </Footer>
);
