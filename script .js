function addTask() {
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDifficulty = document.getElementById('taskDifficulty').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    const taskTags = document.getElementById('taskTags').value.split(',');

    if (taskDescription === '') {
        alert('Please enter a task description.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    taskItem.innerHTML = `
        <div class="details">
            <span><strong>${taskDescription}</strong> [${taskDifficulty}]</span>
            <span>Due: ${taskDueDate}</span>
        </div>
        <div>Tags: ${taskTags.map(tag => `<span class="tag">${tag.trim()}</span>`).join(', ')}</div>
        <div class="checklist">
            <input type="text" placeholder="Add sub-task" onkeypress="addSubTask(event, this)">
        </div>
        <button class="delete-button" onclick="deleteTask(this)">✖</button>
    `;

    taskList.appendChild(taskItem);

    // Clear inputs
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDifficulty').value = 'Trivial';
    document.getElementById('taskDueDate').value = '';
    document.getElementById('taskTags').value = '';
}

function addDaily() {
    const dailyDescription = document.getElementById('dailyDescription').value;
    const dailyDifficulty = document.getElementById('dailyDifficulty').value;
    const dailyTags = document.getElementById('dailyTags').value.split(',');

    if (dailyDescription === '') {
        alert('Please enter a daily description.');
        return;
    }

    const dailyList = document.getElementById('dailyList');
    const dailyItem = document.createElement('li');
    dailyItem.className = 'daily';

    dailyItem.innerHTML = `
        <div class="details">
            <span><strong>${dailyDescription}</strong> [${dailyDifficulty}]</span>
        </div>
        <div>Tags: ${dailyTags.map(tag => `<span class="tag">${tag.trim()}</span>`).join(', ')}</div>
        <div class="checklist">
            <input type="text" placeholder="Add sub-task" onkeypress="addSubTask(event, this)">
        </div>
        <button class="delete-button" onclick="deleteTask(this)">✖</button>
    `;

    dailyList.appendChild(dailyItem);

    // Clear inputs
    document.getElementById('dailyDescription').value = '';
    document.getElementById('dailyDifficulty').value = 'Trivial';
    document.getElementById('dailyTags').value = '';
}

function addSubTask(event, input) {
    if (event.key === 'Enter') {
        const subTaskText = input.value;
        if (subTaskText === '') return;

        const checklist = input.parentElement;
        const subTaskItem = document.createElement('div');
        subTaskItem.innerHTML = `<input type="checkbox"> ${subTaskText}`;
        checklist.insertBefore(subTaskItem, input);

        input.value = '';
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}



