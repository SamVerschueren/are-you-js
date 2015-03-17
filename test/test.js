/*jshint expr:true */
'use strict';

/**
 * Test runners for are-you
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  17 Feb. 2015
 */

// module dependencies
var should = require('chai').should(),
    are = require('../are-you'),
    you = require('../are-you');


describe('Are you?', function() {

    describe('are.you', function() {

        describe('#number()', function() {

            it('Should return true for a positive value', function() {
                are.you.a.number(1).should.be.true;
            });

            it('Should return true for a decimal value', function() {
                are.you.a.number(6.2).should.be.true;
            });

            it('Should return true for a negative value', function() {
                are.you.a.number(-5).should.be.true;
            });

            it('Should return true for NaN', function() {
                are.you.a.number(NaN).should.be.true;
            });

            it('Should return true for a Number(10) object', function() {
                are.you.a.number(Number(10)).should.be.true;
            });

            it('Should return false for the string \'10\'', function() {
                are.you.a.number('10').should.be.false;
            });
        });

        describe('#function()', function() {

            it('Should return true for a function', function() {
                are.you.a.function(function() {}).should.be.true;
            });

            it('Should return false for a string', function() {
                are.you.a.function('test').should.be.false;
            });

            it('Should return false for an object', function() {
                are.you.a.function({}).should.be.false;
            });

            it('Should return false for an array', function() {
                are.you.a.function([]).should.be.false;
            });

            it('Should return false for a number', function() {
                are.you.a.function(10).should.be.false;
            });
        });
    });

    describe('you.are', function() {

        describe('#number()', function() {

            it('Should return true for a positive value', function() {
                you.are.a.number(1).should.be.true;
            });

            it('Should return true for a decimal value', function() {
                you.are.a.number(6.2).should.be.true;
            });

            it('Should return true for a negative value', function() {
                you.are.a.number(-5).should.be.true;
            });

            it('Should return true for NaN', function() {
                you.are.a.number(NaN).should.be.true;
            });

            it('Should return true for a Number(10) object', function() {
                you.are.a.number(Number(10)).should.be.true;
            });

            it('Should return false for the string \'10\'', function() {
                you.are.a.number('10').should.be.false;
            });
        });

        describe('#function()', function() {

            it('Should return true for a function', function() {
                you.are.a.function(function() {}).should.be.true;
            });

            it('Should return false for a string', function() {
                you.are.a.function('test').should.be.false;
            });

            it('Should return false for an object', function() {
                you.are.a.function({}).should.be.false;
            });

            it('Should return false for an array', function() {
                you.are.a.function([]).should.be.false;
            });

            it('Should return false for a number', function() {
                you.are.a.function(10).should.be.false;
            });
        });
    });
});
