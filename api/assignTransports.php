<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $moveTransport = [];
        $command = "SELECT * FROM move_transports ORDER BY date ASC";  
        
        if ($result = mysqli_query($connection,$command)) {                       
            while ($rowtransport = mysqli_fetch_assoc($result)) {               
                $moveTransport[] = $rowtransport;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($moveTransport);
    }  
    
    function executePOST($connection) {
        $moveData = readMovements();
        $idSite = $moveData['idSite']; 
        $idTransport = $moveData['idTransport']; 
        $date = $moveData['date'];       
        $value = $moveData['value'];

        $feedback = []; 
        $command = "INSERT INTO move_transports (idSite, idTransport, date, value) VALUES ('$idSite', '$idTransport', '$date', '$value')";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
            $feedback[] = ['id' => mysqli_insert_id($connection)];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback); 
    }
  
    function executePUT($connection) {
        $moveData = readMovements();
        $id=$moveData['id'];
        $idSite = $moveData['idSite']; 
        $idTransport = $moveData['idTransport']; 
        $date = $moveData['date'];       
        $value = $moveData['value'];

        $feedback = [];
        $command = "UPDATE move_transports SET idSite=$idSite, idTransport=$idTransport, date='$date', value=$value WHERE id=$id ";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
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
      
        case 'PUT':
            executePUT($connection);  
            break;        
    }

    mysqli_close($connection);
?>