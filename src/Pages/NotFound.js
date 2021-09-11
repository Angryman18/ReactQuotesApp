const NotFound = ({msg}) => {
  return <h3 className="error__page">{!msg ? "Page Not Found" : msg}</h3>;
};

export default NotFound;
