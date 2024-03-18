import React from 'react';

const TaskItem = (props) => {
    return (
        <div className="main__taskItem">
            <div className="main__taskItem_title">{props.post.title}</div>
            <div className="main__taskItem_time">Создано: {props.post.time}</div>
            <div className="main__taskItem_prioriti">Приоритет: {props.post.prioriti}</div>
            <div className="main__taskItem_tags">Отметки: {props.post.tags}</div>
        </div>
    );
};

export default TaskItem;