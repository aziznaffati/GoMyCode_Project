function Footer(props) {
  return (
    <div className="card">
      <h5 className="card-header">owner and team</h5>
      <div className="card-body">
        <h5 className="card-title">Special title tre</h5>
        <p>
            owner name :{props.owner.firstName}
        </p>
       
        <a href="#" className="btn btn-primary">
          contac us: {props.owner.email}
        </a>
      </div>
    </div>
  );
}
export default Footer;
