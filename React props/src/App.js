import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "../src/Components/ListOfuser";
import Footer from "../src/Components/Footer";
import ListOfStudents from '../src/Components/ListOfStudents';
import Employers from '../src/Components/ListOfemployers';
function App() {
  const owner = {
    id: 875,
    firstName: "amine",
    lastName: "boughzela",
    email: "amine@gmail.com",
  };
  var arrayOfEmloyersAndStudent = [
    { type: "student", name: "katrine" },
    { type: "student", name: "kamel" },
    { type: "employer", name: "oussema" },
    { type: "employer", name: "sabrine" },
  ];
  var arrayOfstudent = arrayOfEmloyersAndStudent.filter(
    (student) => student.type == "student"
  );
  var arrayOfEmployers = arrayOfEmloyersAndStudent.filter(
    (employer) => employer.type == "employer"
  );

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <List></List>
      </div>
      <div>
        <ListOfStudents ListStudents={arrayOfstudent}/>
      </div>
      <div>
        <Employers ListEmplyers={arrayOfEmployers}/>
      </div>
      <div className="container" style={{ border: "none", marginTop: "200px" }}>
        <Footer owner={owner}></Footer>
      </div>
    </div>
  );
}

export default App;
