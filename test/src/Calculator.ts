/**

==========================
   Testing Calculator
==========================

*/

import chai = require('chai');
const assert = chai.assert;

// @ts-ignore
import BN = web3.utils.BN;

const Calculator = artifacts.require('Calculator');
let instances: any = {};

contract('Calculator', (accounts) => {

  const master: string = accounts[0];

  it('deploy', async () => {
    instances.Calculator = await Calculator.new({ from: master });
    assert.ok(instances.Calculator);
  })

  it('add', async () => {

  })

  it('sub', async () => {

  })
  
  it('mul', async () => {

  })

  it('div', async () => {

  })
})
