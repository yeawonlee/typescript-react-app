import React, { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import { Column } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

interface rowsType {
  id: number;
  product: string;
  owner: string;
}

const columns: Column[] = [
  { name: 'id', title: 'ID' },
  { name: 'product', title: 'Product' },
  { name: 'owner', title: 'Owner' },
];

const rows: rowsType[] = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
];

/* 2.
 * Grid.RootProps (grid root layout을 렌더링하는 component에 전달된 속성)
 * - Field: 'children?'
 * - Type: ReactNode
 * - Description: root layout에 배치할 React 노드
 */
interface DataGridProps extends Grid.RootProps {
  children?: ReactNode;
}

/* 1.
 * Grid
 * - Properties: 'rootComponent'
 * - Type: 'ComponentType<Grid.RootProps>'
 * - Description: grid root layout을 렌더링하는 component
 */
type RootComponentType = {
  rootComponent: React.ComponentType<DataGridProps>
}

const GridComponent = ({ rootComponent }: RootComponentType) => {
  return (
    <Paper>
      <Grid rows={rows} columns={columns} rootComponent={rootComponent}>
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
};


export default GridComponent