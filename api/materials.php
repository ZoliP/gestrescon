<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $materials = [];
        $command = "SELECT materials.id, materials.name AS materialName, materials.unit, materials.pricePerUnit, dealers.name AS dealerName FROM materials, dealers WHERE materials.idDealer = dealers.id ORDER BY materials.id ASC";        
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowmaterial = mysqli_fetch_assoc($result)) {               
                $materials[] = $rowmaterial;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($materials);
    }  
    
    function executePOST($connection) {
        $materialData = readMaterials();
        $name = $materialData['materialName']; 
        $unit = $materialData['unit']; 
        $pricePerUnit = $materialData['pricePerUnit']; 
        $idDealer = $materialData['idDealer'];

        $feedback = []; 
        $command = "INSERT INTO materials (name, unit, pricePerUnit, idDealer) VALUES ('$name', '$unit', '$pricePerUnit', '$idDealer')";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
            $feedback[] = ['id' => mysqli_insert_id($connection)];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback); 
    }
  
    function executePUT($connection) {
        $materialData = readMaterials();        
        $id = $materialData['id'];
        $name = $materialData['materialName'];  
        $unit = $materialData['unit']; 
        $pricePerUnit = $materialData['pricePerUnit'];
       // $idDealer = $materialData['idDealer'];

        $feedback = [];
        $command = "UPDATE materials SET name='$name', unit='$unit', pricePerUnit='$pricePerUnit' WHERE id=$id";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    }

    function executeDELETE($connection) {
        $materialData = readMaterials();
        $id = $materialData['id'];

        $command = "DELETE FROM materials WHERE id = $id";
        $feedback = [];

        if (mysqli_query($connection, $command)) {
            $feedback[] = ['resultultat' => "OK"];
        } else {
            $feedback[] = ['resultultat' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    } 

    function readMaterials() {
        $json = file_get_contents('php://input');
        // the association array is created $materialData
        $materialData = json_decode($json, true); 
         //print_r($materialData);
        return $materialData;
    }
    
    $metoda = $_SERVER['REQUEST_METHOD'];
    switch ($metoda) {
        case 'GET':
            executeGET($connection);  
            break;
        
        case 'POST':
            executePOST($connection);  
            break;
      
        case 'PUT':
            executePUT($connection);  
            break;

        case 'DELETE':
            executeDELETE($connection);  
            break;
    }

    mysqli_close($connection);
?>