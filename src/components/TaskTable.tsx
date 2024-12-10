import { Button, Table } from 'antd';
import { Task } from './TaskList';

interface TaskTableProps {
  tasks: Task[];
  onDelete: (id: number) => void; // Changed id to number for consistency
  onEdit: (task: Task) => void;
}

export const TaskTable: React.FC<TaskTableProps> = ({ tasks, onDelete, onEdit }) => {
  // Check if tasks is an array before passing it to the Table component
  const validTasks = Array.isArray(tasks) ? tasks : [];

  const columns = [
    {
      title: 'Task Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: boolean) => (status ? 'Completed' : 'Not Completed'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Task) => (
        <span>
          <Button onClick={() => onEdit(record)}>Edit</Button>
          <Button danger onClick={() => onDelete(record.id)}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={validTasks}
      rowKey="id"
      pagination={{ pageSize: 3 }}
    />
  );
};
