import React, {useState} from 'react';

const TaskForm = ({create}) => {
    const [title, setTitle] = useState("")
    const [prioriti, setPrioriti] = useState("")
    const [tags, setTags] = useState("")

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            id: Date.now(),
            title,
            time: new Date().toLocaleDateString(),
            prioriti,
            tags
        }
        create(newTask)
        setTitle("")
        setPrioriti("")
        setTags("")
    }
    return (
        <form>
            <input className="modalWindow__input"
                   value={title}
                   onChange={e => setTitle(e.target.value)}
                   type="text"
                   placeholder="Название задачи"
            />
            <input className="modalWindow__input"
                   value={prioriti}
                   onChange={e => setPrioriti(e.target.value)}
                   type="text"
                   placeholder="Приоритет"/>
            <input className="modalWindow__input"
                   value={tags}
                   onChange={e => setTags(e.target.value)}
                   type="text"
                   placeholder="Тэги"/>
            <button className="modalWindow__getTask" onClick={addNewTask}>Создать задачу</button>
        </form>
    );
};

export default TaskForm;