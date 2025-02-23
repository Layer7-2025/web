import { flexCenter } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',

  margin: '0 auto',
  paddingBlock: 50,

  ...flexCenter({
    direction: 'column',
    gap: 65,
  }),

  '@media': {
    '(max-width: 550px)': {
      padding: '30px 0',
      gap: 40,
    },
  },
});

export const activityList = style({
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});
