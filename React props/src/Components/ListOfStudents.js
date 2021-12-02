function ListOfStudents(props)
{
    console.log(props.ListStudents)
    return(
<div className="card">
  <div className="card-body">
    <h1>this is the list of students</h1>
    {props.ListStudents.map((student,index)=>(<p key={index}>{student.name}</p>))}
    
  </div>
</div>
    )
}
export  default ListOfStudents;