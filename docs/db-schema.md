## ER図 (Entity Relationship Diagram)

```mermaid
erDiagram
    users ||--o{ workspace_members : belongs_to
    workspaces ||--o{ workspace_members : contains
    workspaces ||--o{ tasks : owns
    workspaces ||--o{ categories : has
    categories ||--o{ tasks : categorizes
    users ||--o{ tasks : creates
    tasks ||--o{ task_dependencies : "precedes (A)"
    tasks ||--o{ task_dependencies : "follows (B)"
    tasks ||--o{ ai_task_metadata : has_logs