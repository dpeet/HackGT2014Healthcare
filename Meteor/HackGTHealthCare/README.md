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


TODO
------------------------
* Rewrite this readme so its not this other persons thing
* Ensure Meteor.Accounts is added as a dependency in the repo (might need to push changes from dev's local copy)


Futre Work
------------------------
* Rewrite db calls with proper joins instead of hacking it up (some list pages, detail pages)
