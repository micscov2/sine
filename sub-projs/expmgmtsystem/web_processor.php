<?php
require("db_processor.php");
require("sql_generator.php");

if (array_key_exists("q", $_REQUEST)) {
    if ($_REQUEST['q'] == "word") {
        $conn = get_connection(get_url(), get_username(), get_passkey(), get_db_name());
        $sql = get_sql("word");
        $res = execute_query($conn, $sql, "word");
        echo $res;
    } 
} else if (array_key_exists("u", $_REQUEST)){
    $user = $_REQUEST['u'];
    $conn = get_connection(get_url(), get_username(), get_passkey(), get_db_name());
    $sql = get_sql_params("user", $user);
    $passwd = execute_query($conn, $sql, "passkey");
    $date_of_registr = execute_query($conn, $sql, "date_of_registr");
    $sec_ques_1 = execute_query($conn, $sql, "sec_ques_1");
    $sec_ques_2 = execute_query($conn, $sql, "sec_ques_2");
    echo $passwd.$date_of_registr.$sec_ques_1.$sec_ques_2;
} else if (array_key_exists("u1", $_REQUEST)) {
    $user = $_REQUEST["u1"];
    $score = $_REQUEST["score"];
    $c_date = $_REQUEST["c_date"];
    $conn = get_connection(get_url(), get_username(), get_passkey(), get_db_name());
    $sql = get_sql_users_table_insert($user, $c_date, $score);
    $res = execute_query($conn, $sql, "uadds");
    echo $res;
}  else if (array_key_exists("u2", $_REQUEST)) {
    if (array_key_exists("u22", $_REQUEST)) {
        $user = $_REQUEST["u2"];
        $conn = get_connection(get_url(), get_username(), get_passkey(), get_db_name());
        $sql = get_max_score($user);
        $res = execute_query($conn, $sql, "mx_ct");
        echo $res;
    } else {
        $user = $_REQUEST["u2"];
        $conn = get_connection(get_url(), get_username(), get_passkey(), get_db_name());
        $sql = get_rows_count($user);
        $res = execute_query($conn, $sql, "ct_ct");
        echo $res;
    }
} else {
    $user = $_REQUEST["username"];
    $passwd = $_REQUEST["passkey"];
    $date = $_REQUEST["date_of_registr"];
    $sec_ques_1 = $_REQUEST["sec_ques_1"];
    $sec_ques_2 = $_REQUEST["sec_ques_2"];
    
    $conn = get_connection(get_url(), get_username(), get_passkey(), get_db_name());
    $sql = get_sql_signup($user, $passwd, $date, $sec_ques_1, $sec_ques_2);
    $res = execute_query($conn, $sql, "no");
    
    $sql = create_user_specific_table($user);
    create($conn, $sql);
    echo $res;
}
?>