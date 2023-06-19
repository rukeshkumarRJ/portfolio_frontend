import './Header.css';
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
function Header() {
    return(
        <section class="header_section">
            <a href='./components/About/About' onClick={() => scrollToSection('head')}>About</a>
            <a href='./components/projects/Projects'>projects</a>
            <a href='./components/skills/Skills.js'>skills</a>
            <a href='./components/Footer/Footer'  onClick={() => scrollToSection('foot')}>contact</a>
        </section>
    );
}
export default Header;