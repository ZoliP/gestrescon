<?php 
    require 'connect.php';

    
    function executeGET($connection, $queryString) {
        $idSite = $_GET['idSite']; // gets the value of the parameter from the url in the App.js 
        $employee = [];       
        $command = "SELECT move_employees.id, employees.firstName, employees.lastName, employees.pricePerHour, move_employees.value FROM employees,move_employees WHERE employees.id = move_employees.idEmployee and move_employees.idSite = $idSite";
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowemployee = mysqli_fetch_assoc($result)) {               
                $employee[] = $rowemployee;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($employee);
    }    

    $metoda = $_SERVER['REQUEST_METHOD'];
    $queryString = $_SERVER['QUERY_STRING']; //the query string via which page was accessed 
    switch ($metoda) {
        case 'GET':
            executeGET($connection, $queryString);  
            break;       
    }

    mysqli_close($connection);
?>