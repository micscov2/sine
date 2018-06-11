PTIR dashboard

Stories:
1. Stores PTIR with its id, story, description, status, date
2. Can see all the PTIR registered till now
3. Uses mysql as persistance layer

Release notes:
1. Do not use characters like single quotes (') inside PTIR description
2. Start using index.html
3. index.php is kind of helper php-script with only logic for adding an entry.
4. Other logic for php is in request-handler.php
5. The PTIR id must be 6 digits long, otherwise it will print improper data

Bugs
1. It will print  mohd_read | mohd_read | mohd_read | mohd_read | mohd_read |, if there are no PTIRs to be shown
2. Improper exporting in csv format
3. Instead of duplicate entry, it prints invalid entry
4. Doesn't reload page automatically on deletion of entry
