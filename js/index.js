const projects = [
    {
        id: 1,
        title: "My Info <sup>v1</sub> <sup>2021</sub>",
        description: "My previous personal website. Responsive, Clean, and Simple.",
        image: "imgs/My_Info.jpeg",
        url: "https://ayman-121.github.io/My_Info/",
        category: "portfolio",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        id: 2,
        title: "QQQ Media <sub>Mock</sub> <sup>2021</sub>",
        description: "A media company website with modern design and interactive elements. This project demonstrates advanced CSS/JS animations, video integration, and a content management system.",
        image: "imgs/QQQ.jpeg",
        url: "https://ayman-121.github.io/QQQ/",
        category: "web",
        tags: ["HTML5", "CSS3", "JavaScript", "API"]
    },
    {
        id: 3,
        title: "E-School Platform <sub>Mock</sub> <sup>2021</sub>",
        description: "Similar tp Eschool's Front-end student's page.",
        image: "imgs/Eschool.jpeg",
        url: "https://ayman-121.github.io/Eschool/",
        category: "web",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        id: 4,
        title: "Athlete Portfolio <sup>2021</sub>",
        description: "A professional portfolio website for an athlete showcasing career highlights, skills, and achievements. Features a timeline of events, media gallery, and contact information.",
        image: "imgs/sharara.jpeg",
        url: "https://ayman-121.github.io/Sharara_Mohammad/",
        category: "portfolio",
        tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        id: 5,
        title: "Mexant Business Solutions <sub>A Test Website</sub> <sup>2020</sub>",
        description: "A business services website offering web development, design, and digital marketing solutions.",
        image: "imgs/Mexant.jpeg",
        url: "https://ayman-121.github.io/Mexant/",
        category: "web",
        tags: ["HTML5", "SCSS", "JavaScript"]
    },
    {
        id: 6,
        title: "Quran Website <sup>v1</sup> <sup>2021</sub>",
        description: "An interactive Quran Website with verses. Developed with a focus on performance.",
        image: "imgs/quran.jpeg",
        url: "https://ayman-121.github.io/Quran/",
        category: "web",
        tags: ["JavaScript", "HTML5", "API"]
    },
    {
        id: 7,
        title: "Math Arithmetic Sequences Calculator <sup>2024</sub>",
        description: "A specialized tool for mathematical calculations and sequence analysis.",
        image: "imgs/maths.jpeg",
        url: "https://ayman-121.github.io/math-project-ayman/",
        category: "web",
        tags: ["JavaScript", "HTML5", "CSS3"]
    },
    {
        id: 8,
        title: "Al Logarithms Explorer <sup>2025</sub>",
        description: "A specialized tool for Visualize, understand, and master logarithmic functions. Features include graphing capabilities and formula references for educational purposes.",
        image: "imgs/math-2.jpeg",
        url: "https://ayman-121.github.io/math-proj-2/",
        category: "web",
        tags: ["JavaScript", "HTML5", "CSS3"]
    },
      {
        id: 9,
        title: "KKIS MUN Website <sup>2025</sub>",
        description: "The official website for the Knights of Knowledge International School (KKIS) Model United Nations 2025. This site provides all essential information about the KKIS MUN 2025 conference, including registration details, committee topics, schedules, and more. Built with a modern web stack to ensure accessibility and responsiveness.",
        image: "imgs/mun.png",
        url: "https://kkis-online.github.io/kkis-mun-25/",
        category: "web",
        tags: ["JavaScript", "HTML5", "CSS3"]
    }
  ];

