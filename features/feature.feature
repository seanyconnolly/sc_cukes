Feature: Example feature

  @SingleFlight
  Scenario: Reading documentation
    Given I go to google home page
    When I search for "ryanair"
    Then I should see "ryanair - Google Search" as the page title
