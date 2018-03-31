import chai, { expect } from 'chai' // eslint-disable-line import/no-extraneous-dependencies
// import sinonChai from 'sinon-chai'
// import chaiAsPromised from 'chai-as-promised' // eslint-disable-line import/no-extraneous-dependencies
// import { createClient } from 'fakeredis'
// import redis from 'redis'
// import sinon from 'sinon'
//
global.chai = chai
global.expect = expect
// global.chaiAsPromised = chaiAsPromised
//
// chai.use(sinonChai)
chai.should()
// chai.use(chaiAsPromised)
//
// const fakeClient = createClient()
// sinon.stub(fakeClient, 'on')
// sinon.stub(redis, 'createClient').returns(fakeClient)
