import { Form, Input, Button, Select, DatePicker, Switch, notification } from 'antd';
import { useState } from 'react';

const { Option } = Select;

interface TaskFormProps {
  onAddTask: (task: any) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [form] = Form.useForm();
  const [taskStatus, setTaskStatus] = useState(false);

  const handleStatusChange = (value: boolean) => {
    setTaskStatus(value);
  };

  const handleSubmit = (values: any) => {
    const newTask = {
      title: values.title,
      priority: values.priority,
      dueDate: values.dueDate.format('YYYY-MM-DD'),
      status: taskStatus,
    };

    // Save to localStorage (instead of a backend)
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    // Add the task to the parent component
    onAddTask(newTask);

    // Show success notification
    notification.success({
      message: 'Task Added',
      description: 'Your task has been added successfully!',
    });

    // Reset the form fields
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item name="title" label="Task Title" rules={[{ required: true, message: 'Please enter the task title!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
        <Select className="text-start">
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </Form.Item>
      <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item className="text-start" valuePropName="checked">
        Status: <Switch onChange={handleStatusChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};
