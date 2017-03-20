<?php
/**
 * Created by PhpStorm.
 * User: Julius Alvarado
 * Date: 3/19/2017
 * Time: 6:31 PM
 */

if(array_key_exists('token', $_GET)) {
    if($_GET['token'] == 'public') {
        echo 'PUBLIC get-quiz-data.php: You hit the correct endpoint \^_^/';
    } else {
        // TODO: query the database to see if token exists to return special data.
    }
}



//