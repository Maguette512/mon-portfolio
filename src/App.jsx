import "./App.css";

function App() {
  return (
    <div>
      {/* NAVIGATION */}
      <header>
        <nav>
          <h2>Mon Portfolio</h2>

          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#formation">Formation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

     <main>
  <section id="accueil" className="hero">

    <div className="hero-text">

      <p>Bonjour 👋, je suis</p>

      <h1>Ndeye Maguette</h1>

      <h2>
        Développeuse Web & Réseaux Informatiques
      </h2>

      <p>
        Passionnée par les technologies numériques, je développe
        des applications web modernes et je m'intéresse également
        aux réseaux informatiques.
      </p>

      <div className="hero-buttons">

        <a href="#projets">
          <button>Voir mes projets</button>
        </a>

        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="CV-button"
        >
          Télécharger mon CV
        </a>

      </div>

    </div>

    <div className="hero-image">
      <img
        src="/photo-profil.jpeg"
        alt="Ndeye Maguette - Développeuse Web"
      />
    </div>

  </section>
</main>

     {/* À PROPOS */}
{/* À PROPOS */}
<section id="apropos" className="section about">

  <div className="about-text">

    <p className="section-subtitle">Qui suis-je ?</p>

    <h2>À propos de moi</h2>

    <p>
      Je suis Ndeye Maguette, étudiante en Licence 3 Informatique,
      spécialisée en développement web et réseaux informatiques.
    </p>

    <p>
      Passionnée par l'informatique et les nouvelles technologies,
      j'aime concevoir des applications web modernes et développer
      mes compétences dans le domaine des réseaux informatiques.
    </p>

    <p>
      Mon objectif est de continuer à apprendre, réaliser des projets
      concrets et évoluer professionnellement dans le domaine de
      l'informatique.
    </p>

  </div>

  <div className="about-info">

    <div>
      <strong>🎓 Formation</strong>
      <p>Licence 3 Informatique</p>
    </div>

    <div>
      <strong>💻 Spécialité</strong>
      <p>Développement Web & Réseaux</p>
    </div>

    <div>
      <strong>📅 Diplôme</strong>
      <p>Baccalauréat obtenu en 2024</p>
    </div>

  </div>

</section>

     
{/* COMPÉTENCES */}
<section id="competences" className="section skills-section">

  <p className="section-subtitle">Mon savoir-faire</p>

  <h2>Mes compétences</h2>

  <p className="skills-intro">
    Voici les principales technologies et domaines dans lesquels
    je développe mes compétences.
  </p>

  <div className="skills">

    <div className="skill">
      <div className="skill-header">
        <span>HTML</span>
        <span>80%</span>
      </div>

      <div className="progress">
        <div className="progress-bar html"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-header">
        <span>CSS</span>
        <span>75%</span>
      </div>

      <div className="progress">
        <div className="progress-bar css"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-header">
        <span>JavaScript</span>
        <span>70%</span>
      </div>

      <div className="progress">
        <div className="progress-bar javascript"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-header">
        <span>React</span>
        <span>60%</span>
      </div>

      <div className="progress">
        <div className="progress-bar react"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-header">
        <span>NestJS</span>
        <span>50%</span>
      </div>

      <div className="progress">
        <div className="progress-bar nestjs"></div>
      </div>
    </div>

    <div className="skill">
      <div className="skill-header">
        <span>Réseaux informatiques</span>
        <span>70%</span>
      </div>

      <div className="progress">
        <div className="progress-bar reseaux"></div>
      </div>
    </div>

  </div>

</section>

      {/* PROJETS */}
  <section id="projets" className="section">
  <h2>Mes projets</h2>

  <div className="cards">

    <div className="card">
  <div className="project-icon">🛍️</div>

  <h3>Application de gestion de produits</h3>

  <p>
    Application web permettant de gérer un catalogue de produits :
    ajout, consultation, modification et suppression.
  </p>

  <p className="technologies">
    <strong>Technologies :</strong> React, NestJS, MySQL, TypeORM
  </p>

  <p className="project-type">
    <strong>Type :</strong> Projet de développement web
  </p>
</div>


    <div className="card">
      <h3>Application Todo List</h3>

      <p>
        Application permettant d'ajouter, consulter et supprimer
        des tâches quotidiennes.
      </p>

      <p className="technologies">
        <strong>Technologies :</strong> React, JavaScript, CSS
      </p>

      <button>Voir le projet</button>
    </div>


    <div className="card">
      <h3>Projet réseau informatique</h3>

      <p>
        Mise en place et configuration d'un réseau informatique
        avec plusieurs équipements.
      </p>

      <p className="technologies">
        <strong>Technologies :</strong> Cisco, TCP/IP, Adressage IP
      </p>

      <button>Voir le projet</button>
    </div>

  </div>
</section>

     {/* FORMATION */}
<section id="formation" className="section formation-section">

  <p className="section-subtitle">Mon parcours</p>

  <h2>Ma formation</h2>

  <p className="formation-intro">
    Mon parcours académique me permet de développer mes connaissances
    en informatique, en développement web et en réseaux.
  </p>

  <div className="formation-list">

    <div className="formation-card">
      <div className="formation-icon">🎓</div>

      <div className="formation-content">
        <span className="formation-status">En cours</span>

        <h3>Licence 3 en Informatique</h3>

        <p>
          Spécialité : Développement Web et Réseaux Informatiques
        </p>

        <span className="formation-date">En cours</span>
      </div>
    </div>

    <div className="formation-card">
      <div className="formation-icon">📘</div>

      <div className="formation-content">
        <h3>Baccalauréat</h3>

        <p>Diplôme obtenu en 2024</p>

        <span className="formation-date">2024</span>
      </div>
    </div>

  </div>

</section>

      {/* CONTACT */}
<section id="contact" className="section contact">

  <p className="section-subtitle">Restons en contact</p>

  <h2>Contactez-moi</h2>

  <p className="contact-intro">
    Vous avez un projet, une opportunité professionnelle ou souhaitez
    échanger avec moi ? Je serai ravie de vous répondre.
  </p>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Mes coordonnées</h3>

      <p>
        📧 <strong>Email :</strong><br />
        <a href="mailto:ndeyemaguettet575@gmail.com">
          ndeyemaguettet575@gmail.com
        </a>
      </p>

      <p>
        📱 <strong>Téléphone :</strong><br />
        <a href="tel:+221705038217">
          +221 70 503 82 17
        </a>
      </p>

      <p>
  💻 <strong>GitHub :</strong><br />
       <a
        href="https://github.com/Maguette512"
       target="_blank"
        rel="noopener noreferrer"
     >
         Maguette512
     </a>
       </p>

      <p>
        💼 <strong>LinkedIn :</strong><br />
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mon profil LinkedIn
        </a>
      </p>
    </div>

    <form
      className="contact-form"
      action="mailto:ndeyemaguettet575@gmail.com"
      method="post"
      encType="text/plain"
    >
      <input
        type="text"
        name="nom"
        placeholder="Votre nom"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Votre adresse email"
        required
      />

      <textarea
        name="message"
        placeholder="Votre message"
        rows="6"
        required
      ></textarea>

      <button type="submit">
        Envoyer le message
      </button>
    </form>

  </div>

</section>
      {/* FOOTER */}
      <footer>
        <p>© 2026 Ndeye Maguette — Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default App;