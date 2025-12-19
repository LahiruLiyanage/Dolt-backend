export interface Tasks {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
}
