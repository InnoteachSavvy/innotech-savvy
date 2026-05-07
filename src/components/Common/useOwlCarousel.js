import { useEffect, useRef } from 'react';

const useOwlCarousel = (selector, options = {}) => {
  const carouselRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Wait for DOM to be ready and element to exist
    const initializeCarousel = () => {
      if (typeof window === 'undefined' || !window.jQuery) {
        console.warn('jQuery not available for owl carousel');
        return;
      }

      const $ = window.jQuery;
      const $element = $(selector);

      if ($element.length === 0) {
        // Element not found, try again after a short delay
        setTimeout(initializeCarousel, 100);
        return;
      }

      // Destroy existing carousel if it exists
      if (isInitialized.current && carouselRef.current) {
        try {
          $element.trigger('destroy.owl.carousel');
          $element.removeClass('owl-carousel owl-loaded');
          $element.find('.owl-stage-outer').children().unwrap();
        } catch (error) {
          console.warn('Error destroying existing carousel:', error);
        }
      }

      // Default options based on selector
      let defaultOptions = {
        loop: true,
        margin: 0,
        autoplay: true,
        slideBy: 1,
        items: 1,
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        navText: ['<i class="srn-arrow-left"></i>', '<i class="srn-arrow-right"></i>']
      };

      // Customize options based on carousel type
      if (selector.includes('marketing-banner-slider')) {
        defaultOptions = {
          ...defaultOptions,
          responsive: {
            0: { items: 2 },
            560: { items: 3 },
            768: { items: 4 },
            1024: { items: 3 },
            1400: { items: 4 }
          }
        };
      } else if (selector.includes('testimonials-slider-single')) {
        defaultOptions = {
          ...defaultOptions,
          margin: 30,
          center: true,
          autoplayTimeout: 3000,
          dots: true,
          nav: false,
          responsive: {
            0: { items: 1 },
            1024: { items: 1 }
          }
        };
      } else if (selector.includes('services-related-slider')) {
        defaultOptions = {
          ...defaultOptions,
          margin: 30,
          nav: true,
          dots: false,
          responsive: {
            0: { items: 1 },
            575: { items: 2 },
            767: { items: 2 },
            1200: { items: 3 }
          }
        };
      }

      // Initialize new carousel
      try {
        carouselRef.current = $element.owlCarousel({
          ...defaultOptions,
          ...options
        });
        
        isInitialized.current = true;
        console.log('✅ Owl carousel initialized successfully for:', selector);
      } catch (error) {
        console.error('❌ Error initializing owl carousel:', error);
      }
    };

    // Initialize with a small delay to ensure DOM is ready
    const timer = setTimeout(initializeCarousel, 50);

    return () => {
      clearTimeout(timer);
      
      // Cleanup on unmount
      if (typeof window !== 'undefined' && window.jQuery && isInitialized.current) {
        const $ = window.jQuery;
        const $element = $(selector);
        
        if ($element.length > 0) {
          try {
            $element.trigger('destroy.owl.carousel');
            $element.removeClass('owl-carousel owl-loaded');
            $element.find('.owl-stage-outer').children().unwrap();
            isInitialized.current = false;
            carouselRef.current = null;
            console.log('🗑️ Owl carousel destroyed for:', selector);
          } catch (error) {
            console.warn('⚠️ Error destroying carousel on cleanup:', error);
          }
        }
      }
    };
  }, [selector, JSON.stringify(options)]);

  return carouselRef.current;
};

export default useOwlCarousel; 