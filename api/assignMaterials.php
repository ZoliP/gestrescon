<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $moveMaterials = [];
        $command = "SELECT * FROM move_materials ORDER BY date ASC";  
        
        if ($result = mysqli_query($connection,$command)) {                       
            while ($rowmaterial = mysqli_fetch_assoc($result)) {               
                $moveMaterials[] = $rowmaterial;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($moveMaterials);
    }  
    
    function executePOST($connection) {
        $moveData = readMovements();
        $idSite = $moveData['idSite']; 
        $idMaterial = $moveData['idMaterial']; 
        $quantity = $moveData['quantity']; 
        $value = $moveData['value'];
        $date = $moveData['date'];

        $feedback = []; 
        $command = "INSERT INTO move_materials (idSite, idMaterial, quantity, value, date) VALUES ('$idSite', '$idMaterial', '$quantity', '$value', '$date')";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
            $feedback[] = ['id' => mysqli_insert_id($connection)];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback); 
    } 

    function readMovements() {
        $json = file_get_contents('php://input');
        // the association array is created $moveData
        $moveData = json_decode($json, true); 
        // print_r($moveData);        
        return $moveData;
        
    }
    
    $metoda = $_SERVER['REQUEST_METHOD'];
    switch ($metoda) {
        case 'GET':
            executeGET($connection);  
            break;
        
        case 'POST':
            executePOST($connection);  
            break;             
    }

    mysqli_close($connection);
?>