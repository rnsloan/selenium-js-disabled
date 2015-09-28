module.exports = {
  '@tags': ['yesjs'],
  'JavaScript is enabled': function (browser) {
    browser
      .url('http://sampleapp.bridge:3000')
      .click('.link')
      .assert.containsText('#heading', 'JavaScript is enabled')
      .end();
  }
};
