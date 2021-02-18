import authenticateJWT from '../../src/middlewares/auth'
import  chai from 'chai';
import sinonChai from 'sinon-chai';
import {app} from '../../src/index';
import createError from "http-errors";
import { NextFunction } from 'express';

const validRequest = {headers:{authorization: process.env.TEST_ACCESS_TOKEN}}
const wrongRequest = {headers: {authorization: '125125125125125'}}
const emptyRequest = {}
const EmptyResponse = {}
const emptyNext = jest.fn()
const next:NextFunction = ()=>{}

describe('should get 403 not found status', () => {
    it('should return 403 error', () => {
        authenticateJWT(wrongRequest,EmptyResponse,emptyNext)
        expect(emptyNext).toHaveBeenCalledWith(createError(403))
    });
    it('should return nextFunction successfully', () => {
        authenticateJWT(validRequest,EmptyResponse,emptyNext)
        expect(emptyNext).toReturnWith(next())
    });
  });