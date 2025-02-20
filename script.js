document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'task-buttons';

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Выполнено';
        completeButton.className = 'complete-btn';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        buttonsContainer.appendChild(completeButton);
        buttonsContainer.appendChild(deleteButton);
        li.appendChild(buttonsContainer);
        document.getElementById('task-list').appendChild(li);
        taskInput.value = "";
    }
});

const toggleTasksButton = document.getElementById('toggle-tasks');
let showAllTasks = false;

toggleTasksButton.addEventListener('click', function() {
    const tasks = document.querySelectorAll('#task-list li');
    tasks.forEach(task => {
        if (showAllTasks) {
            task.style.display = 'flex'; // Показываем все задачи
        } else {
            if (task.classList.contains('completed')) {
                task.style.display = 'none'; // Скрываем выполненные задачи
            } else {
                task.style.display = 'flex'; // Показываем невыполненные задачи
            }
        }
    });

    // Меняем текст кнопки
    if (showAllTasks) {
        toggleTasksButton.textContent = 'Показать невыполненные';
    } else {
        toggleTasksButton.textContent = 'Показать все задачи';
    }

    // Инвертируем состояние
    showAllTasks = !showAllTasks;
});