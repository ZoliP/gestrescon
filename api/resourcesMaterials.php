<?php 
    require 'connect.php';

    
    function executeGET($connection, $queryString) {       
        $idSite = $_GET['idSite'];
        $materials = [];       
        $command = "SELECT move_materials.id, materials.name, move_materials.quantity, materials.unit, move_materials.value FROM materials,move_materials WHERE materials.id=move_materials.idMaterial AND move_materials.idSite =$idSite";
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowmaterial = mysqli_fetch_assoc($result)) {               
                $materials[] = $rowmaterial;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($materials);
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