import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from '@material-ui/core/Link';


const CourseGrid = (props) => {
    const [filterValue, setFilterValue] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const onFilterChange = React.useCallback((params) => {
        var filter = {};
        var colFilter = params.filterModel.items[0];
        filter[colFilter.columnField] = colFilter.value;
        setFilterValue(filter);
    }, []);

    React.useEffect(() => {
        let active = true;

        (async () => {
            setLoading(true);
            await props.fetchData(filterValue)

            if (!active) {
                return;
            }
            setLoading(false);

        })();

        return () => {
            active = false;
        };
    }, [filterValue]);

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={props.courses}
                columns={[
                    {
                        headerName: 'Theme',
                        field: 'theme',
                        flex: 1,
                        filterable: false,
                        renderCell: (params) => {
                            return (<Link color="inherit" href={`/courses/${params.id}`}>
                                {params.value}
                            </Link>)
                        }
                    },
                    { headerName: 'Year', field: 'year', flex: 0.5, type: 'number' },
                    { headerName: 'Duration', field: 'duration', width:0, type: 'number' },
                ]}
                filterMode="server"
                onFilterModelChange={onFilterChange}
                loading={loading}
                hideFooter={true}
                disableSelectionOnClick={true}
            />
        </div>
    );

}

export default CourseGrid;