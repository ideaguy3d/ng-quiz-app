<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 3/19/2017
 * Time: 6:31 PM


header('Content-type: application/json');
echo ")]}'\n";
*/
if(array_key_exists('jtoken', $_GET)) {
    if($_GET['jtoken'] == 'public') {
        echo 'PUBLIC get-quiz-data.php: You hit the correct endpoint \^_^/';
    } else {
        // TODO: query the database to see if token exists to return special data.
    }
}

?>