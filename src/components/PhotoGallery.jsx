import { useState, useEffect } from "react";
import "./PhotoGallery.css";

const categories = [
  {
    name: "Living Room",
    prefix: "livingRoom",
    author: "Entertainment Center",
    count: 14,
  },
  {
    name: "Bedroom",
    prefix: "bedRoom",
    author: "Bedroom",
    count: 16,
  },
  {
    name: "Kitchen",
    prefix: "kitchenRoom",
    author: "Kitchen",
    count: 16,
  },
  {
    name: "Custom",
    prefix: "customRoom",
    author: "Custom woodworking",
    count: 4,
  },
];

const images = [];

let id = 1;

const largestCategoryCount = Math.max(
  ...categories.map((category) => category.count)
);

for (
  let imageNumber = 1;
  imageNumber <= largestCategoryCount;
  imageNumber++
) {
  categories.forEach((category) => {
    if (imageNumber <= category.count) {
      images.push({
        id: id++,
        author: category.author,
        tag: category.name,
        src: `/Product/${category.prefix}_${imageNumber}.jpg`,
      });
    }
  });
}

function PhotoGallery() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showAll = selectedFilters.length === 0;

  const visibleImages = showAll
    ? images
    : images.filter((image) =>
        selectedFilters.includes(image.tag)
      );

  useEffect(() => {
    function handleKeyDown(event) {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        const nextIndex =
          (currentIndex + 1) % visibleImages.length;

        setCurrentIndex(nextIndex);
        setSelectedImage(visibleImages[nextIndex]);
      }

      if (event.key === "ArrowLeft") {
        const previousIndex =
          (currentIndex - 1 + visibleImages.length) %
          visibleImages.length;

        setCurrentIndex(previousIndex);
        setSelectedImage(
          visibleImages[previousIndex]
        );
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedImage,
    currentIndex,
    visibleImages,
  ]);

  function toggleFilter(category) {
    setSelectedFilters((currentFilters) => {
      if (currentFilters.includes(category)) {
        return currentFilters.filter(
          (filter) => filter !== category
        );
      }

      return [...currentFilters, category];
    });
  }

  function showAllImages() {
    setSelectedFilters([]);
  }

  return (
    <section className="photo-gallery">
      <div
        className="photo-gallery__filters"
        aria-label="Filter photos"
      >
        <button
          type="button"
          className={`photo-gallery__filter ${
            showAll ? "is-active" : ""
          }`}
          onClick={showAllImages}
          aria-pressed={showAll}
        >
          All
        </button>

        {categories.map((category) => {
          const isSelected =
            selectedFilters.includes(category.name);

          return (
            <button
              key={category.name}
              type="button"
              className={`photo-gallery__filter ${
                isSelected ? "is-active" : ""
              }`}
              onClick={() =>
                toggleFilter(category.name)
              }
              aria-pressed={isSelected}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div className="photo-gallery__grid">
        {visibleImages.map((image) => (
          <article
            className="photo-gallery__card"
            key={image.id}
          >
            <img
              className="photo-gallery__image"
              src={image.src}
              alt={`${image.author} - ${image.tag}`}
              loading="lazy"
              onClick={() => {
                const index =
                  visibleImages.findIndex(
                    (item) =>
                      item.id === image.id
                  );

                setCurrentIndex(index);
                setSelectedImage(image);
              }}
            />

            <div className="photo-gallery__caption">
              <strong>
                {image.author}
              </strong>

              <span>
                {image.tag}
              </span>
            </div>
          </article>
        ))}
      </div>

      <p className="photo-gallery__source">
        All photos are from{" "}

        <a
          href="https://www.facebook.com/profile.php?id=61564405211655&sk=photos"
          target="_blank"
          rel="noopener noreferrer"
        >
          MoonValley Facebook
        </a>
      </p>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Close image"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox__previous"
            onClick={(event) => {
              event.stopPropagation();

              const previousIndex =
                (
                  currentIndex -
                  1 +
                  visibleImages.length
                ) %
                visibleImages.length;

              setCurrentIndex(
                previousIndex
              );

              setSelectedImage(
                visibleImages[
                  previousIndex
                ]
              );
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            className="lightbox__image"
            src={selectedImage.src}
            alt={`${selectedImage.author} - ${selectedImage.tag}`}
            onClick={(event) =>
              event.stopPropagation()
            }
          />

          <button
            type="button"
            className="lightbox__next"
            onClick={(event) => {
              event.stopPropagation();

              const nextIndex =
                (currentIndex + 1) %
                visibleImages.length;

              setCurrentIndex(
                nextIndex
              );

              setSelectedImage(
                visibleImages[nextIndex]
              );
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="lightbox__caption">
            <strong>
              {selectedImage.author}
            </strong>

            <span>
              {selectedImage.tag}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;