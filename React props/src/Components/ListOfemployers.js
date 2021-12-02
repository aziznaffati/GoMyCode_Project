function Employers(props){
    console.log(props.ListEmplyers)
    return (
    <div className="card">
    <div className="card-body">
      <h1>this the list of emloyers</h1>
   {props.ListEmplyers.map((employer)=>(<p>{employer.name}</p>))}
    </div>
  </div>)
}
export default Employers;