import React from 'react';
import Statistics from '../src/Statistics';
import renderer from 'react-test-renderer';

test('Statistics shows current deal if it is set', () => {
  const comp = renderer.create(
    <Statistics
      startAt={1523030489163}
      profitTotal={0.143245}
      profit24={-0.01124}
      currentDealProfit={0.15}
    />
  );

  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Statistics shows that no deal is open', () => {
  const comp = renderer.create(
    <Statistics
      startAt={1523030489163}
      profitTotal={0.243245}
      profit24={-0.01124}
      currentDealProfit={null}
    />
  );

  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});
