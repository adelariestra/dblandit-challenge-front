import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';


const StudentsGrid = (props) => {

    return (
        <div style={{ height:600, width: '100%' }}>
            <DataGrid
                rows={props.students}
                columns={[
                    { headerName: 'Name', field: 'fname', flex: 0.5 },
                    { headerName: 'Last Name', field: 'lname', flex: 0.5 }
                ]}
                loading={props.loading}
                hideFooter={true}
                disableSelectionOnClick={true}
            />
        </div>
    );

}

export default StudentsGrid;