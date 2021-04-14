import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteStudent } from '../../services/api/courses';

const StudentsGrid = (props) => {
    const [loadingDel, setLoadingDel] = useState(false);

    const handleDeletion = (id) => {
        setLoadingDel(true);
        
        const res = deleteStudent(props.courseId,id)
        .then((res) => {
            props.fetchData();
        })
        .catch((err) => {
            //TODO: show error
            console.log(err)
        })
        .finally(() => {
            setLoadingDel(false);
        })


    }

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={props.students}
                columns={[
                    { headerName: 'Name', field: 'fname', flex: 0.3 },
                    { headerName: 'Last Name', field: 'lname', flex: 0.3 },
                    { headerName: 'Score', field: 'score', flex: 0.2 },
                    {
                        headerName: ' ', field: 'action', flex: 0.2,
                        renderCell: (params) => {
                            return (
                                <IconButton aria-label="delete" color="primary" onClick={(e) => { handleDeletion(params.id) }}>
                                    <DeleteIcon />
                                </IconButton>);
                        }
                    }
                ]}
                loading={props.loading || loadingDel}
                hideFooter={true}
                disableSelectionOnClick={true}
            />
        </div>
    );

}

export default StudentsGrid;