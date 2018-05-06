const assert = require('chai').assert;
const app = require('../index').runInstruction;

describe('App', function(){
    it('find the list of companies by Location (state only)', function(){
        assert.equal(app("locate", "MD", (require("../data.json"))), 8);
    });
    it('find the list of companies before a specific year', function(){
        assert.equal(app("find_before", "1999", (require("../data.json"))), 107);
    });
    it('find the list of companies after a specific year', function(){
        assert.equal(app("find_after", "2000", (require("../data.json"))), 204);
    });
    it('find companies between certain numbers', function(){
        assert.equal(app("find_companies_between_size", "1,001-5,000", (require("../data.json"))), 17);
    });
    it('find all companies by Company Category', function(){
        assert.equal(app("find_type", "Data/Technology", (require("../data.json"))), 59);
    });
});