import { DataGrid } from '@mui/x-data-grid'

interface Props {
  columns: any
  rows: any
}

const DataTable = ({ columns, rows }: Props) => {
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        hideFooter
        hideFooterPagination
        // checkboxSelection
      />
    </>
  )
}

export default DataTable
