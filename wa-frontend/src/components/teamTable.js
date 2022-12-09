import React from 'react';
import { Table, Col } from 'antd';
import './TeamTable.css';

const TeamTable = () => {
  const data = [
    {
      key: '1',
      teamName: 'Team A',
      wins: '125',
      losses: '78'
    },
    {
      key: '2',
      teamName: 'Team B',
      wins: '105',
      losses: '98'
    },
    // ...
  ];

  return (
    <Table dataSource={data}>
      <Col
        title="Team Name"
        dataIndex="teamName"
        key="teamName"
      />
      <Col
        title="All-Time Regular Season Wins"
        dataIndex="wins"
        key="wins"
      />
      <Col
        title="All-Time Regular Season Losses"
        dataIndex="losses"
        key="losses"
      />
    </Table>
  );
};

export default TeamTable;
