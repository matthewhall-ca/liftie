var should = require('should');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/lifts/parse')('cataloochee');

/*global describe, it */
describe('parse cataloochee', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/cataloochee.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
        'Easy Way Lift (Triple)': 'open',
        'Omigosh (Double)': 'open',
        'Rock Island Line (Quad)': 'open',
        'Wolf Creek (Conveyor)': 'open',
        'Beginners Luck (Conveyor)': 'open'
      };
      should.exist(status);
      status.should.eql(expected);
      done(err);
    }));
  });
});