document.addEventListener("DOMContentLoaded", function() {
  // DOM Elements
  const projectsGrid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLink = document.getElementById('modal-link');
  const loader = document.querySelector('.loader');

  // Function to create project cards
  function createProjectCard(project, index) {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.dataset.category = project.category;
      card.style.animationDelay = `${index * 0.1}s`;
      
      card.innerHTML = `
          <div class="project-img">
              <img src="${project.image}" alt="${project.title}">
              <div class="project-overlay">
                  <a href="#" class="project-link" data-id="${project.id}">View Details</a>
              </div>
          </div>
          <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-desc">${project.description.substring(0, 100)}...</p>
              <div class="project-tags">
                  ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
              </div>
          </div>
      `;
      
      return card;
  }

  // Function to display projects
  function displayProjects(category = 'all') {
      projectsGrid.innerHTML = '';
      
      const filteredProjects = category === 'all' 
          ? projects 
          : projects.filter(project => project.category === category);
      
      filteredProjects.forEach((project, index) => {
          const card = createProjectCard(project, index);
          projectsGrid.appendChild(card);
      });
      
      // Add event listeners to the new cards
      document.querySelectorAll('.project-link').forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              const projectId = parseInt(this.getAttribute('data-id'));
              openProjectModal(projectId);
          });
      });
  }

  // Function to open project modal
  function openProjectModal(projectId) {
      const project = projects.find(p => p.id === projectId);
      
      if (project) {
          modalImage.src = project.image;
          modalImage.alt = project.title;
          modalTitle.textContent = project.title;
          modalDescription.textContent = project.description;
          modalLink.href = project.url;
          
          projectModal.classList.add('active');
          document.body.style.overflow = 'hidden';
      }
  }

  // Function to close project modal
  function closeProjectModal() {
      projectModal.classList.remove('active');
      document.body.style.overflow = 'auto';
  }

  // Filter buttons event listeners
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Get filter category
          const filterCategory = this.getAttribute('data-filter');
          
          // Display projects based on category
          displayProjects(filterCategory);
      });
  });

  // Modal close button event listener
  modalClose.addEventListener('click', closeProjectModal);

  // Close modal when clicking outside of modal content
  projectModal.addEventListener('click', function(e) {
      if (e.target === projectModal) {
          closeProjectModal();
      }
  });

  // Simulate loading
  setTimeout(() => {
      loader.style.display = 'none';
      displayProjects(); // Display all projects initially
  }, 1500);

  // Add keyboard event for Escape key to close modal
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          closeProjectModal();
      }
  });
});
































const skillsModule = {
  // Add floating dots
  createFloatingDots: function() {
      const dotsContainer = document.getElementById('skillsFloatingDots');
      if (!dotsContainer) return;
      
      const numDots = 30;
      
      for (let i = 0; i < numDots; i++) {
          const dot = document.createElement('div');
          dot.className = 'dot';
          
          // Random position
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          
          dot.style.top = `${top}%`;
          dot.style.left = `${left}%`;
          
          // Random size
          const size = Math.random() * 4 + 2;
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          
          // Random animation duration
          const duration = Math.random() * 10 + 5;
          dot.style.animation = `skillsFloat ${duration}s infinite ease-in-out`;
          
          // Random delay
          const delay = Math.random() * 5;
          dot.style.animationDelay = `${delay}s`;
          
          dotsContainer.appendChild(dot);
      }
  },
  
  // Add code particles
  createCodeParticles: function() {
      const codeContainer = document.getElementById('skillsCodeParticles');
      if (!codeContainer) return;
      
      const codeSnippets = [
          '{ }', 'const', 'let', 'function()', '=> {}', 
          'for()', 'if()', 'import', 'export', 'class',
          '<div>', '</div>', '<span>', '#root', 'useState',
          'python', 'def', 'return', '&&', '||'
      ];
      
      const numParticles = 15;
      
      for (let i = 0; i < numParticles; i++) {
          const particle = document.createElement('div');
          particle.className = 'code-particle';
          
          // Random code snippet
          const snippetIndex = Math.floor(Math.random() * codeSnippets.length);
          particle.textContent = codeSnippets[snippetIndex];
          
          // Random position
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          
          particle.style.top = `${top}%`;
          particle.style.left = `${left}%`;
          
          // Random opacity
          const opacity = Math.random() * 0.3 + 0.1;
          particle.style.opacity = opacity;
          
          // Random rotation
          const rotation = Math.random() * 90 - 45;
          particle.style.transform = `rotate(${rotation}deg)`;
          
          codeContainer.appendChild(particle);
      }
  },
  
  // Animate skill bars on scroll
  animateSkillBars: function() {
      const skillFills = document.querySelectorAll('#skills .skill-fill');
      
      if ('IntersectionObserver' in window) {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate');
                  }
              });
          }, { threshold: 0.2 });
          
          skillFills.forEach(fill => {
              observer.observe(fill);
          });
      } else {
          // Fallback for browsers that don't support IntersectionObserver
          skillFills.forEach(fill => {
              fill.classList.add('animate');
          });
      }
  },
  
  // Initialize
  init: function() {
      this.createFloatingDots();
      this.createCodeParticles();
      this.animateSkillBars();
  }
};

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  skillsModule.init();
});

// Also run now in case the DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => skillsModule.init(), 1);
}











// Custom cursor (only if the elements exist)
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.custom-cursor-follower');

if (cursor && cursorFollower) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 50);
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorFollower.style.width = '6px';
    cursorFollower.style.height = '6px';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.width = '8px';
    cursorFollower.style.height = '8px';
  });
}

const date = new Date().getFullYear() 
a = document.querySelectorAll("#yearDate")
a.forEach((ele) => {
    ele.innerHTML = date
})
