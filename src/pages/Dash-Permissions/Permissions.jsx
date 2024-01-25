import TitleSection from "../../components/TitleSection/TitleSection";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import FormGeneric from "../../components/FormGeneric/FormGeneric";
import Table from "../../components/Table/Table";
import React from 'react';


const Permissions = () => {

    const data = React.useMemo(
        () => [
        { id: 1, name: 'John Doe', age: 28 },
        { id: 2, name: 'Jane Smith', age: 32 },
        // Additional data rows...
        ],
        []
    );
    const columns = React.useMemo(
        () => [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Age', accessor: 'age' },
        ],
        []
    );

    return (
        <ContainerSections>
            <TitleSection text="Permisos de usuario" ubication="left"/>
            <FormGeneric>
                <Table columns={columns} data={data} />
            </FormGeneric>
        </ContainerSections>
    )
}

export default Permissions;