<?php 
    require 'connect.php';

    
    function executeGET($connection) {
        $employees = [];
        $command = "SELECT employees.id, employees.firstName, employees.lastName, jobs.name AS jobName, employees.pricePerHour FROM employees, jobs WHERE employees.idJob = jobs.id ORDER BY employees.id ASC";
        //"SELECT employees.firstName, employees.lastName, jobs.name, employees.pricePerHour FROM employees, jobs WHERE employees.idJob = jobs.id ORDER BY employees.firstName ASC";
        
        if ($result = mysqli_query($connection,$command)) {           
            while ($rowemployee = mysqli_fetch_assoc($result)) {               
                $employees[] = $rowemployee;
            }
            // free up memory
            mysqli_free_result($result);
        }
        echo json_encode($employees);
    }  
    
    function executePOST($connection) {
        $employeeData = readEmployees();
        $firstName = $employeeData['firstName']; 
        $lastName = $employeeData['lastName']; 
        $idJob = $employeeData['idJob']; 
        $pricePerHour = $employeeData['pricePerHour'];

        $feedback = []; 
        $command = "INSERT INTO employees (firstName, lastName, idJob, pricePerHour) VALUES ('$firstName', '$lastName', '$idJob', '$pricePerHour')";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
            $feedback[] = ['id' => mysqli_insert_id($connection)];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback); 
    }
  
    function executePUT($connection) {
        $employeeData = readEmployees();
        $id = $employeeData['id'];
        $firstName = $employeeData['firstName'];  
        $lastName = $employeeData['lastName']; 
       // $idJob = $employeeData['idJob'];
        $pricePerHour = $employeeData['pricePerHour'];

        $feedback = [];
        $command = "UPDATE employees SET firstName='$firstName', lastName='$lastName', pricePerHour='$pricePerHour' WHERE id=$id ";
        if (mysqli_query($connection, $command)) {
            $feedback[] = ['result' => "OK"];
        } else {
            $feedback[] = ['result' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    }

    function executeDELETE($connection) {
        $employeeData = readEmployees();
        $id = $employeeData['id'];

        $command = "DELETE FROM employees WHERE id = $id";
        $feedback = [];

        if (mysqli_query($connection, $command)) {
            $feedback[] = ['resultultat' => "OK"];
        } else {
            $feedback[] = ['resultultat' => 'Eroare: ' . mysqli_error($connection)];
        }
        echo json_encode($feedback);
    } 

    function readEmployees() {
        $json = file_get_contents('php://input');
        // the association array is created $employeeData
        $employeeData = json_decode($json, true); 
        // print_r($employeeData);
        return $employeeData;
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