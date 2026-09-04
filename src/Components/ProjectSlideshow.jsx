import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ProjectSlideshow.css';
import travelRedesign1 from '../assets/travel_redesign_1.png';
import travelRedesign2 from '../assets/travel_redesign_2.png';
import travelRedesign3 from '../assets/travel_redesign_3.png';
import travelRedesign4 from '../assets/travel_redesign_4.png';
import travelRedesign5 from '../assets/travel_redesign_5.png';
import travelRedesign6 from '../assets/travel_redesign_6.png';


const DEFAULT_SLIDES = [
  {
    id: 1,
    url: travelRedesign1,
    title: 'Smart Business Travel Itinerary',
    caption: 'Unified compilation combining flights, hotels, trains, and cabs into a seamless itinerary.',
    tag: 'Screen 01 · Itinerary Flow'
  },
  {
    id: 2,
    url: travelRedesign2,
    title: 'Enterprise Policy & Approval System',
    caption: 'Frictionless rule-based approvals that increased trip confirmations by 3x.',
    tag: 'Screen 02 · Corporate Policies'
  },
  {
    id: 3,
    url: travelRedesign3,
    title: 'Collaborative Multi-traveler Workspace',
    caption: 'Shared travel planning and coordination for distributed teams and executives.',
    tag: 'Screen 03 · Team Travel'
  },
  {
    id: 4,
    url: travelRedesign4,
    title: 'Real-time Modifications & Cashflow Dashboard',
    caption: 'Instant rescheduling, proactive flight alerts, and ~₹50 lacs unlocked in positive cashflow.',
    tag: 'Screen 04 · Insights & Management'
  },
  {
    id: 5,
    url: travelRedesign5,
    title: 'Real-time Modifications & Cashflow Dashboard',
    caption: 'Instant rescheduling, proactive flight alerts, and ~₹50 lacs unlocked in positive cashflow.',
    tag: 'Screen 04 · Insights & Management'
  },
  {
    id: 6,
    url: travelRedesign6,
    title: 'Real-time Modifications & Cashflow Dashboard',
    caption: 'Instant rescheduling, proactive flight alerts, and ~₹50 lacs unlocked in positive cashflow.',
    tag: 'Screen 04 · Insights & Management'
  },
];

const ProjectSlideshow = ({ slides = DEFAULT_SLIDES, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const currentDragOffsetRef = useRef(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only react if slideshow is focused or mouse is over it
      if (!containerRef.current) return;
      if (document.activeElement === containerRef.current || containerRef.current.matches(':hover')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    currentDragOffsetRef.current = 0;
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startXRef.current;
    currentDragOffsetRef.current = diff;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const offset = currentDragOffsetRef.current;
    if (offset > 50) {
      prevSlide();
    } else if (offset < -50) {
      nextSlide();
    }
    setDragOffset(0);
    currentDragOffsetRef.current = 0;
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    // Only drag with main button
    if (e.button !== 0) return;
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentDragOffsetRef.current = 0;
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startXRef.current;
    currentDragOffsetRef.current = diff;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const offset = currentDragOffsetRef.current;
    if (offset > 50) {
      prevSlide();
    } else if (offset < -50) {
      nextSlide();
    }
    setDragOffset(0);
    currentDragOffsetRef.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const trackStyle = {
    transform: isDragging
      ? `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`
      : `translateX(-${currentIndex * 100}%)`,
    transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.35, 1)',
  };

  return (
    <div
      ref={containerRef}
      className={`project_slideshow ${className} ${isDragging ? 'is_dragging' : ''}`}
      tabIndex={0}
      role="region"
      aria-label="Project image slideshow gallery"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides track */}
      <div className="slideshow_track" style={trackStyle}>
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`slideshow_slide ${index === currentIndex ? 'is_active' : ''}`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={slide.url}
              alt={slide.title || `Slide ${index + 1}`}
              className="slideshow_img"
              draggable={false}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="slideshow_overlay" />
            <div className="slideshow_slide_content">
              {slide.caption && <p className="slideshow_caption">{slide.caption}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Top Header Controls: Swipe hint & Counter */}


      {/* Navigation Arrow Controls */}
      <button
        type="button"
        className="slideshow_arrow_btn prev"
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        className="slideshow_arrow_btn next"
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Bottom Controls: Pagination Dots */}
      <div className="slideshow_bottom_bar">
        <div className="slideshow_dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`slideshow_dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(idx);
              }}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlideshow;
