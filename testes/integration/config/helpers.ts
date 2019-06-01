import * as mocha from 'mocha';
import * as chai from 'chai';
import * as td from 'testdouble';
const superteste = require('supertest');
import App from '../../../server/api/api';

const app = App;
const request = superteste;
const expect = chai.expect;
const testDouble = td;

export { app, request, expect, testDouble };