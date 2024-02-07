import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="150"
      width="150"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{ margin: '40px auto', display: 'block ' }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#645be1"
    />
  );
};

export default Loader;