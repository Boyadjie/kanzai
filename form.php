<?php if(!empty($_POST)) {
          
          
        $email_to = "kanzaimmi@gmail.com";
        $email_subject = "New message received from Kanzaï";

          // test si la validation des données attendues existe
       if(!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['message'])) {

          $nom = $_POST['nom'];
          $email = $_POST['email'];
          $message = $_POST['message'];



          $email_message = "Détail.\n\n";
          $email_message .= "Nom: ".$nom."\n";
          $email_message .= "Email: ".$email."\n";
          $email_message .= "Messsage: ".$message."\n";

          // create email headers
          $headers = 'From: '.$email."\r\n".
          'Reply-To: '.$email."\r\n" .
          'X-Mailer: PHP/' . phpversion();
          $retour = mail($email_to, $email_subject, $email_message, $headers);

          if($retour){
          echo "<script type='text/javascript'>
         document.location.replace('index.html?f=yes#footer');
         </script>";
          }else{
              echo "<script type='text/javascript'>
                     document.location.replace('index.html?f=no#footer');
                     </script>";
         }


      }else{
         echo "<script type='text/javascript'>
         document.location.replace('index.html?f=no#footer');
         </script>";
      }

}else{
   echo "<script type='text/javascript'>
   document.location.replace('index.html?f=no#footer');
   </script>";
}
   
      ?>     