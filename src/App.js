import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript1', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ])

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title);
    console.log(bodyInputRef.current.value);
  }

  return (
    <div className="App">
      <form>
        {/* Керований компонент */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Назва поста"
        />
        {/* Некерований компонент */}
        <MyInput 
          ref={bodyInputRef}
          type="text" 
          placeholder="Опис поста"
        />
        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>
      <PostList posts={posts} title= "Пости про JS"/>
    </div>
  );
}

export default App;
