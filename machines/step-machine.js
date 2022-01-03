import { createMachine, assign } from 'xstate';
import { init } from 'xstate/lib/actionTypes';

const ONE = 'one';
const TWO = 'two';
const THREE = 'three';
const FINAL = 'final';

const intitalState = {
  isNextDisabled: false,
  isPrevDisabled: true,
};

const initial = assign((context, state) => {
  return intitalState;
});

const disableAll = assign((context, state) => {
  return {
    isNextDisabled: true,
    isPrevDisabled: true,
  };
});

const enableAll = assign((context, state) => {
  return {
    isNextDisabled: false,
    isPrevDisabled: false,
  };
});

export const stepMachine = createMachine({
  id: 'step',
  initial: ONE,
  context: intitalState,
  states: {
    one: {
      entry: [initial],
      on: { NEXT: TWO },
    },
    two: {
      entry: [enableAll],
      on: { NEXT: THREE, PREV: ONE },
    },
    three: {
      entry: [enableAll],
      on: { NEXT: FINAL, PREV: TWO },
    },
    final: {
      entry: [disableAll],
      type: FINAL,
    },
  },
});
