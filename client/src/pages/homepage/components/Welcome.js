function Welcome(props) {
  return (
    <div ref={props.myRef} className="home-welcome-box">
      <div  className="home-welcome-text bg-opacity-75">Welcome to MenSense!</div>
    </div>
  );
}

export default Welcome;
