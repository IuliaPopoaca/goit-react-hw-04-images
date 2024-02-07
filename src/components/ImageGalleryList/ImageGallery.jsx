import { ImageGalleryList, Modal } from 'components';
import PT from 'prop-types';
import { useState } from 'react';
import { ImageLarge } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

  const toggleModal = (largeImageURL, tags) => {
    setShowModal(!showModal);
    setLargeImageURL(largeImageURL);
    setTags(tags);
  };

  return (
    <>
      <ImageGalleryList images={images} toggleModal={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <ImageLarge src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PT.array.isRequired,
  largeImg: PT.string,
  tags: PT.string,
};