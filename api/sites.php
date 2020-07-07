<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $sites = [];
        $command = "SELECT * FROM sites ORDER BY id ASC";       
        
        if ($result = mysqli_query($connection,$command)) {                       
            while ($rowsite = mysqli_fetch_assoc($result)) {               
                $sites[] = $rowsite;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($sites);
    }  
    
    function executePOST($connection) {
        $siteData = readSites();   
        $name = $siteData['name']; 
        $investor = $siteData['investor']; 
        $address = $siteData['address']; 
        $designer = $siteData['designer'];
        $picture = $siteData['picture'];
        $info = $siteData['info'];
        $status = $siteData['status'];

        $feedback = []; 
        $command = "INSERT INTO sites (name, investor, address, designer, picture, info, status) VALUES ('$name', '$investor', '$address', '$designer', '$picture', '$info', '$status')";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
            $feedback[] = ['id' => mysqli_insert_id($connection)];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback); 
    }
  
    function executePUT($connection) {
        $siteData = readSites();
        $id = $siteData['id'];
        $name = $siteData['name'];  
        $investor = $siteData['investor']; 
        $address = $siteData['address'];
        $designer = $siteData['designer'];
        $picture = $siteData['picture'];
        $info = $siteData['info'];
        $status = $siteData['status'];

        $feedback = [];
        $command = "UPDATE sites SET name='$name', investor='$investor', address='$address', designer='$designer', picture='$picture', info='$info', status='$status' WHERE id=$id ";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    }

    function executeDELETE($connection) {
        $siteData = readSites();
        $id = $siteData['id'];

        $command = "DELETE FROM sites WHERE id = $id";
        $feedback = [];

        if (mysqli_query($connection, $command)) {
            $feedback[] = ['resultultat' => "OK"];
        } else {
            $feedback[] = ['resultultat' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    } 

    function readSites() {
        $json = file_get_contents('php://input');
        // the association array is created $siteData
        $siteData = json_decode($json, true); 
        // print_r($siteData);
        return $siteData;
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