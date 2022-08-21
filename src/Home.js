import './Home.css';
import smile from './images/brilworx-guy-open-mouth-b-min.png';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import phone_icon from './images/phone-icon.svg';
import laptop_icon from './images/laptop-icon.svg';
import desktop_icon from './images/desktop-icon.svg';
const Home = () => {
    return ( 
        <div className="home">
            <div className='section-hero section'>
                <div className="container">
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
                </div>
            </div>
            <div className='process-section section'>
                            <div className="container">
                                <div className="content">
                                    <img src={icon4} alt="" />
                                                <div className="section-header">
                                    <div className='label'>our Process</div>
                                                            <h2>the way</h2>
                                                            <div className="subtitle">Make the Web Beautiful</div>
                                                </div>
                                                            <ul className='container'>
                                    <li className='process-item'>
                                        <div className="title">Discuss</div>
                                            <p>Collaboration is key. We want to understand your business and your customers.</p>
                                    </li>
                                    <li className='process-item'>
                                        <div className="title">Design</div>
                                            <p>We’ll create carefully crafted designs.</p>
                                    </li>
                                    <li className='process-item'>
                                        <div className="title">Deliver</div>
                                            <p>Produce a stunning end product.</p>
                                    </li>
                                                            </ul>
                                </div>
                            </div>
            </div>
            <div className="section-features section">
                <div className="content">
                    <div className="section-header">
                        <div className="label">Responsive Design</div>
                        <h2>Features</h2>
                        <div className="subtitle">Increasingly, people are viewing the web on a variety of devices – tablets, smartphones, and other mobile devices. If your website doesn’t support them then you could be missing out.</div>
                                        </div>
                    </div>
                    <ul className='container'>
                        <li className='feature-item'>
                            <img src={phone_icon} alt="" />
                            <div className="title">mobile ready</div>
                            </li>
                        <li className='feature-item'>
                            <img src={phone_icon} alt="" />
                            <div className="title">mobile ready</div>
                            </li>
                        <li className='feature-item'>
                            <img src={laptop_icon} alt="" />
                            <div className="title">100% responsive</div>
                            </li>
                        <li className='feature-item'>
                            <img src={desktop_icon} alt="" />
                            <div className="title">retina ready</div>
                            </li>
                    </ul>
                    <div className="section section-services">
                        <div className="container">
                            <div className="content">
                                <img src={icon4} alt="" />
                                <div className="section-header">
                                <div className="label">whatever you need</div>
                                                                    <h2>services</h2>
                                                                    <div className="subtitle">Make the Web Beautiful</div>
                                                                    <div className="subtitle">We want to make your company stand out, because first impressions count.</div>
                                                        </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Home;