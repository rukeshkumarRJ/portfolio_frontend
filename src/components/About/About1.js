import './About.css';
import me from '../../assets/rukesh_edited.jpeg'
function About1() {
    return(
        <section class="about_section">
            <h2>About Page</h2>
            <div class="row contain">
                <content class="col-lg-8 col-sm-12">
                    <p>Hello! Myself Rukesh ( Full name: Rukesh kumar Jeevaraj ). Currently student of VIT University. I am Full stack developer and software engineer .I experienced Machine learning in Beginner level.</p>
                    <p>My Hobbies<ol type="a">
                        <li>Sports 
                            <ol><li>Indoor - chess</li><li>Outdoor - Badminton</li></ol>
                        </li>
                        <li>Reading</li>
                        <li>Social Involver
                            <ol><li>Infrastructure</li><li>Technologies</li><li>Economics</li></ol>

                        </li>
                        </ol>
                    </p>
                </content>
                <aside class="col-lg-4 col-sm-12">
                    <img src={me} alt="rukesh"/>
                </aside>
            </div>
        </section>
     );
}
export default About1;