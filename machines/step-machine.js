import { createMachine, assign } from 'xstate';

export const stepMachine = createMachine({
  id: 'step',
  initial: 'one',
  states: {
    one: {
      on: { NEXT: 'two' },
    },
    two: {
      on: { NEXT: 'three', PREV: 'one' },
    },
    three: {
      on: { NEXT: 'four', PREV: 'two' },
    },
    four: {
      type: 'final',
    },
  },
});
