<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $dealers = [];
        $command = "SELECT * FROM dealers ORDER BY id ASC";
        
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowtransport = mysqli_fetch_assoc($result)) {               
                $dealers[] = $rowtransport;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($dealers);
    }  
    
    // function executePOST($connection) {
    //     $dealerData = readDealers();
    //     $name = $dealerData['name']; 
    //     $address = $dealerData['address'];        
    //     $phone = $dealerData['phone'];        
    //     $email = $dealerData['email'];        

    //     $feedback = []; 
    //     $command = "INSERT INTO dealers (name, address, phone, email) VALUES ('$name', '$address','$phone', '$email')";
    //     if (mysqli_query($connection, $command)) {
    //         $feedback[] = ['result' => "OK"];
    //         $feedback[] = ['id' => mysqli_insert_id($connection)];
    //     } else {
    //         $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
    //     }
    //     echo json_encode($feedback); 
    // }
  
    // function executePUT($connection) {
    //     $dealerData = readDealers();
    //     $id = $dealerData['id'];
    //     $name = $dealerData['name'];  
    //     $address = $dealerData['address'];
    //     $phone = $dealerData['phone'];        
    //     $email = $dealerData['email'];       

    //     $feedback = [];
    //     $command = "UPDATE dealers SET name='$name', address='$address', phone='$phone', email='$email' WHERE id=$id ";
    //     if (mysqli_query($connection, $command)) {
    //         $feedback[] = ['result' => "OK"];
    //     } else {
    //         $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
    //     }
    //     echo json_encode($feedback);
    // }

    // function executeDELETE($connection) {
    //     $dealerData = readDealers();
    //     $id = $dealerData['id'];

    //     $command = "DELETE FROM dealers WHERE id = $id";
    //     $feedback = [];

    //     if (mysqli_query($connection, $command)) {
    //         $feedback[] = ['resultultat' => "OK"];
    //     } else {
    //         $feedback[] = ['resultultat' => 'Eroare: ' . mysqli_error($connection)];
    //     }
    //     echo json_encode($feedback);
    // } 

    function readDealers() {
        $json = file_get_contents('php://input');
        // the association array is created $dealerData
        $dealerData = json_decode($json, true); 
        // print_r($dealerData);
        return $dealerData;
    }
    
    $metoda = $_SERVER['REQUEST_METHOD'];
    switch ($metoda) {
        case 'GET':
            executeGET($connection);  
            break;
        
        // case 'POST':
        //     executePOST($connection);  
        //     break;
      
        // case 'PUT':
        //     executePUT($connection);  
        //     break;

        // case 'DELETE':
        //     executeDELETE($connection);  
        //     break;
    }

    mysqli_close($connection);
?>