import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Slider3D.css';

const Slider3D = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);
    const autoRotateRef = useRef(null);

    // Sample slide data - you can replace with your own images/content
    const slides = [
        { id: 1, title: 'Slide 1', color: '#FF6B6B', image: '🎨' },
        { id: 2, title: 'Slide 2', color: '#4ECDC4', image: '🎭' },
        { id: 3, title: 'Slide 3', color: '#45B7D1', image: '🎪' },
        { id: 4, title: 'Slide 4', color: '#FFA07A', image: '🎬' },
        { id: 5, title: 'Slide 5', color: '#98D8C8', image: '🎸' },
        { id: 6, title: 'Slide 6', color: '#F7DC6F', image: '🎯' },
    ];

    const totalSlides = slides.length;
    const angleIncrement = 360 / totalSlides;
    const radius = 450; // Distance from center - creates the 3D circle

    useEffect(() => {
        // Initialize 3D positions in a circle
        const cards = sliderRef.current.querySelectorAll('.slide-card');

        cards.forEach((card, index) => {
            const angle = angleIncrement * index;
            const angleRad = (angle * Math.PI) / 180;

            // Position cards in a 3D circle using translateZ and translateX
            gsap.set(card, {
                rotationY: angle,
                transformOrigin: 'center center',
                z: -radius * Math.cos(angleRad),
                x: radius * Math.sin(angleRad),
            });
        });

        // Start auto-rotation
        if (isAutoRotating) {
            startAutoRotate();
        }

        return () => {
            if (autoRotateRef.current) {
                autoRotateRef.current.kill();
            }
        };
    }, []);

    const startAutoRotate = () => {
        if (autoRotateRef.current) {
            autoRotateRef.current.kill();
        }

        autoRotateRef.current = gsap.to(sliderRef.current, {
            rotationY: '+=360',
            duration: 20,
            ease: 'none',
            repeat: -1,
        });
    };

    const rotateToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoRotating(false);

        if (autoRotateRef.current) {
            autoRotateRef.current.kill();
        }

        const targetRotation = -angleIncrement * index;

        gsap.to(sliderRef.current, {
            rotationY: targetRotation,
            duration: 1.5,
            ease: 'power3.inOut',
        });
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % totalSlides;
        rotateToSlide(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        rotateToSlide(prevIndex);
    };

    const toggleAutoRotate = () => {
        if (isAutoRotating) {
            setIsAutoRotating(false);
            if (autoRotateRef.current) {
                autoRotateRef.current.kill();
            }
        } else {
            setIsAutoRotating(true);
            startAutoRotate();
        }
    };

    return (
        <div className="slider-3d-container">
            <div className="slider-3d-wrapper">
                <div className="slider-3d" ref={sliderRef}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className="slide-card"
                            onClick={() => rotateToSlide(index)}
                        >
                            <div className="slide-content" style={{ backgroundColor: slide.color }}>
                                <div className="slide-icon">{slide.image}</div>
                                <h3 className="slide-title">{slide.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="controls">
                <button className="control-btn" onClick={handlePrev}>
                    ← Previous
                </button>
                <button className="control-btn auto-btn" onClick={toggleAutoRotate}>
                    {isAutoRotating ? '⏸ Pause' : '▶ Play'}
                </button>
                <button className="control-btn" onClick={handleNext}>
                    Next →
                </button>
            </div>

            <div className="indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => rotateToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider3D;
