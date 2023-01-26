import style from './Todo.module.css'

const Todo = ({todo}) => {

    const {id, title, completed}=todo

    return (
        <div className={style.Todo}>
            <div className={style.title}>{id}. {title}</div>
            <div>completed: {`${completed}`}</div>
        </div>
    );
};

export {Todo};