<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- Change the <title> from "Page Title" to "Hello World" -->
  <title>Patrick Baker</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
  <script src="https://kit.fontawesome.com/39f65d9317.js"></script>
</head>

<body>
  <div id="navbar" class="section">
    <div id="navbar-content">
      <p><a href="#about-section">About</a></p>
      <p><a href="#projects">Projects</a></p>
      <p><a href="#contacts">Contact</a></p>
    </div>
  </div>
  <div id="header-image" c;ass="section">
    <div id="header-title">
      <h1>PATRICK BAKER</h1>
      <h3>SOFTWARE ENGINEER.</h3>
    </div>
  </div>
  <div id="about-section" class="section">
    <h1>PATRICK BAKER</h1>
    <h3>SOFTWARE ENGINEER.</h3>
    <img src="Projectphotos/portrait.jpg" alt="Professional Portrait" />
    <div id="about-bio">
      <p>As a language learner and teacher, I thought programming was an entirely different, undiscoverable world;
        as it turns out, the skills I have acquired transfer over well.
        I still love working with human language, but working in programming also scratches the itch on the technical,
        logic-oriented side of my brain.
        And the best part about tech: there is always plenty to learn.</p>
      <p>I am a full-stack engineer trained in React.js, node/express, and postgreSQL,
        but I am also a world traveler that speaks Russian, with an educational background in Organic Chemistry and
        experience in retail management.
        I'll play board games, get a pint at the pub, and talk shop, sports, or cultural topics,
        but work comes first and I'm always excited to take it one step further.</p>
    </div>
  </div>
  <div id="projects" class="section">
    <h1>PROJECTS</h1>
    <div class="container" id="project-container">
      <div class="row">
        <div class="col-lg project-tile">
          <img class="project-image" src="Projectphotos/translation.jpg" />
          <div class="project-description">
            <h5 class="project-title">LexikOn</h5>
            <p>A mobile-first platform which saves translated words for English learners of Russian.
              Click
              <a href="https://github.com/patrick-baker/lexikOn" target="_blank" class="code-link">here</a>
              to see my code.
            </p>
            <p><i>December 2019</i></p>
            <a href="https://lexikon-language.herokuapp.com/" target="_blank">
              <div class="button">Go To App</div>
            </a>
          </div>
        </div>
        <div class="col-lg project-tile">
          <img class="project-image" src="Projectphotos/theater.jpg" />
          <div class="project-description">
            <h5 class="project-title">Movie List</h5>
            <p>A place where users view details and edit movies in their list.
              Click
              <a href="https://github.com/patrick-baker/movie-sagas-master" target="_blank" class="code-link">here</a>
              to see my code.
            </p>
            <p><i>November 2019</i></p>
            <a href="https://movies-list-react.herokuapp.com/#/" target="_blank">
              <div class="button">Go To App</div>
            </a>
          </div>
        </div>
        <div class="col-lg project-tile">
          <img class="project-image" src="Projectphotos/feedback.jpg" />
          <div class="project-description">
            <h5 class="project-title">Feedback Loop</h5>
            <p>A feedback loop portraying that of Prime Academy. React and Redux state management.
              Click
              <a href="https://github.com/patrick-baker/redux-feedback-loop" target="_blank" class="code-link">here</a>
              to see my code.
            </p>
            <p><i>November 2019</i></p>
            <a href="https://lexikon-language.herokuapp.com/" target="_blank">
              <div class="button">Go To App</div>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg project-tile">
          <img class="project-image" src="Projectphotos/to-do.jpg" />
          <div class="project-description">
            <h5 class="project-title">To-Do-List</h5>
            <p>To-Do-List application using newly learned PostgresQL technology. Basic CRUD.
              Click
              <a href="https://github.com/patrick-baker/to-do-list" target="_blank"
                class="code-link">here</a>
              to see my code.
            </p>
            <p><i>October 2019</i></p>
            <a href="https://my-sql-to-do-app.herokuapp.com/" target="_blank">
              <div class="button">Go To App</div>
            </a>
          </div>
        </div>
        <div class="col-lg project-tile">
          <img class="project-image" src="Projectphotos/bonus-calculator.jpg" />
          <div class="project-description">
            <h5 class="project-title">Bonus Calculator</h5>
            <p>My first weekend app at Prime Academy. A purely front-end salary calculator using jQuery.
              Click
              <a href="https://github.com/patrick-baker/salary-calculator" target="_blank" class="code-link">here</a>
              to see my code.
            </p>
            <p><i>October 2019</i></p>
            <a href="https://confident-bhabha-2f84bc.netlify.com/" target="_blank">
              <div class="button">Go To App</div>
            </a>
          </div>
        </div>
        <div class="col-lg project-tile">
          <img class="project-image" src="Projectphotos/RPS.jpg" />
          <div class="project-description">
            <h5 class="project-title">Rock, Paper, Scissors</h5>
            <p>My first ever application. A Rock, Paper, Scissors game against the computer.
              Click
              <a href="https://github.com/patrick-baker/RPS" target="_blank" class="code-link">here</a>
              to see my code.
            </p>
            <p><i>June 2018</i></p>
            <a href="https://boring-gates-b221c6.netlify.com/" target="_blank">
              <div class="button">Go To App</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="contacts" class="section">
    <div id="footer-flex">
      <div id="footer-header">
        <h1>Want to work together?</h1>
        <h3>Let's get in touch.</h4>
      </div>
      <hr>
      <div id="icon-bar">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <a href="https://www.linkedin.com/in/baker-patrick/"><i class="fab fa-linkedin"> &nbsplinkedin.com/in/baker-patrick</i></a>
            </div>
            <div class="col-sm">
              <a href="https://github.com/patrick-baker"><i class="fab fa-github"> &nbspgithub.com/patrick-baker</i></a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <i class="fas fa-envelope"> &nbspBakerpj1992@gmail.com</i>
            </div>
            <div class="col-sm">
              <i class="fas fa-mobile-alt"> &nbsp651-417-3200</i>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <p>
        Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more. -
        Nikola
        Tesla
      </p>
    </div>
  </div>
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
  integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
  integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="index.js"></script>

</html>