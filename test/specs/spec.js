const chai = require('chai');
const expect = chai.expect;

describe ('API Demos', () => {
  it('app heading should be "API Demos"', () => {
    const appHeading = $('//android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView').getText();
    console.log(appHeading);
    expect(appHeading).to.be.equal('API Demos');
  });

  it('app should have 11 configrations', () => {
    const listOfConfigurations = $$('//android.widget.ListView/android.widget.TextView');
    expect(listOfConfigurations.length).to.be.equal(11);
  })

  it('OS configuration should contain 4 options', () => {
    $('~OS').click();
    const options = $$('//android.widget.ListView/android.widget.TextView');
    expect(options.length).to.be.equal(4);
  });

  it('should send message', () => {
    $('~SMS Messaging').click();
    const phoneNumberField = $('//*[@content-desc="Recipient #"]/following-sibling::android.widget.EditText');
    const messageField = $('//*[@content-desc="Message Body"]/following-sibling::android.widget.EditText');
    phoneNumberField.setValue('123456789');
    messageField.setValue('Hello!');
    $('~Send').click();
    const messageStatus = $('//*[contains(@resource-id,"sms_status")]').getText();
    expect(messageStatus).to.be.equal('Message sent!');
  })
});
