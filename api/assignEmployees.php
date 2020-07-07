<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $moveEmployees = [];
        $command = "SELECT * FROM move_employees ORDER BY startDate ASC";  
        
        if ($result = mysqli_query($connection,$command)) {                       
            while ($rowemployee = mysqli_fetch_assoc($result)) {               
                $moveEmployees[] = $rowemployee;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($moveEmployees);
    }  
    
    function executePOST($connection) {
        $moveData = readMovements();
        $idSite = $moveData['idSite']; 
        $idEmployee = $moveData['idEmployee']; 
        $startDate = $moveData['startDate']; 
        $endDate = $moveData['endDate'];
        $value = $moveData['value'];

        $feedback = []; 
        $command = "INSERT INTO move_employees (idSite, idEmployee, startDate, endDate, value) VALUES ('$idSite', '$idEmployee', '$startDate', '$endDate', '$value')";
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
        $idEmployee = $moveData['idEmployee']; 
        $startDate = $moveData['startDate']; 
        $endDate = $moveData['endDate'];
        $value = $moveData['value'];
       

        $feedback = [];
        $command = "UPDATE move_employees SET idSite='$idSite', idEmployee='$idEmployee', startDate='$startDate', endDate='$endDate', value='$value' WHERE id=$id ";
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