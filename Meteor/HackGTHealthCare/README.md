clinical-ui-crud-table
================

Meteor applet demonstrating a CRUD best-practice using the Blaze layout, Bootstrap3, sortable/searchable tables, a card based UI, and various other goodies.

Installation
------------------------

````sh
# Should be as simple as cloning the repository...
git clone https://github.com/awatson1978/clinical-ui-crud-table.git

# And then running it...
sudo mrt
````


Refactoring
------------------------

````sh
# you'll want to search through the application, and refactor the following terms
majorEvents > foos
majorEvent > foo
MajorEvents > Foos
MajorEvent > Foo
````

``command-d`` does a multi-select in many popular editors.


Licensing
------------------------

MIT License. Use as you wish, including for commercial purposes.


TODO / Low Hanging Fruit
------------------------
* Rewrite this readme so its not this other persons thing
* Ensure Meteor.Accounts is added as a dependency in the repo (might need to push changes from dev's local copy)
* Currently events list "Hospital Details" link routes through the MajorEvent Details page. Preferably it would ignore the majordetails if you click on the link
* We should be able to generate a list of major events by tag
* Go through adding each type, make sure initial data is formatted the same as inputted data
* Suggest tags based on current tags
* Picklist of states for input
* Picklist of hospitals when adding majorevent
* Picklist of drugs when adding majorevent (only allow picklist values - aka already created drugs)
* Check logic for inputting each type, to make sure everything [still] works (specifically tags and drugs on majorevent - they got restructured)
* Make "Good" and "Bad" labels in drug list


Futre Work / Stretch Goals
------------------------
* Logic around city/state/zip input, since you shouldn't have to put in all of them
* Change matching tags (when searching) to label-info to show that they are matching
* Navbar color splash
