import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid p-3">
            <NavLink className="navbar-brand" to="#">QuizKwik</NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="#">Pricing</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="#">Course</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">Blog</NavLink>
                </li>
              </ul>
            </div>
            <NavLink className="navbar-brand" to="#">Login</NavLink>
            <button className='btn btn-danger'>Registration</button>
          </div>
        </nav>

        <div className='d-flex justify-content-around'>
          <div className='d-flex shadow p-3 m-3' style={{ width: "700px", height: "250px"}}>
            <div className='fs-1'>Daily Quiz, Daily Bonus Play-Today
              <p className='fs-6'>"Join QuizKwik for daily quizzes, practice new questions, earn bonuses, and boost your knowledge with fun challenges!"</p>
            </div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2pDzkUcvl7iGfKtQzSEjogYUJpeD6RAzEg&s' alt='' /></div>
          </div>
          <div className=''>
            <img src='https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg' alt='' />
          </div>
        </div>

      <div className='fs-2 text-center' style={{width:'1300px',height:'250px',marginLeft:'100px',fontFamily:'sans-serif'}}>Why Choose Quiz
        <div className='d-flex justify-content-center'>
           <div className='shadow p-3 m-3 hover-effect bg-light' style={{height:'200px',width:'800px',transition: 'background-color 0.3s ease'}}>
            <p className='fs-4 text-center'>Interactive Learning</p>
            <p className='fs-6 text-center'>Quizzes turn passive learning into active engagement. They encourage participants to think critically, recall information, and apply knowledge in a fun and interactive way.</p>
           </div>
           <div className='shadow p-3 m-3 hover-effect bg-light' style={{height:'200px',width:'800px'}}>
            <p className='fs-4 text-center'>Knowledge Testing</p>
            <p className='fs-6 text-center'>A quiz is an excellent tool to measure understanding of a topic. It provides immediate feedback, helping identify areas of strength and topics that need more focus.</p>
           </div>
           <div className='shadow p-3 m-3 hover-effect bg-light' style={{height:'200px',width:'800px'}}>
            <p className='fs-4 text-center'>Skill Development</p>
            <p className='fs-6 text-center'>Taking or creating quizzes enhances critical thinking, problem-solving, and decision-making skills. It can also improve memory retention by reinforcing learning.</p>
           </div>
        </div></div>

        <div className='d-flex' style={{ width: "100%", height: '400px',marginTop:'50px' }}>
          <img src='https://as1.ftcdn.net/v2/jpg/02/03/91/56/1000_F_203915680_M7OaU5UgMNF1clfJuTeXpaS4yxcpQ1Gc.jpg' alt='' />
          <Link to="/QuizApp">
            <button
              className='btn btn-danger'
              style={{ height: '50px', width: '150px', marginTop: '200px', marginLeft: '200px' }}
            >
              Try It For Free
            </button>
          </Link>
        </div>

        {/* Footer Section */}
        <div className=''>
          <div className="bg-dark text-white mt-5">
            <div className="container py-4">
              <div className="row">
                {/* About Section */}
                <div className="col-md-4 mb-3">
                  <h5>About QuizKwik</h5>
                  <p>
                    QuizKwik is your daily destination for fun, learning, and rewards.
                    Challenge yourself, improve your knowledge, and win exciting bonuses!
                  </p>
                </div>

                {/* Links Section */}
                <div className="col-md-4 mb-3">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><NavLink to="#" className="text-white text-decoration-none">Home</NavLink></li>
                    <li><NavLink to="#" className="text-white text-decoration-none">Daily Quizzes</NavLink></li>
                    <li><NavLink to="#" className="text-white text-decoration-none">Leaderboard</NavLink></li>
                    <li><NavLink to="#" className="text-white text-decoration-none">Contact Us</NavLink></li>
                  </ul>
                </div>

                {/* Social Media Section */}
                <div className="col-md-4 mb-3 text-center">
                  <h5>Follow Us</h5>
                  <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <hr className="border-light" />
              <div className="text-center">
                <p className="mb-0">&copy; 2024 QuizKwik. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
