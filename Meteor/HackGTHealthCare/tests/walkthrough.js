// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "Walkthrough" : function (client) {

    var clientName = "Test Client - " + Math.random().toString(10).slice(2,6);

    client
      .url("http://localhost:3000")
      .waitForElementVisible("body", 1000)
      .verify.elementPresent('#navbarHeader')
      .verify.elementPresent('#mainPanel')

      .verify.elementPresent('#appTitle')
      .verify.elementPresent('#majorEventsListLink')
      .verify.elementPresent('#newMajorEventLink')

      .verify.containsText('#appTitle', "Clinical UI - Crud Table")
      //========================================================================
      // CUSTOMER LIST PAGE (NEW)

      .verify.elementPresent('#majorEventsListPage', "//----------------------------------------------------------")
      .verify.elementPresent('#majorEventsListPage', "//CUSTOMER LIST PAGE (NEW)")

      .verify.elementPresent('#majorEventsTable')
      .verify.elementPresent('#majorEventsTableHeader')
      .verify.elementPresent('#majorEventsTableHeaderRow')
      .verify.elementPresent('#majorEventsSearchInput')
      .verify.elementPresent('#majorEventsListPaginationButtons')
      .verify.elementPresent('#majorEventsListLimitButtons')

      .verify.elementPresent('#firstNameColumn')
      .verify.elementPresent('#lastNameColumn')
      .verify.elementPresent('#companyColumn')
      .verify.elementPresent('#zipColumn')
      .verify.elementPresent('#emailColumn')

      .verify.containsText("#firstNameColumn", "First Name")
      .verify.containsText("#lastNameColumn", "Last Name")
      .verify.containsText("#companyColumn", "Company")
      .verify.containsText("#zipColumn", "Zip")
      .verify.containsText("#emailColumn", "Email")

      .setValue("#majorEventsSearchInput", "Inafuku")

      .verify.containsText('#majorEventsTable tr td:nth-child(1)', "Deshawn")
      .verify.containsText('#majorEventsTable tr td:nth-child(2)', 'Inafuku')
      .verify.containsText('#majorEventsTable tr td:nth-child(3)', 'Telair Div Of Teleflex Inc')
      .verify.containsText('#majorEventsTable tr td:nth-child(4)', '78408')
      .verify.containsText('#majorEventsTable tr td:nth-child(5)', 'deshawn@inafuku.com')

      .click('#newMajorEventLink')

      //========================================================================
      // CUSTOMER UPSERT PAGE (NEW)


      .waitForElementVisible("#majorEventUpsertCard", 1000)

        .verify.elementPresent('#majorEventUpsertCard', "//----------------------------------------------------------")
        .verify.elementPresent('#majorEventUpsertCard', "//CUSTOMER UPSERT PAGE (NEW)")

        .verify.elementPresent('#firstNameLabel')
        .verify.elementPresent('#lastNameLabel')
        .verify.elementPresent("#companyLabel")
        .verify.elementPresent('#addressLabel')
        .verify.elementPresent("#cityLabel")
        .verify.elementPresent('#phoneLabel')
        .verify.elementPresent("#webLabel")
        .verify.elementPresent('#countyLabel')
        .verify.elementPresent("#stateLabel")
        .verify.elementPresent('#zipLabel')
        .verify.elementPresent('#faxLabel')
        .verify.elementPresent('#emailLabel')
        .verify.elementPresent('#notesLabel')

        .verify.containsText('#firstNameLabel', "First Name")
        .verify.containsText('#lastNameLabel', "Last Name")
        .verify.containsText("#companyLabel", "Company")
        .verify.containsText('#addressLabel', "Address")
        .verify.containsText("#cityLabel", "City")
        .verify.containsText('#phoneLabel', "Phone")
        .verify.containsText("#webLabel", "Web")
        .verify.containsText('#countyLabel', "County")
        .verify.containsText("#stateLabel", "State")
        .verify.containsText('#zipLabel', "Zip")
        .verify.containsText('#faxLabel', "Fax")
        .verify.containsText('#emailLabel', "Email")
        .verify.containsText('#notesLabel', "Notes")

        .verify.elementPresent('#firstNameInput')
        .verify.elementPresent('#lastNameInput')
        .verify.elementPresent("#companyInput")
        .verify.elementPresent('#addressInput')
        .verify.elementPresent("#cityInput")
        .verify.elementPresent('#phoneInput')
        .verify.elementPresent("#webInput")
        .verify.elementPresent('#countyInput')
        .verify.elementPresent("#stateInput")
        .verify.elementPresent('#zipInput')
        .verify.elementPresent('#faxInput')
        .verify.elementPresent('#emailInput')
        .verify.elementPresent('#notesInput')

        .verify.containsText('#firstNameInput', "")
        .verify.containsText('#lastNameInput', "")
        .verify.containsText("#companyInput", "")
        .verify.containsText('#addressInput', "")
        .verify.containsText("#cityInput", "")
        .verify.containsText('#phoneInput', "")
        .verify.containsText("#webInput", "")
        .verify.containsText('#countyInput', "")
        .verify.containsText("#stateInput", "")
        .verify.containsText('#zipInput', "")
        .verify.containsText('#faxInput', "")
        .verify.containsText('#emailInput', "")
        .verify.containsText('#notesInput', "")

        .verify.elementPresent('#upsertMajorEventButton')
        .verify.containsText('#upsertMajorEventButton', "Save MajorEvent")

        .setValue('#firstNameInput', "Jane")
        .setValue('#lastNameInput', "Doe")
        .setValue("#companyInput", "ACME, Inc.")
        .setValue('#addressInput', "123 Main St.")
        .setValue("#cityInput", "Anywhere")
        .setValue('#phoneInput', "888-555-1234")
        .setValue("#webInput", "http://www.acme.com")
        .setValue('#countyInput', "Hudson")
        .setValue("#stateInput", "NJ")
        .setValue('#zipInput', "07307")
        .setValue('#faxInput', "818-555-1233")
        .setValue('#emailInput', "janedoe@acme.com")
        .setValue('#notesInput', "Lorem textum...")

        .click('#upsertMajorEventButton')


      //========================================================================
      // CUSTOMER PREVIEW PAGE


      .waitForElementVisible("#majorEventPreviewPage", 1000)

      .verify.elementPresent('#majorEventPreviewPage', "//----------------------------------------------------------")
      .verify.elementPresent('#majorEventPreviewPage', "//CUSTOMER PREVIEW PAGE")


      // .verify.elementPresent('#firstNameLabel')
      // .verify.elementPresent('#lastNameLabel')
      // .verify.elementPresent("#companyLabel")
      // .verify.elementPresent('#addressLabel')
      // .verify.elementPresent("#cityLabel")
      // .verify.elementPresent('#phoneLabel')
      // .verify.elementPresent("#webLabel")
      // .verify.elementPresent('#countyLabel')
      // .verify.elementPresent("#stateLabel")
      // .verify.elementPresent('#zipLabel')
      // .verify.elementPresent('#faxLabel')
      // .verify.elementPresent('#emailLabel')
      // .verify.elementPresent('#notesLabel')

      .verify.elementPresent('#firstNameText')
      .verify.elementPresent('#lastNameText')
      .verify.elementPresent("#companyText")
      .verify.elementPresent('#addressText')
      .verify.elementPresent("#cityText")
      .verify.elementPresent('#phoneText')
      .verify.elementPresent("#webText")
      .verify.elementPresent("#stateText")
      .verify.elementPresent('#zipText')
      .verify.elementPresent('#emailText')
      .verify.elementPresent('#notesText')
      //.verify.elementPresent('#countyText')
      //.verify.elementPresent('#faxText')

      // .verify.containsText('#firstNameLabel', "First Name")
      // .verify.containsText('#lastNameLabel', "Last Name")
      // .verify.containsText("#companyLabel", "Company")
      // .verify.containsText('#addressLabel', "Address")
      // .verify.containsText("#cityLabel", "City")
      // .verify.containsText('#phoneLabel', "Phone")
      // .verify.containsText("#webLabel", "Web")
      // .verify.containsText('#countyLabel', "County")
      // .verify.containsText("#stateLabel", "State")
      // .verify.containsText('#zipLabel', "Zip")
      // .verify.containsText('#faxLabel', "Fax")
      // .verify.containsText('#emailLabel', "Email")
      // .verify.containsText('#notesLabel', "Notes")

      .verify.containsText('#firstNameText', "Jane")
      .verify.containsText('#lastNameText', "Doe")
      .verify.containsText("#companyText", "ACME, Inc.")
      .verify.containsText('#addressText', "123 Main St.")
      .verify.containsText("#cityText", "Anywhere")
      .verify.containsText('#phoneText', "888-555-1234")
      .verify.containsText("#webText", "http://www.acme.com")
      .verify.containsText("#stateText", "NJ")
      .verify.containsText('#zipText', "07307")
      .verify.containsText('#emailText', "janedoe@acme.com")
      .verify.containsText('#notesText', "Lorem textum...")
      //.verify.containsText('#countyText', "Hudson")
      //.verify.containsText('#faxText', "818-555-1233")

      .verify.elementPresent('#majorEventEditButton')
      .verify.containsText('#majorEventEditButton', "Edit MajorEvent")

      .verify.elementPresent('#majorEventDeleteButton')
      .verify.containsText('#majorEventDeleteButton', "Delete MajorEvent")

      .click("#majorEventEditButton").pause(1000)


    //========================================================================
    // CUSTOMER UPSERT PAGE (EDIT)

    .waitForElementVisible("#majorEventUpsertPage", 1000)

      .verify.elementPresent('#majorEventUpsertPage')
      .verify.elementPresent('#majorEventUpsertPage', "//----------------------------------------------------------")
      .verify.elementPresent('#majorEventUpsertPage', "//CUSTOMER UPSERT PAGE (EDIT)")

      .verify.containsText('#firstNameLabel', "First Name")
      .verify.containsText('#lastNameLabel', "Last Name")
      .verify.containsText("#companyLabel", "Company")
      .verify.containsText('#addressLabel', "Address")
      .verify.containsText("#cityLabel", "City")
      .verify.containsText('#phoneLabel', "Phone")
      .verify.containsText("#webLabel", "Web")
      .verify.containsText('#countyLabel', "County")
      .verify.containsText("#stateLabel", "State")
      .verify.containsText('#zipLabel', "Zip")
      .verify.containsText('#faxLabel', "Fax")
      .verify.containsText('#emailLabel', "Email")
      .verify.containsText('#notesLabel', "Notes")

      .verify.elementPresent('#firstNameInput')
      .verify.elementPresent('#lastNameInput')
      .verify.elementPresent("#companyInput")
      .verify.elementPresent('#addressInput')
      .verify.elementPresent("#cityInput")
      .verify.elementPresent('#phoneInput')
      .verify.elementPresent("#webInput")
      .verify.elementPresent('#countyInput')
      .verify.elementPresent("#stateInput")
      .verify.elementPresent('#zipInput')
      .verify.elementPresent('#faxInput')
      .verify.elementPresent('#emailInput')
      .verify.elementPresent('#notesInput')

      .verify.attributeEquals('#firstNameInput', "value", "Jane")
      .verify.attributeEquals('#lastNameInput', "value", "Doe")
      .verify.attributeEquals("#companyInput", "value", "ACME, Inc.")
      .verify.attributeEquals('#addressInput', "value", "123 Main St.")
      .verify.attributeEquals("#cityInput", "value", "Anywhere")
      .verify.attributeEquals('#phoneInput', "value", "888-555-1234")
      .verify.attributeEquals("#webInput", "value", "http://www.acme.com")
      .verify.attributeEquals('#countyInput', "value", "Hudson")
      .verify.attributeEquals("#stateInput", "value", "NJ")
      .verify.attributeEquals('#zipInput', "value", "07307")
      .verify.attributeEquals('#faxInput', "value", "818-555-1233")
      .verify.attributeEquals('#emailInput', "value", "janedoe@acme.com")
      .verify.attributeEquals('#notesInput', "value", "Lorem textum...")


      .clearValue('#firstNameInput')
      .clearValue('#lastNameInput')
      .clearValue("#companyInput")
      .clearValue('#addressInput')
      .clearValue("#cityInput")
      .clearValue('#phoneInput')
      .clearValue("#webInput")
      .clearValue('#countyInput')
      .clearValue("#stateInput")
      .clearValue('#zipInput')
      .clearValue('#faxInput')
      .clearValue('#emailInput')
      .clearValue('#notesInput')

      .setValue('#firstNameInput', "Janice")
      .setValue('#lastNameInput', "Doe")
      .setValue("#companyInput", "Sprocket, Co.")
      .setValue('#addressInput', "321 First St.")
      .setValue("#cityInput", "Anyville")
      .setValue('#phoneInput', "888-444-1234")
      .setValue("#webInput", "http://www.acme.com")
      .setValue('#countyInput', "Hudson")
      .setValue("#stateInput", "NJ")
      .setValue('#zipInput', "07307")
      .setValue('#faxInput', "818-444-6789")
      .setValue('#emailInput', "janice@acme.com")
      .setValue('#notesInput', "Textica foretica flom...")

      .verify.elementPresent('#upsertMajorEventButton')
      .click('#upsertMajorEventButton')


      //========================================================================
      // CUSTOMER PREVIEW PAGE


      .waitForElementVisible("#majorEventPreviewPage", 1000)
      .verify.elementPresent('#majorEventPreviewPage', "//----------------------------------------------------------")
      .verify.elementPresent('#majorEventPreviewPage', "//CUSTOMER PREVIEW PAGE")

      .verify.elementPresent('#firstNameText')
      .verify.elementPresent('#lastNameText')
      .verify.elementPresent("#companyText")
      .verify.elementPresent('#addressText')
      .verify.elementPresent("#cityText")
      .verify.elementPresent('#phoneText')
      .verify.elementPresent("#webText")
      .verify.elementPresent("#stateText")
      .verify.elementPresent('#zipText')
      .verify.elementPresent('#emailText')
      .verify.elementPresent('#notesText')

      .verify.containsText('#firstNameText', "Janice")
      .verify.containsText('#lastNameText', "Doe")
      .verify.containsText("#companyText", "Sprocket, Co.")
      .verify.containsText('#addressText', "321 First St.")
      .verify.containsText("#cityText", "Anyville")
      .verify.containsText('#phoneText', "888-444-1234")
      .verify.containsText("#webText", "http://www.acme.com")
      //.verify.containsText('#countyText', "Hudson")
      .verify.containsText("#stateText", "NJ")
      .verify.containsText('#zipText', "07307")
      //.verify.containsText('#faxText', "818-444-6789")
      .verify.containsText('#emailText', "janice@acme.com")
      .verify.containsText('#notesText', "Textica foretica flom...")

      .verify.elementPresent('#majorEventEditButton')
      .verify.elementPresent('#majorEventDeleteButton')

      .click("#majorEventsListLink").pause(1000)


      //========================================================================
      // CUSTOMER LIST PAGE (NEW)

      .verify.elementPresent('#majorEventsListPage', "//----------------------------------------------------------")
      .verify.elementPresent('#majorEventsListPage', "//CUSTOMERS LIST PAGE")

      .verify.elementPresent('#majorEventsTable')
      .verify.elementPresent('#majorEventsTableHeaderRow')
      .verify.elementPresent('#majorEventsSearchInput')

      .clearValue('#majorEventsSearchInput')
      .setValue("#majorEventsSearchInput", "Janice")

      .verify.containsText('#majorEventsTable tr td:nth-child(1)', "Janice")
      .verify.containsText('#majorEventsTable tr td:nth-child(2)', 'Doe')
      .verify.containsText('#majorEventsTable tr td:nth-child(3)', 'Sprocket, Co.')
      .verify.containsText('#majorEventsTable tr td:nth-child(4)', '07307')
      .verify.containsText('#majorEventsTable tr td:nth-child(5)', 'janice@acme.com')

      .end();
  }
};
