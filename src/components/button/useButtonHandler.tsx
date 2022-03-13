import Router from 'next/router';

const useButtonHandler = () => {
  const handleButtonClick = (route: string) => {
    Router.push(route);
  };
  return [handleButtonClick];
};

export default useButtonHandler;
