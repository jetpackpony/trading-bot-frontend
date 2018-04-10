import React from 'react';
import moment from 'moment';
import * as R from 'ramda';

const fractionToPercent =
  (num) => Math.abs(Math.round(num * 10000) / 100);
const getSign =
  (num) => (
    (num > 0)
    ? '+'
    : (num < 0)
    ? '-'
    : ''
  );
const joinVariadic = R.unapply(R.join(''));
const composePercentage =
  R.converge(
    joinVariadic,
    [getSign, fractionToPercent, R.always('%')]
  );

const StatLine =
  ({
    label,
    value
  }) => (
    <div className="row">
      <div className="col-xs-6">{label}</div>
      <div className="col-xs-6">{value}</div>
    </div>
  );

const Statistics =
  ({
    startAt,
    profitTotal,
    profit24,
    currentDealProfit
  }) => (
    <div className="Statistics row">
      <StatLine
        label="Started"
        value={ moment(startAt).format('LLLL') }
      />
      <StatLine
        label="Profit since start:"
        value={ composePercentage(profitTotal) }
      />
      <StatLine
        label="Profit in the last 24h:"
        value={ composePercentage(profit24) }
      />
      { (currentDealProfit !== null) ? (
        <StatLine
          label="Currently open deal:"
          value={ composePercentage(currentDealProfit) }
        />
      ) : (
        <div className="row">
          <div className="col-xs-12">No open deals, waiting for the opportunity</div>
        </div>
      ) }
    </div>
  );

export default Statistics;
