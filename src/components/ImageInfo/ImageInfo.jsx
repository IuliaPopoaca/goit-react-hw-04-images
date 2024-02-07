import { Button, ImageGallery, Loader } from 'components';
import PT from 'prop-types';
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';
import { onSearch } from '../../api/api';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const ImageInfo = ({ name, page, loadMore }) => {
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!name) {
      return;
    }

    setStatus(Status.PENDING);
    async function fetchData() {
      try {
        const { data } = await onSearch(name, page);

        if (data.totalHits === 0) {
          setStatus(Status.REJECTED);
          return toast.error(`🥺 sorry we can't find any ${name}`);
        }

        if (page === 1) {
          setImages(data.hits);
          setTotal(data.totalHits);
          setStatus(Status.RESOLVED);
        } else {
          setImages(prevState => [...prevState, ...data.hits]);
          setTotal(data.totalHits);
          setStatus(Status.RESOLVED);
        }
        if (data.hits.length > 0 && data.hits.length < 12) {
          toast.info(`😎 Looks like it's all ${name} we have`);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    scroll.scrollToBottom({
      smooth: true,
    });
  }, [name, page]);

  if (status === Status.IDLE) {
    return;
  }

  if (error) {
    return toast.error(`😭 something goes wrong please try again`);
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.RESOLVED) {
    return (
      <div>
        <ImageGallery images={images} />
        {images.length > 0 && images.length < total && (
          <Button onClick={loadMore} />
        )}
      </div>
    );
  }
};

export default ImageInfo;

ImageInfo.propTypes = {
  name: PT.string.isRequired,
  page: PT.number.isRequired,
  loadMore: PT.func,
};