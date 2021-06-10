import React from "react";
import { Edit16, TrashCan16 } from "@carbon/icons-react";
import { render } from "react-dom";
import "carbon-components/css/carbon-components.min.css";
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableSelectAll,
  TableSelectRow,
  Button
} from "carbon-components-react";
import { headerData, rowData } from "./sampleData";

const App = () => (
  <DataTable rows={rowData} headers={headerData}>
    {({
      rows,
      headers,
      getHeaderProps,
      getTableProps,
      getRowProps,
      getSelectionProps,
      getBatchActionProps,
      onInputChange,
      selectedRows,
      getToolbarProps
    }) => (
      <TableContainer title="DataTable">
        <TableToolbar {...getToolbarProps()}>
          <TableBatchActions {...getBatchActionProps()}>
            <TableBatchAction
              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
              renderIcon={TrashCan16}
              // eslint-disable-next-line no-console
              onClick={() => {
                console.log("----->", getSelectionProps({ rows }));
              }}
            >
              Delete
            </TableBatchAction>
          </TableBatchActions>
          <TableToolbarContent>
            <TableToolbarSearch
              persistent="true"
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
              onChange={onInputChange}
            />
            <Button
              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
              renderIcon={Edit16}
              onClick={() => console.log("edit")}
              size="small"
              kind="ghost"
            >
              Edit
            </Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              <TableSelectAll {...getSelectionProps()} />
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableSelectRow {...getSelectionProps({ row })} />
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

render(<App />, document.getElementById("root"));
