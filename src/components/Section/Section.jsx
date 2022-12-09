import Table from "react-bootstrap/Table";

function DarkExample(props) {
  console.log(props);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={"10%"}>{props.id}</td>
          <td width={"30%"}>{props.name}</td>
          <td width={"30%"}>{props.lastName}</td>
          <td width={"30%"}>{props.age}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DarkExample;
