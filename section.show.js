const text1 = document.getElementById('text-1');
    const text2 = document.getElementById('text-2');
    
    window.addEventListener('scroll', function() {
      const scrollTrack1 = document.getElementById('scroll-track-1');
      const scrollTrack2 = document.getElementById('scroll-track-2');
      

      const scrollTrack1Top = scrollTrack1.getBoundingClientRect().top;
      const scrollTrack2Top = scrollTrack2.getBoundingClientRect().top;
     
      const windowHeight = window.innerHeight;

      if (scrollTrack1Top < windowHeight * 0.1) {
        text1.classList.add('fade-out');
      }

      if (scrollTrack2Top < windowHeight * 0.1) {
        text2.classList.add('fade-out');
      }


    });