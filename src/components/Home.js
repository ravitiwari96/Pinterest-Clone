import React from 'react'


function Home() {
  return (
      <div class="card" style={{ width: `18rem` }}>
      <img src="https://i.pinimg.com/236x/41/d6/0a/41d60afaaa1342148d21500ecbac66eb.jpg" className="card-img-top" alt="..." width={100} height={300} />
      <div class="card-body">
        <h5 class="card-title">Blue</h5>
        <p class="card-text">Flower</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Home