<?php
/**
* function definition format in php
* used for creating connection to server, creating db if not present
* selecting the db, creating a table if not present
*/
$con = mysqli_connect('', '', '');

function initProcess() 
{
	//$GLOBALS[varName] <- this syntax is used for accessing global variable 
	//*******Important********
	//defaut port for mysql server is 3306, username is 'root'
	$GLOBALS['con'] = mysqli_connect('localhost:3306', 'root', 'rootphp');
	//if something erroneous happens, similar to other languages php returns something which is 
	//equal to false
	if (! $GLOBALS['con']) {
		die('Couldnt connect to server');
	}
	
	//creating database if not exists
	$record = "CREATE DATABASE IF NOT EXISTS personalDB";
	if ($GLOBALS['con'] -> query($record) == FALSE) {
		die('Couldnt create or check databsae');
	}
	//selecting database
	mysqli_select_db($GLOBALS['con'], 'personalDB');

	//creating table 
	//*****Important******
	//This wasn't working earlier
	// CREATE TABLE personalTable (key INT, name VARCHAR(30) NOT NULL)
	$record = "CREATE TABLE ptir_stories (id VARCHAR(30) NOT NULL PRIMARY KEY, story VARCHAR(200) NOT NULL, 
		desc_file VARCHAR(3000) NOT NULL, status VARCHAR(20) NOT NULL, dated VARCHAR(30) NOT NULL)";
	if (! $GLOBALS['con'] -> query("SELECT *FROM ptir_stories")) {
		if ($GLOBALS['con'] -> query($record) == FALSE) {
			die('Couldnt create or check table');
		}
	}
}

/**
* printing elements of a table
*/
function printElementsOfTable($tableName) 
{
	//notice how $tableName is used in $record variable 
	$record = "SELECT *FROM "."".$tableName;
	//$record = "DROP TABLE "."".$tableName;
	if ($res = $GLOBALS['con'] -> query($record)) {
		//using $row variable to extract a row from $res
		while ($row = $res -> fetch_assoc()) {
			echo $row['id'].' | '.$row['story'].' | '.$row['desc_file'].' | '.$row['status'].' | '.$row['dated']."<br />";
		}
	} else {
		die('Couldnt find any rows in table personalTable');
	}
}

//function updateMethod() 
//{
//	//notice how $tableName is used in $record variable 
//	$record = "SELECT *FROM personalTableM";
//	$newValue = '';
//
//	if ($res = $GLOBALS['con'] -> query($record)) {
//		//using $row variable to extract a row from $res
//		while ($row = $res -> fetch_assoc()) {
//			//echo $row['name']."<br />";
//			$newValue = $row['name'];
//		}
//	} else {
//		die('Couldnt find any rows in table personalTable');
//	}
//
//	echo $newValue;
//	if ($newValue > 5) {
//		$newValue = $newValue - 5;
//		$record = "UPDATE personalTableM SET name=".($newValue)." where name=".($newValue+5);
//	} else {
//		$record = "UPDATE personalTableM SET name=50 where name=5";
//	}
//	
//	if ($GLOBALS['con'] -> query($record)) {
//	} else {
//		die('Couldnt find any rows in table personalTable');
//	}
//}


function deleteFromDb($rowToBeDeleted) 
{
	$record = "DELETE FROM ptir_stories WHERE id = ".$rowToBeDeleted;

	if ($GLOBALS['con'] -> query($record) == FALSE) {
		die('Couldnt Delete Entry from the Table');
	} 
} 
?>
