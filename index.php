<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futuristic Ideathon 2024</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <!-- FontAwesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">


    
    <!-- Main CSS -->
    <link rel="stylesheet" href="styles/main.css">
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="styles/particle-background.css">
    
    <!-- Carousel -->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="components/hero/carousel/main.css" /> 
    <link rel="stylesheet" href="components/hero/carousel/slide1/slide1.css" />
    <link rel="stylesheet" href="components/hero/carousel/slide2/slide2.css" />
    <link rel="stylesheet" href="components/hero/carousel/slide3/slide3.css" />
    <link rel="stylesheet" href="styles/timeline.css" />
    <link rel="stylesheet" href="styles/events.css" />
    <link rel="stylesheet" href="styles/prize.css" />
    <link rel="stylesheet" href="styles/upcoming_event.css" />
    
    
    <!-- <link rel="stylesheet" href="styles/im1.jpeg" />
    <link rel="stylesheet" href="styles/im2.jpeg" />
    <link rel="stylesheet" href="styles/im3.jpeg" />
    <link rel="stylesheet" href="styles/im4.jpeg" /> -->
<!-- 
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" rel="stylesheet" /> -->

    
    
    <!-- Include hero section CSS if needed -->
    <!-- <link rel="stylesheet" href="components/hero/container.css"> -->
    <!-- 3D and Animation Libraries -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/EffectComposer.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/RenderPass.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/ShaderPass.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/UnrealBloomPass.js"></script> -->
</head>

<body>
    <!-- Include the particle background section -->
    <?php include 'components/particle-background.php'; ?>

    <!-- Header with Navigation Bar -->
    <header>
        <?php include 'components/navbar.php'; ?>
    </header>

        <!-- Timeline Section -->
        <?php include 'components/prize.php'; ?>
        <?php include 'components/timeline.php'; ?>
        <?php include 'components/events.php'; ?>
        <?php include 'components/upcoming_event.php'; ?>
        
    <!-- <main> -->

        <!-- Additional components like about, timeline, etc. can be included here -->
    <!-- </main> -->

    <!-- Footer (Optional, if needed) -->
    <footer>
        <!-- Include footer content or components here -->
    </footer>

    <!-- JavaScript Files -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>




    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/navbar.js"></script>
    <script src="scripts/particle-background.js"></script>
    <script src="scripts/timeline.js"></script>
    <script src="scripts/events.js"></script>


    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="components/hero/carousel/main.js"></script>
    <script src="components/hero/carousel/prize.js"></script>
    <script src="components/hero/carousel/upcoming_event.js"></script>
    


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>


</body>
</html>
