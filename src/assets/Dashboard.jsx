/* import React, { useState } from 'react'
import supabase from './Helper/Supabase'
import { useNavigate } from 'react-router';



 

function Dashboard() {

const navigate = useNavigate()

  const signout = async() =>{
    const {error} = await supabase.auth.signOut();
    if(error) throw error;
    navigate("/CreateLogin")
  }


 */
/* 
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Cement', description: 'Tororo cement sem2 ', price: 'Ugx.30,000/-', file: 'image' },
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('')
  
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (title &&  description && price ) {
      const newTask = {
        id: tasks.length + 1,
        title,
        description,
        price,
        location,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
      setPrice('')
      setLocation('')
    }

    alert("Sent successfully")
  };
 */

/* 
  const handleEditTask = (id) => {
    setEditingTaskId(id);
  };

  const handleUpdateTask = (id, updatedTitle, updatedDescription, updatePrice, updateFile) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title: updatedTitle, description: updatedDescription, price: updatePrice, file: updateFile} : task)));
    setEditingTaskId(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    
  };

   return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <button    onClick={signout} className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
        Log Out
      </button>
      <h2 className="text-2xl font-bold mb-4">Your supply</h2>
      <div   className='flex flex-col gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-900 p-4 rounded-xl shadow-md'
      >
        <input
          type="text"
          placeholder="Supply Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Supply Description/ brand"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full mb-2"
        />

          <input
          type="text"
          placeholder="Price/rate"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full mb-2"
        />

         <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full mb-2"
        />


        <button onClick={handleAddTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </div>
      {tasks.map((task) => (
        <div key={task.id} className="border border-gray-700 p-4 rounded mb-2">
          {editingTaskId === task.id ? (
            <>
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleUpdateTask(task.id, e.target.value, task.description)}
                className="bg-gray-800 text-white p-2 rounded w-full mb-2 text-2xl"
              />

              <input
                type="text"
                value={task.description}
                onChange={(e) => handleUpdateTask(task.id, task.title, e.target.value)}
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />
             
              <input
                type="text"
                value={task.price}
                onChange={(e) => handleUpdateTask(task.id, task.price, e.target.value)}
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />

               <input
                type="text"
                value={task.location}
                onChange={(e) => handleUpdateTask(task.id, task.location, e.target.value)}
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />

            </>
          ) : (
           <div>
               <h2 className='text-2xl font-bold mb-6'>Summery of sent products</h2>
              <h3 className="text-lg font-bold m-4">{`Product: ${task.title}`}</h3>
              <p className='mx-4 mb-2 text-lg'>{`Description: ${task.description}`}</p>
              <p className='mx-4 mb-2'>{`Price: ${task.price}`}</p>
              <p className='mx-4 mb-2'> {`Location: ${task.location}`}</p>
      
            </div>
           
            
          )}
          <div className="flex justify-between mt-2">
            <button onClick={() => handleEditTask(task.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm">
             Send
            </button>
            <button onClick={() => handleDeleteTask(task.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
              Delete
            </button>
          </div>
         
        </div>
         
      ))}
    </div>
  );
}

export default Dashboard;

 */

// PART 2

import React, { useEffect, useState } from 'react'
import supabase from './Helper/Supabase'
import { useNavigate } from 'react-router'

