module.exports = {
  '@tags': ['nojs'],
  'JavaScript is disabled': function (browser) {
    browser
      .url('http://sampleapp.bridge:3000')
      .click('.link')
      .assert.containsText('#heading', 'JavaScript is disabled')
      .end();
  }
};