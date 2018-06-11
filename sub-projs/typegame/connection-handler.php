<?php
//Connecting to mysql db 

//dummy connection to mysql server, for creating object, it was throwing error if I was doing $con = ''
//I was blindly using die() function without knowing what is used for
//Description : die() -> Print a message and exit the current script
$con = mysqli_connect('', '', '');
//syntax of function calling in php
initProcess();
//another function call in php using arguments this time
printElementsOfTable("personalTable");
//close connection otherwise it may remain open causing problems which I am not aware of
$con -> close();

/**
* function definition format in php
* used for creating connection to server, creating db if not present
* selecting the db, creating a table if not present
*/
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
	$record = "CREATE TABLE personalTable (name VARCHAR(30) NOT NULL)";
	if (! $GLOBALS['con'] -> query("SELECT *FROM personalTable")) {
		if ($GLOBALS['con'] -> query($record) == FALSE) {
			die('Couldnt create or check table');
		}
	}
}

/**
* adding an entry to the table
*/
function addEntry($userToBeAdded) 
{
	//just notice how $userToBeAdded is written in the $record variable
	$record = "INSERT INTO personalTable (name) VALUES ('$userToBeAdded')";
	if ($GLOBALS['con'] -> query($record) == FALSE) {
		die('Couldnt Add Entry in the Table');
	}
}

/**
* printing elements of a table
*/
function printElementsOfTable($tableName) 
{
	//notice how $tableName is used in $record variable 
	$record = "SELECT *FROM "."".$tableName;

	if ($res = $GLOBALS['con'] -> query($record)) {
		//using $row variable to extract a row from $res
		while ($row = $res -> fetch_assoc()) {
			echo $row['name']."<br />";
		}
	} else {
		die('Couldnt find any rows in table personalTable');
	}
}
?>