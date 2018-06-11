<?php
//A collection of persistance functions
function get_connection($host, $username, $passkey, $db_name)
{
    $conn = new mysqli($host, $username, $passkey, $db_name);
    
    return $conn;
}

function execute_query($conn, $sql, $param) 
{
    $res = $conn -> query($sql);
    $ss = "";
//    echo $sql;
   
    if ($param == "no") {
        return $res;
    }
    
    if ($param == "new_table") {
        return $res;
    }
    
    if ($param == "ret") {
        return $res;
    }
    
    if ($param == "uadds") {
        return $res;
    }
    
    if ($param == "ret") {
        return $res;
    }
    
    if ($param == "ret1" || $param == "ret2") {
        if ($res && $res -> num_rows > 0) {
            if ($res) {
                while ($row = $res -> fetch_assoc()) {
                    $ss = $ss.$row[$param].",";
                }
            } 
        } else {
                $ss = "-1";
        } 
        
        return $ss;
    }
    
    if ($res && $res -> num_rows > 0) {
        if ($res) {
            while ($row = $res -> fetch_assoc()) {
                $ss = $ss.$row[$param].",";
            }
        } 
    } else {
        $ss = "-1";
    } 
    
    return $ss;
}

function create($conn, $sql) 
{
    execute_query($conn, $sql, "new_table");
}

function read($conn, $sql) 
{
    execute_query($conn, $sql);   
}

function update($conn, $sql) 
{
    execute_query($conn, $sql);
}

function delete($conn, $sql)
{
    execute_query($conn, $sql);
}
?>