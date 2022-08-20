import smile from './images/brilworx-guy-open-mouth-b-min.png';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
const Home = () => {
    return ( 
        <div className="home">
            <div className='section section-hero'>
                <div className="container">
                    <div className="hero-message">
                    *    <div className="label">welcome to brilworx</div>
                        <h1>we build jaw-dropping websites</h1>
                    </div>
                    <div className="smile">
                        <img src={smile} alt="" />
                    </div>
                    <div className="subtitle">Creative website design for start-ups, sole traders & settled businesses.</div>
                    <div className="items">
                        <div className="item">
                                <img src={icon1} alt="" />
                                <div className='title'>collaborate</div>
                            <p>Work collaboratively with supportive designers and create your perfect website.</p>
                            <a href="/"><button>Check Our Work</button></a>
                        </div>
                        <div className="item">
                                <img src={icon2} alt="" />
                                <div className='title'>collaborate</div>
                            <p>Work collaboratively with supportive designers and create your perfect website.</p>
                            <a href="/"><button>Check Our Work</button></a>
                        </div>
                        <div className="item">
                                <img src={icon3} alt="" />
                                <div className='title'>collaborate</div>
                            <p>Work collaboratively with supportive designers and create your perfect website.</p>
                            <a href="/"><button>Check Our Work</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section process-section'>
                            <div className="container">
                                <div className="content">
                                    <img src={icon4} alt="" />
                                                <div className="section-header">
                    *                <div className='label1'>our Process</div>
                                                            <h2>the way</h2>
                                                            <div className="subtitle">Make the Web Beautiful</div>
                                                </div>
                                                            <ul className='processes'>
                                    <li className='process-item'>
                                        <div className="process-title">Discuss</div>
                                            <p>Collaboration is key. We want to understand your business and your customers.</p>
                                    </li>
                                    <li className='process-item'>
                                        <div className="process-title">Design</div>
                                            <p>We’ll create carefully crafted designs.</p>
                                    </li>
                                    <li className='process-item'>
                                        <div className="process-title">Deliver</div>
                                            <p>Produce a stunning end product.</p>
                                    </li>
                                                            </ul>
                                </div>
                            </div>
            </div>
        </div>
     );
}
 
export default Home;