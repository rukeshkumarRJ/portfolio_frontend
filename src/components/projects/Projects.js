import wordCounter from '../../assets/wordCounter.PNG'
import axiosdata from '../../assets/axiosdata.PNG'
import calc from '../../assets/calc.PNG'
import colorPick from '../../assets/colorPick.PNG'
import Agecalc from '../../assets/agecalc.PNG'
import './projects.css';

function Projects() {
    return(
        <section>
            <h2>Projects</h2>
            <div class="row margin-card">
            <div class="col-lg-4 col-sm-12">
            <div class="card space-card">
                <a href="https://rukeshkumarrj.github.io/wordcounter/">
                    <div class="card-body text-center">
                        <img src={wordCounter} alt="wordcounter"/>
                    </div>
                    <div class="card-footer text-center bg-success">Word counter</div>
                </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12">
            <div class="card space-card">
                    <a href="https://rukeshkumarrj.github.io/calc/">
                    <div class="card-body text-center">
                        <img src={calc} alt="Calculator"/>
                    </div>
                    <div class="card-footer text-center bg-danger">Calculator</div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12">
            <div class="card space-card">
                    <a href="https://rukeshkumarrj.github.io/reactpickColorproj/">
                    <div class="card-body text-center">
                        <img src={colorPick} alt="colorPicker"/>
                    </div>
                    <div class="card-footer text-center bg-warning">ColorPicker</div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12">
            <div class="card space-card">
                    <a href="https://rukeshkumarrj.github.io/RecordFetcherReact/">
                    <div class="card-body text-center">
                        <img src={axiosdata} alt="DataFetcherAxios"/>
                    </div>
                    <div class="card-footer text-center bg-secondary">DataFetcher</div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12">
            <div class="card space-card">
                    <a href="https://rukeshkumarrj.github.io/AgeCalc/">
                    <div class="card-body text-center">
                        <img src={Agecalc} alt="AgeCalc"/>
                    </div>
                    <div class="card-footer text-center bg-info">Agecalc</div>
                    </a>
                </div>
            </div>
            </div>
            
        </section>
    );
}
export default Projects;
/*
import wordCounter from '../../assets/wordCounter.PNG'
import axiosdata from '../../assets/axiosdata.PNG'
import calc from '../../assets/calc.PNG'
import colorPick from '../../assets/colorPick.PNG'
import Agecalc from '../../assets/calc.PNG'
import './projects.css';
import {Link} from 'react-router-dom';

function Projects() {
    return(
        <section>
            <div class="row margin-card">
            <div class="col-4">
            <div class="card space-card">
                <Link to="https://rukeshkumarrj.github.io/wordcounter/">
                    <div class="card-body text-center">
                        <img src={wordCounter} alt="wordcounter"/>
                    </div>
                    <div class="card-footer text-center bg-success">Word counter</div>
                </Link>
                </div>
            </div>
            <div class="col-4">
            <div class="card space-card">
                    <Link to="https://rukeshkumarrj.github.io/calc/">
                    <div class="card-body text-center">
                        <img src={calc} alt="Calculator"/>
                    </div>
                    <div class="card-footer text-center bg-danger">Calculator</div>
                    </Link>
                </div>
            </div>
            <div class="col-4">
            <div class="card space-card">
                    <Link to="https://rukeshkumarrj.github.io/reactpickColorproj/">
                    <div class="card-body text-center">
                        <img src={colorPick} alt="colorPicker"/>
                    </div>
                    <div class="card-footer text-center bg-warning">ColorPicker</div>
                    </Link>
                </div>
            </div>
            <div class="col-4">
            <div class="card space-card">
                    <Link to="https://rukeshkumarrj.github.io/RecordFetcherReact/">
                    <div class="card-body text-center">
                        <img src={axiosdata} alt="DataFetcherAxios"/>
                    </div>
                    <div class="card-footer text-center bg-secondary">DataFetcher</div>
                    </Link>
                </div>
            </div>
            <div class="col-4">
            <div class="card space-card">
                    <Link to="https://rukeshkumarrj.github.io/AgeCalc/">
                    <div class="card-body text-center">
                        <img src={Agecalc} alt="AgeCalc"/>
                    </div>
                    <div class="card-footer text-center bg-info">Agecalc</div>
                    </Link>
                </div>
            </div>
            </div>
            
        </section>
    );
}
export default Projects;

*/