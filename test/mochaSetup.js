import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai';

global.chai = chai
global.expect = expect

chai.should()
chai.use(sinonChai)
