@musicfestival
Feature: Music Festical List


  Scenario: As a user,  I should be able to see the musical festival line up
    Given I am on the music festival list page
    Then I should be able to see band list

  Scenario: As a user,  I should be able to see all the bands line up inside a music festival
    Given I am on the music festival list page
    Then I should see bands listed inside a music festival

  Scenario: As a user,  I should be able to see all the bands with recordLabel line up in a music festival
    Given I am on the music festival list page
     Then I should see bands listed along with record label inside music festival

  Scenario: As a user, every band must be assigend to a music festival
    Given I am on the music festival list page
    Then I should not see "Critter Girls" band without any music festival

    


   


