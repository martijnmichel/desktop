// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module 'lodash';

declare module 'uniqid';
