<?php
// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Initialize variables to store form data safely
    $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
    $cognome = isset($_POST['cognome']) ? $_POST['cognome'] : '';
    $cellulare = isset($_POST['cellulare']) ? $_POST['cellulare'] : '';
    $targa = isset($_POST['targa']) ? $_POST['targa'] : '';
    $data_nascita = isset($_POST['data_nascita']) ? $_POST['data_nascita'] : '';
    $note = isset($_POST['note']) ? $_POST['note'] : '';

    // Validate required fields
    if (empty($nome) || empty($cognome) || empty($cellulare)) {
        echo "Per favore compila tutti i campi obbligatori";
        exit;
    }

    // Check if checkbox is checked (HTML checkboxes return 'on' when checked)
    if (!isset($_POST['check']) || $_POST['check'] !== 'true') {
        echo "Si necessita che i Termini e le Condizioni vengano accettate";
        exit;
    }

    // Sanitize input data
    $data = [
        'Nome' => htmlspecialchars($nome, ENT_QUOTES),
        'Cognome' => htmlspecialchars($cognome, ENT_QUOTES),
        'Cellulare' => htmlspecialchars($cellulare, ENT_QUOTES),
        'Targa' => htmlspecialchars($targa, ENT_QUOTES),
        'Data di Nascita' => htmlspecialchars($data_nascita, ENT_QUOTES),
        'Note' => htmlspecialchars($note, ENT_QUOTES)
    ];

    // Set email headers and content
    $from = "Form Submission <raimondorinaldi85@gmail.com"; 
    $to = "raimondorinaldi85@gmail.com"; 
    $subject = "Preventivo ASSICURAZIONI sito";

    $body = "";
    foreach ($data as $key => $value) {
        if (!empty($value)) {
            $body .= "$key: $value\n";
        }
    }

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: $from\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Grazie per averci contattati, a breve un nostro operatore la contatterà.";
    } else {
        echo "C'è stato un errore.";
    }
} else {
    header("Location: thank-you.html");
    exit;
}
?>
