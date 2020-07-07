<?php 
    require 'connect.php';

    
    function executeGET($connection,$queryString) {
        $idSite = $_GET['idSite'];
        $transport = [];       
        $command = "SELECT move_transports.id, transports.nameOfMaterial, move_transports.value FROM transports, move_transports WHERE transports.id = move_transports.idTransport and move_transports.idSite = $idSite";
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowtransport = mysqli_fetch_assoc($result)) {               
                $transport[] = $rowtransport;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($transport);
    }    

    $metoda = $_SERVER['REQUEST_METHOD'];
    $queryString = $_SERVER['QUERY_STRING'];
    switch ($metoda) {
        case 'GET':
            executeGET($connection, $queryString);  
            break;       
    }

    mysqli_close($connection);
?>