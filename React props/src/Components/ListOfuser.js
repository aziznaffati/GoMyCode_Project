const List = () => {
  const arrayOfusers = [
    {
      id: 7885,
      firstName: "siwar",
      lastName: "belkhir",
      email: "siwar@gmail.com",
    },
    {
      id: 755,
      firstName: "wafi",
      lastName: "benjeddou",
      email: "wafi@gmail.com",
    },
    {
      id: 9658,
      firstName: "marwa",
      lastName: "abdelaziz",
      email: "marwa@gmail.com",
    },
    {
      id: 845452,
      firstName: "hamza",
      lastName: "benjeddou",
      email: "hamza@gmail.com",
    },
  ];
  return (<div style={{display:'flex',justifyContent:'space-around'}}>
      {arrayOfusers.map((user)=>(<div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">user Information</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.firstName}</h6>
        <p className="card-text">
         {user.email}
        </p>
      </div>
    </div>))} 
    
    </div>
  );
};
export default List;
