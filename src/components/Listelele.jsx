import React from "react";
import { Table, Container } from "react-bootstrap";
const Listele = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">KISILER TABLOSU</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Yaş</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default Listele;
