<?php

require 'request-handler.php';
initProcess();
if (isset($_GET['ret'])) {
	printElementsOfTable('ptir_stories');
} else if (isset($_GET['rowToBeDeleted'])) {
	deleteFromDb($_GET['rowToBeDeleted']);
} else {
	addEntry();
}
$con -> close();
/**
* adding an entry to the table
*/
function addEntry() 
{
    initProcess();
	//just notice how $userToBeAdded is written in the $record variable
	$record = "INSERT INTO ptir_stories (id, story, desc_file, status, dated) 
		VALUES ('".$_GET['firstEl1']."', '".$_GET['firstEl2']."', '".$_GET['firstEl3']."', '".$_GET['firstEl4']."', '".$_GET['firstEl5']."')";
	if ($GLOBALS['con'] -> query($record) == FALSE) {
		die('Couldnt Add Entry in the Table');
	}
}
?>