import React, { useState } from 'react';

const ImageGallery = ({ images, title }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!images || images.length === 0) {
        return null;
    }

    const openModal = (index) => {
        setSelectedImage(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (!isModalOpen) return;
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeModal();
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, selectedImage]);

    return (
        <div className="mb-12">
            {/* Thumbnail Gallery - Responsive row */}
            <div className="relative">
                <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary-accent scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => openModal(index)}
                            className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 ring-2 ring-gray-300 dark:ring-gray-600 hover:ring-gray-400 dark:hover:ring-gray-500 shadow-lg cursor-pointer"
                            style={{
                                width: 'clamp(120px, 30vw, 180px)',
                                height: 'clamp(80px, 20vw, 120px)'
                            }}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal - Responsive */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-4"
                    onClick={closeModal}
                >
                    {/* Close Button - Mobile optimized */}
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition z-50 p-2 bg-black bg-opacity-50 rounded-full"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Previous Button - Mobile optimized */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-2 sm:left-4 text-white hover:text-gray-300 transition z-50 p-2 bg-black bg-opacity-50 rounded-full"
                            aria-label="Previous image"
                        >
                            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Image Container - Responsive */}
                    <div
                        className="relative w-full max-w-7xl max-h-[85vh] sm:max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[selectedImage]}
                            alt={`Screenshot ${selectedImage + 1}`}
                            className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg"
                        />

                        {/* Image Counter - Mobile optimized */}
                        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                            {selectedImage + 1} / {images.length}
                        </div>
                    </div>

                    {/* Next Button - Mobile optimized */}
                    {images.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-2 sm:right-4 text-white hover:text-gray-300 transition z-50 p-2 bg-black bg-opacity-50 rounded-full"
                            aria-label="Next image"
                        >
                            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
