import React, { Component } from 'react';

const Statistics = ({ text }) => (
  <div class="Statistics row">
    <div class="row">
      <div class="col-xs-6">Started</div>
      <div class="col-xs-6">21 Jan 2018 at 18:30</div>
    </div>
    <div class="row">
      <div class="col-xs-6">Profit since start:</div>
      <div class="col-xs-6">+23%</div>
    </div>
    <div class="row">
      <div class="col-xs-6">Profit in the last 24h:</div>
      <div class="col-xs-6">+3%</div>
    </div>
    <div class="row">
      <div class="col-xs-6">Currently open deal:</div>
      <div class="col-xs-6">+0.3%</div>
    </div>
    <div class="row">
      <div class="col-xs-12">No open deals, waiting for the opportunity</div>
    </div>
  </div>
);

export default Statistics;
