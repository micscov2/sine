<?php
function get_sql($key)
{
    if ($key == "word") {
        return "SELECT word FROM words";
    }
}

function get_sql_params($key, $params) 
{
    //check for sql injection here
    if ($key == "user") {
        return "SELECT * FROM users WHERE username = "."'$params'";
    } 
}

function get_sql_users_table_insert($key1, $val1, $val2) 
{
    return "INSERT INTO  ".$key1." VALUES (0,"."'$val1',".$val2.")";
}

function get_sql_signup($arg1, $arg2, $arg3, $arg4, $arg5)
{
    return "INSERT INTO users VALUES ("."'$arg1',"."'$arg2',"."'$arg3',"."'$arg4',"."'$arg5'".")";
}

function create_user_specific_table($user) {
    return "CREATE TABLE ".$user." (sn int NOT NULL AUTO_INCREMENT PRIMARY KEY, typed_date date NOT NULL, score int NOT NULL)";
}

function get_max_score($key) 
{
    return "SELECT max(score) as mx_ct from ".$key;
}

function get_rows_count($key) 
{
    return "SELECT count(*) as ct_ct from ".$key;
}

function get_url() 
{
    return "localhost";    
}

function get_username() 
{
    return "rms_app";
}

function get_passkey() 
{
    return "rmsapp123";
}

function get_db_name() 
{
    return "typeddb";
}
?>