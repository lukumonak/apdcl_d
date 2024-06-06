import Table from 'react-bootstrap/Table';

function BusStur() {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th><div style={{ borderRadius: "50%", height: "14px", width: '14px', background: "red" }}></div></th>
                    <th><b>R-Y</b></th>
                    <th><b>Y-B</b></th>
                    <th><b>B-R</b></th>


                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>VOL</b></td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td><b>AMP</b></td>
                    <td>5</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td><b>MW</b></td>
                    <td>4</td>
                    <td>4</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td><b>PF</b></td>
                    <td>2</td>
                    <td>2</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td><b>Free</b></td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default BusStur;