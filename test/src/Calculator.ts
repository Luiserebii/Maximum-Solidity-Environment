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

    const sum: BN = await instances.Calculator.add.call(a, b, { from: master });
    assert.equal(a + b, sum.toNumber());
  })

  it('sub', async () => {
    const a: number = 10;
    const b: number = 2;

    const diff: BN = await instances.Calculator.sub.call(a, b, { from: master });
    assert.equal(a - b, diff.toNumber());
  })
  
  it('mul', async () => {
    const a: number = 10;
    const b: number = 2;

    const prod: BN = await instances.Calculator.mul.call(a, b, { from: master });
    assert.equal(a * b, prod.toNumber());
  })

  it('div', async () => {

    const a: number = 10;
    const b: number = 2;

    const quot: BN = await instances.Calculator.div.call(a, b, { from: master });
    assert.equal(a / b, quot.toNumber());
  })
})
