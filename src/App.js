import logo from './logo.svg';
import './App.css';
import Comment from './Comment'

function App() {
  const name = 'diego';
  const post = {
    title : "Dinosaurs are awesome",
    author : "Stealthy Stegosaurus",
    body : "Check out this body property",
    comments : ["First", "Great Post", "Hire this author now"]
  }
  //map returns an array
  const comments = post.comments.map(comment=> (<Comment text={comment}/>))
  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.body}</p>
      <h2>Comments:</h2>
      <p>{post.comments[0]}</p>
      {comments}
    </div>
  );
}

export default App;
