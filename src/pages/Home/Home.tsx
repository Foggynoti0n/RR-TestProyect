"use client";
import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';

export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps>  = ({}) => {

	const columns: GridColDef[] = [
		{ field: 'id', flex:2, headerName: 'ID', width: 70, renderCell: (params: GridRenderCellParams) => <> {params.value}</>},
		{ field: 'name', flex:2, headerName: 'First name', minWidth: 150, renderCell: (params: GridRenderCellParams) => <> {params.value}</> },
		{ field: 'category', flex:2, headerName: 'Category', minWidth: 150 },
		{ field: 'company', flex:2, headerName: 'Company', type: 'number', minWidth: 150, renderCell: (params: GridRenderCellParams) => <> {params.value}</>  },
		{ field: 'levelOfHappiness', flex:2, headerName: 'LevelOfHappiness', minWidth: 150, renderCell: (params: GridRenderCellParams) => <> {params.value}</>  },
	  ];
	return (
		<div>
 			<DataGrid
			rows={People}
			columns={columns}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight
			pageSizeOptions={[5, 10, 20]}
            initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
		 getRowId={(row:any)=> row.id}
		    
		
			/>
 			
 		</div>
	);
};

export default Home;

