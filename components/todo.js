import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]); // State to manage list of tasks
  const [error, setError] = useState("");

  const handleChange = (val) => {
    if (val.length === 0) {
      setError("No Task entered yet!");
    } else if (val.length < 3) {
      setError("Characters must be more than 3!");
    } else {
      setError("");
    }
    setTask(val);
  };

  const handlePress = () => {
    if (!task || error) {
      Alert.alert("Please enter a valid task!");
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Math.random().toString(), text: task, completed: false },
      ]); // Add new task with completed state set to false
      setTask(""); // Clear the input field after adding the task
      // Alert.alert("Task added successfully!");
    }
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Remove task by id
    // Alert.alert("Task deleted successfully!");
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    ); // Toggle the completed state of the task
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  return (
    <View style={todoStyle.container}>
      <Text style={todoStyle.header}>My ToDo List</Text>

      <View style={todoStyle.counterContainer}>
        <Text style={todoStyle.counterText}>Total Tasks: {totalTasks}</Text>
        <Text style={todoStyle.counterText}>
          Completed Tasks: {completedTasks}
        </Text>
      </View>

      <View style={todoStyle.row}>
        <TextInput
          value={task}
          onChangeText={handleChange}
          keyboardType="default"
          placeholder="Enter your task"
          style={todoStyle.input}
        />
        <Button title="Add Task" color="pink" onPress={handlePress} />
      </View>
      {error ? <Text style={todoStyle.error}>{error}</Text> : null}

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={todoStyle.taskContainer}>
            <TouchableOpacity
              onPress={() => toggleComplete(item.id)}
              style={todoStyle.taskTextContainer}
            >
              <Text
                style={[
                  todoStyle.taskText,
                  item.completed && todoStyle.completedTaskText,
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={todoStyle.deleteButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={todoStyle.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const todoStyle = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    backgroundColor: "pink",
    marginVertical: 50,
    color: "white",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  counterText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderColor: "pink",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
  error: {
    color: "red",
    marginTop: 10,
    marginLeft: 12,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "grey",
  },
  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: "white",
  },
});

export default Todo;
