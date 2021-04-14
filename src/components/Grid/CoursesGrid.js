import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const CourseGrid = (props) => {
    const [filterValue, setFilterValue] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const onFilterChange = React.useCallback((params) => {
        const filter = params.filterModel.items[0].value;
        setFilterValue(filter);
    }, []);

    React.useEffect(() => {
        let active = true;

        (async () => {
            setLoading(true);
            await props.fetchData({ theme: "ADR" })
            
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
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.courses}
                columns={[{headerName:'Theme', field: 'theme', flex: 1 }, {headerName:'Year',  field: 'year', flex: 0.5,type: 'number'}]}
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