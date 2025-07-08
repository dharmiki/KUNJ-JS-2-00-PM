//add
    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const taskList = document.getElementById("taskList");

      const taskDiv = document.createElement("div");
      taskDiv.className = "task";

      const taskInput = document.createElement("input");
      taskInput.type = "text";
      taskInput.value = taskText;
      taskInput.setAttribute("readonly", true);

      const buttonGroup = document.createElement("div");
      buttonGroup.className = "task-buttons";
      //edit
      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.innerHTML = '<i class="fas fa-edit"></i>';
      editBtn.onclick = () => {
        if (taskInput.hasAttribute("readonly")) {
          taskInput.removeAttribute("readonly");
          taskInput.focus();
          editBtn.innerHTML = '<i class="fas fa-check"></i>';
        } else {
          taskInput.setAttribute("readonly", true);
          editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        }
      };
      //delete
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
      deleteBtn.onclick = () => {
        taskList.removeChild(taskDiv);
      };

      buttonGroup.appendChild(editBtn);
      buttonGroup.appendChild(deleteBtn);
      taskDiv.appendChild(taskInput);
      taskDiv.appendChild(buttonGroup);
      taskList.appendChild(taskDiv);

      input.value = "";
    }