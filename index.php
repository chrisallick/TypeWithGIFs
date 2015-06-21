<?php
	require_once "./md.2.8.4.php";

    $detect = new Mobile_Detect;
    if ( $detect->isMobile() ) {
        include "./mobile.php";
    } else {
		include "./desktop.php";
    }
?>