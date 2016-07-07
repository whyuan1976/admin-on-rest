import React from 'react';
import Resource from '../../src/crud/Resource';
import Datagrid from '../../src/list/data/Datagrid';
import Column from '../../src/list/column/Column';

import { Link } from 'react-router'
const ActionColumn = ({record}) => (
    <Link to={`/posts/${record.id}`}>{record.id}</Link>
)

const PostList = () => (
    <Resource name="posts" path="http://localhost:3000/posts">
        <Datagrid title="All posts">
            <Column label="id" source="id"/>
            <Column label="title" source="title"/>
            <Column label="published_at" source="published_at"/>
            <Column label="average_note" source="average_note"/>
            <Column label="views" source="views"/>
            <ActionColumn />
        </Datagrid>
    </Resource>
);

export default PostList;