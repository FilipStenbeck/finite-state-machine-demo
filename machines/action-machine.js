import { createMachine } from 'xstate';

export const actionMachine = createMachine(
  {
    id: 'action',
    initial: 'inactive',
    states: {
      inactive: {
        on: {
          START: {
            target: 'active',
            actions: ['activate'],
          },
        },
      },
      active: {
        // entry actions
        entry: ['sendTelemetry'],
        // exit actions
        exit: ['deActivate'],
        on: {
          STOP: { target: 'inactive' },
        },
      },
    },
  },
  {
    actions: {
      activate: (context, event) => {
        console.log('activating...');
      },
      deActivate: (context, event) => {
        console.log('deactivating...');
      },

      sendTelemetry: (context, event) => {
        console.log('Started time:', Date.now());
      },
    },
  },
);
