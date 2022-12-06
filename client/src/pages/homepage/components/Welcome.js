function Welcome(props) {
  return (
    <div ref={props.myRef} className="welcome-box">
      <div  className="welcome-text bg-opacity-75">Welcome to MenSense!</div>
    </div>
  );
}

export default Welcome;
