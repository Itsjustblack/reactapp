import smile from './images/brilworx-guy-open-mouth-b-min.png';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
const Home = () => {
    return ( 
        <div className="home">
            <section className='section section-hero'>
                <div className="hero-message">
                    <div className="label">welcome to brilworx</div>
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
            </section>
        </div>
     );
}
 
export default Home;