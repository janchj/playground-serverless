'use strict';

const Alexa = require('alexa-sdk');

const facts = require('./facts');

var SKILL_NAME = "Romanian Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a fact about Romania, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factIndex = Math.floor(Math.random() * facts.length);
        const randomFact = facts[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = null; // undefined
    alexa.registerHandlers(handlers);
    alexa.execute();
};
