import { createMachine, assign } from 'xstate';

export const counterMachine = createMachine({
  initial: 'counting',
  context: { count: 0 },
  states: {
    counting: {
      on: {
        INCREMENT: {
          actions: [assign({ count: (ctx) => ctx.count + 1 })],
        },
        DECREMENT: {
          actions: [assign({ count: (ctx) => ctx.count - 1 })],
        },
        RESET: {
          actions: [assign({ count: (ctx) => 0 })],
        },
      },
    },
  },
});
