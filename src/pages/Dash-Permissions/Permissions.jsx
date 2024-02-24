import TitleSection from "../../components/TitleSection/TitleSection";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import FormGeneric from "../../components/FormGeneric/FormGeneric";
import React from 'react';
import AuthLayout from "../../components/AuthLayout";
import TableExample from "../../components/Table/Table";


const Permissions = () => {

    return (
        <AuthLayout authentication={false} roles={[]}>
            <ContainerSections>
                <TitleSection text="Permisos de usuario" ubication="left"/>
                <TableExample/>

                {/* <Table columns={columns} data={data} /> */}
            </ContainerSections>
        </AuthLayout>
    )
}

export default Permissions;