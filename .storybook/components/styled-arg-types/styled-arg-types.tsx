import React from 'react';
import { ArgTypes } from '@storybook/addon-docs/blocks';
import styles from './styled-arg-types.module.css';

export const StyledArgTypes = () => {
  return (
    <div className={styles.argTypes}>
      <ArgTypes />
    </div>
  );
};

