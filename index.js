$(document).ready(function() {
  $("#add-new-todo-button").click(function(){
   // Assign the todo description and pomodoro estimate to variables
   var description = $("#new-todo-description").val();
   var pomodoroEstimate = $("#new-pomodoro-estimate").val();

   // Append the new todo to the list of todos
   $("ul").append("<li> <input type='checkbox'/> " + description + " <span class='pomodoro-estimate'>" + pomodoroEstimate + " pomodoros</span> </li>")

   // Clear the input fields for new-todo-description and pomdoro-estimate by entering an empty string as the value
   $("#new-todo-description").val("");
   $("#new-pomodoro-estimate").val("");
 })
})