<?php 
    require 'connect.php';

    
    function executeGET($connection, $queryString) {
        $idSite = $_GET['idSite'];
        $tool = [];       
        $command = "SELECT move_tools.id, tools.nameOfTool, tools.pricePerHour, move_tools.value FROM tools, move_tools WHERE tools.id = move_tools.idTool AND move_tools.idSite = $idSite";
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowTool = mysqli_fetch_assoc($result)) {               
               $tool[] = $rowTool;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($tool);
    }    

    $metoda = $_SERVER['REQUEST_METHOD'];
    $queryString = $_SERVER['QUERY_STRING']; //
    switch ($metoda) {
        case 'GET':
            executeGET($connection, $queryString);  
            break;       
    }

    mysqli_close($connection);
?>