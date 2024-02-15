import Tr from "./Tr/Tr";

const Table = ({headers=["Nombre", "Contacto", "Empresa", "Acciones"]}, body={}) => {
    return (
    <table>
        <thead>
            <tr>
                {
                    headers.map(h => <th>{h}</th>)
                }
            </tr>
        </thead>
        <tbody>
            <Tr/>
        </tbody>
    </table>
    )
};
export default Table;
    