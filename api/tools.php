<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $tools = [];
        $command = "SELECT * FROM tools ORDER BY id ASC";
        
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowtool = mysqli_fetch_assoc($result)) {               
                $tools[] = $rowtool;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($tools);
    }  
    
    function executePOST($connection) {
        $toolData = readTools();
        $nameOfTool = $toolData['nameOfTool']; 
        $manufacturer = $toolData['manufacturer'];       
        $pricePerHour = $toolData['pricePerHour'];

        $feedback = []; 
        $command = "INSERT INTO tools (nameOfTool, manufacturer,  pricePerHour) VALUES ('$nameOfTool', '$manufacturer', '$pricePerHour')";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
            $feedback[] = ['id' => mysqli_insert_id($connection)];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback); 
    }
  
    function executePUT($connection) {
        $toolData = readTools();
        $id = $toolData['id'];
        $nameOfTool = $toolData['nameOfTool'];  
        $manufacturer = $toolData['manufacturer'];    
        $pricePerHour = $toolData['pricePerHour'];

        $feedback = [];
        $command = "UPDATE tools SET nameOfTool='$nameOfTool', manufacturer='$manufacturer', pricePerHour='$pricePerHour' WHERE id=$id ";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    }

    function executeDELETE($connection) {
        $toolData = readTools();
        $id = $toolData['id'];

        $command = "DELETE FROM tools WHERE id = $id";
        $feedback = [];

        if (mysqli_query($connection, $command)) {
            $feedback[] = ['resultultat' => "OK"];
        } else {
            $feedback[] = ['resultultat' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    } 

    function readTools() {
        $json = file_get_contents('php://input');
        // the association array is created $toolData
        $toolData = json_decode($json, true); 
        // print_r($toolData);
        return $toolData;
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