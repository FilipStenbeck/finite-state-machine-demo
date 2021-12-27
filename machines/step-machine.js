import { createMachine } from 'xstate';

export const ONE = 'one';
export const TWO = 'two';
export const THREE = 'three';
export const FINAL = 'final';

export const stepMachine = createMachine({
  id: 'step',
  initial: ONE,
  states: {
    one: {
      on: { NEXT: TWO },
    },
    two: {
      on: { NEXT: 'three', PREV: ONE },
    },
    three: {
      on: { NEXT: FINAL, PREV: TWO },
    },
    final: {
      type: FINAL,
    },
  },
});
