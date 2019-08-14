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
    const a: number = 10;
    const b: number = 2;

    const sum: BN = await instances.Calculator.add(a, b, { from: master});
    console.log(sum.logs[0].args);
    assert.equal(a + b, sum.toNumber());
  })

  it('sub', async () => {

  })
  
  it('mul', async () => {

  })

  it('div', async () => {

  })
})
