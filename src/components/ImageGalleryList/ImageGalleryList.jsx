import PT from 'prop-types';

import {
  GalleryItemStyled,
  GalleryListStyled,
  ImageStyled,
} from './ImageGallery.styled';

const ImageGalleryList = ({ images, toggleModal }) => {
  return (
    <GalleryListStyled>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <GalleryItemStyled
            key={id}
            onClick={() => toggleModal(largeImageURL, tags)}
          >
            <ImageStyled src={webformatURL} alt={tags} />
          </GalleryItemStyled>
        );
      })}
    </GalleryListStyled>
  );
};

export default ImageGalleryList;

ImageGalleryList.propTypes = {
  images: PT.arrayOf(
    PT.shape({
      id: PT.number,
      webformatURL: PT.string,
      tags: PT.string,
      largeImageURL: PT.string,
    })
  ).isRequired,
  toggleModal: PT.func,
};