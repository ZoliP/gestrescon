<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $jobs = [];
        $command = "SELECT * FROM jobs ORDER BY id ASC";
        
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowtransport = mysqli_fetch_assoc($result)) {               
                $jobs[] = $rowtransport;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($jobs);
    }  
    
   

    function readJobs() {
        $json = file_get_contents('php://input');
        // the association array is created $dealerData
        $dealerData = json_decode($json, true); 
        // print_r($dealerData);
        return $dealerData;
    }
    
    $metoda = $_SERVER['REQUEST_METHOD'];
    switch ($metoda) {
        case 'GET':
            executeGET($connection);  
            break;
        
       
    }

    mysqli_close($connection);
?>