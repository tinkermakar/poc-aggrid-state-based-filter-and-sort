/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

function App() {
  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Camry', price: 35000 },
    { make: 'Ford', model: 'Fiesta', price: 32000 },
    { make: 'Porsche', model: 'Cayenne', price: 72000 },
  ]);
  const [gridSort, setGridSort] = useState(null);
  const [gridFilter, setGridFilter] = useState(null);
  const grid = useRef(null);

  const defaultColumns = [
    { headerName: 'Make', field: 'make', resizable: true },
    { headerName: 'Model', field: 'model', resizable: false }, // autoSizeAllColumns overrides resizable: false
    { headerName: 'Price', field: 'price', resizable: true },
    { headerName: 'date', field: 'date', resizable: false, maxWidth: 100 }, // only maxWidth curbs autoResize
  ];

  const newData = {
    make: 'Toyota',
    model: 'Corolla is the Best !!!!!!',
    price: 35000,
    date: new Date(),
  };

  const addData = () => setRowData([...rowData, newData]);

  const restoreGrid = () => {
    // if (sort) grid.current.columnApi.applyColumnState({ state: sort });
    // if (filter) grid.current.api.setFilterModel(filter);
  };

  const onSortChanged = params => setGridSort(params.columnApi.getColumnState());
  const onFilterChanged = params => setGridFilter(params.api.getFilterModel());

  // ATTENTION React state gets distorted inside these functions.
  // Never use state variables in them. You may only setState inside.
  const gridOptions = { onSortChanged, onFilterChanged };

  useEffect(() => {
    console.log(gridSort);
  }, [gridSort]);

  useEffect(() => {
    console.log(gridFilter);
  }, [gridFilter]);

  return (
    <div className="App">
      <button
        className="add-data"
        onClick={addData}
        type="button"
      >
        Add sample data
      </button>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          animateRows
          columnDefs={defaultColumns}
          gridOptions={gridOptions}
          modules={[ClientSideRowModelModule]}
          onGridReady={restoreGrid}
          // onRowClicked={onRowClicked}
          ref={grid}
          rowData={rowData}
          suppressFieldDotNotation // Important to display dots in headers
          defaultColDef={{
            sortable: true,
            resizable: true,
            filter: false,
            filterParams: {
              buttons: ['apply'],
              newRowsAction: 'keep',
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