function Dashboard() {
  const navigate = useNavigate()

  
  // 1️⃣ Logout / Sign Out
  const signout = async () => {
    const { error } = await supabase.auth.signOut() // call Supabase signOut
    if (error) throw error
    navigate("/") // redirect to home page after logout
  }

  
  // 2️⃣ State variables
  const [tasks, setTasks] = useState([]) // Stores tasks fetched from Supabase
  const [title, setTitle] = useState('') 
  const [description, setDescription] = useState('') 
  const [price, setPrice] = useState('') 
  const [contact, setContact] = useState('')
   const [location, setLocation] = useState('')  
  const [editingTaskId, setEditingTaskId] = useState(null) 
  const [editTaskData, setEditTaskData] = useState({}) 


  /* ************************************* */ 
  // 3️⃣ Fetch tasks from Supabase
   /* ************************************* */
  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks') // Supabase table name
      .select('*')
      .order('created_at', { ascending: true }) 

    if (error) {
      console.error("Error fetching tasks:", error.message)
    } else {
      setTasks(data)
    }
  }

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks()
  }, [])


   /* ************************************* */
  // 4️⃣ Add new task
   /* ************************************* */
  const handleAddTask = async () => {
    if (!title || !description || !price || !contact) {
      alert("Please fill all required fields")
      return
    }

    const { data, error } = await supabase
      .from('tasks')
      .insert({ title, description, price,contact, location })
      .select() // return the inserted row

    if (error) {
      console.error("Error adding task:", error.message)
      return
    }

    // Update local state to include the new task
    setTasks([...tasks, ...data])
    setTitle('')
    setDescription('')
    setPrice('')
    setContact('')
    setLocation('')

    alert("Sent successfully")
  }

  /* ************************************* */
  // 5️⃣ Delete a task
   /* ************************************* */
  const handleDeleteTask = async (id) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

    if (error) {
      console.error("Error deleting task:", error.message)
      return
    }

    // Update local state after deletion
    setTasks(tasks.filter((task) => task.id !== id))
  }

   /* ************************************* */
  // 6️⃣ Start editing a task
   /* ************************************* */
  const handleEditTask = (task) => {
    setEditingTaskId(task.id)
    setEditTaskData({
      title: task.title,
      description: task.description,
      price: task.price,
      contact: task.contact,
      location: task.location,
    })
  }

   /* ************************************* */
  // 7️⃣ Update task in Supabase
   /* ************************************* */
  const handleUpdateTask = async (id) => {
    const { data, error } = await supabase
      .from('tasks')
      .update(editTaskData)
      .eq('id', id)
      .select() // return the updated row

    if (error) {
      console.error("Error updating task:", error.message)
      return
    }

    // Update local state with updated task
    setTasks(tasks.map((task) => (task.id === id ? data[0] : task)))
    setEditingTaskId(null)
  }

   /* ************************************* */
  // 8️⃣ JSX rendering
   /* ************************************* */
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-6 px-2">
    
      {/* Logout button */}
      <div className='mb-6 py-6'>
        <button
        onClick={signout}
        className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-2 rounded mb-4"
      >
        Log Out
      </button>

      </div>

      <h2 className="text-2xl font-bold mb-4">Product Supply</h2>


      {/* Add new task form */}
      <div className='flex flex-col gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md bg-gray-900 p-4 rounded-xl shadow-md mb-6'>
        <input
          type="text"
          placeholder="Product name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder=" Description / Brand"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Price / Rate"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full mb-2"
        />

         <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded w-full mb-2"
        />


        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>
      

      {/* List of tasks */}
      {tasks.map((task) => (
        <div key={task.id} className="border border-gray-700 p-4 rounded mb-2 w-full max-w-xs sm:max-w-sm md:max-w-md">
          {editingTaskId === task.id ? (
            <>
              <input
                type="text"
                value={editTaskData.title}
                onChange={(e) =>
                  setEditTaskData({ ...editTaskData, title: e.target.value })
                }
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />
              <input
                type="text"
                value={editTaskData.description}
                onChange={(e) =>
                  setEditTaskData({ ...editTaskData, description: e.target.value })
                }
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />
              <input
                type="text"
                value={editTaskData.price}
                onChange={(e) =>
                  setEditTaskData({ ...editTaskData, price: e.target.value })
                }
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />

               <input
                type="text"
                value={editTaskData.contact}
                onChange={(e) =>
                  setEditTaskData({ ...editTaskData, contact: e.target.value })
                }
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />
              <input
                type="text"
                value={editTaskData.location}
                onChange={(e) =>
                  setEditTaskData({ ...editTaskData, location: e.target.value })
                }
                className="bg-gray-800 text-white p-2 rounded w-full mb-2"
              />

              <div className="flex justify-between mt-2">
                <button
                  onClick={() => handleUpdateTask(task.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditingTaskId(null)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded text-sm"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div>
              <h3 className="text-lg font-bold pb-4">{`Product: ${task.title}`}</h3>
              <p className="text-md font-bold pb-2">{`Description: ${task.description}`}</p>
              <p className="text-md pb-2">{`Price: ${task.price}`}</p>
              <p className="text-md pb-2">{`contact: ${task.contact}`}</p>

              <p className="text-md ">{`Location: ${task.location}`}</p>

              <div className="flex justify-between mt-2">
                <button
                  onClick={() => handleEditTask(task)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Dashboard
