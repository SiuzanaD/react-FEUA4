const Welcome = ({ isLoggedIn }) => {
    if (isLoggedIn) {
      return <div>Hello, nice to meet you.</div>;
    }
  
    return <div>You need to log in before writing comment.</div>;
    //   return isLoggedIn ? (
    //     <div>Hello, nice to meet you.</div>
    //   ) : (
    //     <div>You need to log in before writing comment.</div>
    //   );
  };
  
  export default Welcome;