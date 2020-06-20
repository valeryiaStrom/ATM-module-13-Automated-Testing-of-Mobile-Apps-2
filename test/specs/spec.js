const chai = require('chai');
const expect = chai.expect;

describe ('API Demos', () => {
  it('app heading should be "API Demos"', () => {
    const appHeading = $('//*[contains(@resource-id,"action_bar")]/android.widget.TextView').getText();
    console.log(appHeading);
    expect(appHeading).to.be.equal('API Demos');
  });

  it('app should have 11 configrations', () => {
    const listOfConfigurations = $$('//*[contains(@resource-id,"list")]/android.widget.TextView');
    expect(listOfConfigurations.length).to.be.equal(11);
  })

  it('OS configuration should contain 4 options', () => {
    $('~OS').click();
    const options = $$('//*[contains(@resource-id,"list")]/android.widget.TextView');
    expect(options.length).to.be.equal(4);
  });

  it('should send message', () => {
    $('~SMS Messaging').click();
    const phoneNumberField = $('//android.widget.EditText[contains(@resource-id,"sms_recipient")]');
    const messageField = $('//android.widget.EditText[contains(@resource-id,"sms_content")]');
    phoneNumberField.setValue('123456789');
    messageField.setValue('Hello!');
    $('~Send').click();
    const messageStatus = $('//*[contains(@resource-id,"sms_status")]').getText();
    expect(messageStatus).to.be.equal('Message sent!');
  })
});
