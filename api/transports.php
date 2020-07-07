<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $transports = [];
        $command = "SELECT * FROM transports ORDER BY id ASC";
        
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowtransport = mysqli_fetch_assoc($result)) {               
                $transports[] = $rowtransport;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($transports);
    }  
    
    function executePOST($connection) {
        $transportData = readTransports();
        $nameOfMaterial = $transportData['nameOfMaterial']; 
        $value = $transportData['value'];        

        $feedback = []; 
        $command = "INSERT INTO transports (nameOfMaterial, value) VALUES ('$nameOfMaterial', '$value')";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
            $feedback[] = ['id' => mysqli_insert_id($connection)];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback); 
    }
  
    function executePUT($connection) {
        $transportData = readTransports();
        $id = $transportData['id'];
        $nameOfMaterial = $transportData['nameOfMaterial'];  
        $value = $transportData['value'];      

        $feedback = [];
        $command = "UPDATE transports SET nameOfMaterial='$nameOfMaterial', value='$value' WHERE id=$id ";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    }

    function executeDELETE($connection) {
        $transportData = readTransports();
        $id = $transportData['id'];

        $command = "DELETE FROM transports WHERE id = $id";
        $feedback = [];

        if (mysqli_query($connection, $command)) {
            $feedback[] = ['resultultat' => "OK"];
        } else {
            $feedback[] = ['resultultat' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    } 

    function readTransports() {
        $json = file_get_contents('php://input');
        // the association array is created $transportData
        $transportData = json_decode($json, true); 
        // print_r($transportData);
        return $transportData;
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