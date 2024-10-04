import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../styles/style.css";
import '../../styles/style-basket.css'
import home from "../../img/home.svg";
import img1 from "../../img/img1.svg";
import img2 from "../../img/img2.svg";
import img3 from "../../img/img3.svg";
import img4 from "../../img/img4.svg";
import close from "../../img/close.svg";
import face from "../../img/face.svg";



const Basket = () => {

  const [menuVisible, setMenuVisible] = useState(false);
	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
	};

return(
<div>
  <header className="header">
				<nav className="navigation container">
					<div className="leftHeader">
          <Link to="/">
            <img src={home} alt="home" />
          </Link>
						<button>
							<img src={img1} alt="img1" />
						</button>
					</div>
					<div className="rightHeader">
						<button className="user-list__item-menu" onClick={toggleMenu}>
							<img src={img2} alt="img2" />
						</button>
						{/* Menu */}
						<div className={`menu-active ${menuVisible ? "" : "hidden"}`}>
							<div className="menu-active__all">
								<button className="menu-close" onClick={toggleMenu}>
									<img src={close} alt="close" />
								</button>
								<h4 className="menu-heading">MENU</h4>
								<div className="menu-man">
									<h5 className="menu-text">MAN</h5>
									<ul className="menu-list">
										<li>
                    <Link to="/catalog">Accessories</Link>
										</li>
										<li>
                    <Link to="/catalog">Bags</Link>
										</li>
										<li>
                    <Link to="/catalog">Denim</Link>
										</li>
										<li>
                    <Link to="/catalog">T-Shirts</Link>
										</li>
									</ul>
								</div>
								<div className="menu-woman">
									<h5 className="menu-text">WOMAN</h5>
									<ul className="menu-list">
										<li>
                    <Link to="/catalog">Accessories</Link>
										</li>
										<li>
                    <Link to="/catalog">Jackets & Coats</Link>
										</li>
										<li>
                    <Link to="/catalog">Polos</Link>
										</li>
										<li>
                    <Link to="/catalog">T-Shirts</Link>
										</li>
										<li>
                    <Link to="/catalog">Shirts</Link>
										</li>
									</ul>
								</div>
								<div className="menu-kids">
									<h5 className="menu-text">KIDS</h5>
									<ul className="menu-list">
										<li>
                    <Link to="/catalog">Accessories</Link>
										</li>
										<li>
                    <Link to="/catalog">Jackets & Coats</Link>
										</li>
										<li>
                    <Link to="/catalog">Polos</Link>
										</li>
										<li>
                    <Link to="/catalog">T-Shirts</Link>
										</li>
										<li>
                    <Link to="/catalog">Shirts</Link>
										</li>
										<li>
                    <Link to="/catalog">Bags</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<Link to="/registr">
            <button className="btnDel">
              <img src={img3} alt="img3" />
            </button>
          </Link>
          <Link to="/basket">
            <button className="btnDel btnCounter">
              <img src={img4} alt="img4" />
            </button>
          </Link>
					</div>
				</nav>
			</header>

      <div className="headingBasket">
        <h1 className="headingBasket-text container">SHOPPING CART</h1>
      </div>

      <section className="addToCard">
        <div className="addToCard-Card">

        </div>
        <div className="addToCard-discription">

        </div>
      </section>

      <footer className="footer">
      <section className="subscription">
					<h2 style={{ display: "none" }}>Подписка</h2>
					<div className="subscription__smoke">
						<div className="subscription__content container">
							<div className="subscription__content-about">
								<img src={face} alt="face" />
								<h1>
									“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span>a pulvinar purus condimentum“</span>
								</h1>
							</div>
							<div className="subscription__content-subscribe">
								<h2>SUBSCRIBE</h2>
								<p>FOR OUR NEWLETTER AND PROMOTION</p>
								<form className="subscription__content-form">
									<input type="email" placeholder="Enter Your Email" required />
									<button type="submit">Subscribe</button>
								</form>
							</div>
						</div>
					</div>
				</section>

      <section className="footer__end">
					<div className="footer__end-content container">
						<h1>© 2022 Brand All Rights Reserved.</h1>
						<nav className="footer__end-icons">
							<h2 style={{ display: "none" }}>Социальные сети</h2>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
									<path
										fill="#000"
										d="m9.088 8.28.419-2.664H6.89V3.887c0-.729.366-1.439 1.538-1.439h1.19V.18S8.537 0 7.505 0C5.35 0 3.942 1.276 3.942 3.586v2.03H1.547V8.28h2.395v6.44H6.89V8.28h2.198Z"
									/>
								</svg>
							</button>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff">
									<g clipPath="url(#a)">
										<path
											fill="#000"
											d="M8.137 4.682a3.812 3.812 0 0 0-3.821 3.815 3.812 3.812 0 0 0 3.82 3.815 3.812 3.812 0 0 0 3.822-3.815 3.812 3.812 0 0 0-3.821-3.815Zm0 6.295a2.487 2.487 0 0 1-2.485-2.48 2.485 2.485 0 0 1 4.97 0 2.487 2.487 0 0 1-2.485 2.48Zm4.869-6.451c0 .494-.4.89-.892.89a.89.89 0 1 1 .891-.89Zm2.53.903c-.056-1.192-.329-2.248-1.204-3.118-.87-.87-1.928-1.142-3.122-1.202-1.23-.07-4.919-.07-6.15 0-1.19.056-2.248.329-3.122 1.199-.875.87-1.144 1.925-1.204 3.117-.07 1.229-.07 4.911 0 6.14.056 1.192.329 2.248 1.204 3.117.874.87 1.929 1.143 3.123 1.202 1.23.07 4.918.07 6.149 0 1.194-.056 2.251-.328 3.122-1.202.872-.87 1.145-1.925 1.204-3.117.07-1.229.07-4.908 0-6.136Zm-1.59 7.454a2.513 2.513 0 0 1-1.416 1.414c-.981.389-3.31.3-4.393.3-1.084 0-3.416.085-4.393-.3a2.513 2.513 0 0 1-1.417-1.414c-.39-.98-.3-3.304-.3-4.386 0-1.083-.086-3.41 .3-4 .26-.651 .761-1 .417-1 .98-.388 .309-.299 .393-.299 .084 .085 .415 .085 .393 .085Z"
										/>
									</g>
									<defs>
										<path d="M .684 .684h14 .899v17H .684z" />
									</defs>
								</svg>
							</button>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff">
									<g clip-path="url(#a)">
										<path
											fill="#000"
											d="M6.74.203C3.556.203.408 2.341.408 5.8c0 2.2 1.23 3.45 1.974 3.45.308 0 .484-.863.484-1.106 0-.29-.735-.91-.735-2.119 0-2.513 1.9-4.294 4.358-4.294 2.114 0 3.678 1.21 3.678 3.431 0 1.66-.661 4.772-2.803 4.772-.773 0-1.434-.562-1.434-1.368 0-1.182.82-2.325.82-3.544 0-2.069-2.915-1.694-2.915.806 0 .525.065 1.106.298 1.584-.428 1.857-1.304 4.622-1.304 6.535 0 .59.084 1.172.14 1.762.105.12.053.107.214.047 1.564-2.156 1.509-2.578 2.216-5.4.382.732 1.37 1.125 2.151 1.125 3.297 0 4.777-3.234 4.777-6.15 0-3.103-2.663-5.128-5.587-5.128Z"
										/>
									</g>
									<defs>
										<path d="M.408 0h11.92v16H.407z" />
									</defs>
								</svg>
							</button>
							<button>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff">
									<g clip-path="url(#a)">
										<path
											fill="#000"
											d="M14.418 4.741c.01.142.01.284.01.426 0 4.335-3.277 9.33-9.267 9.33a9.16 9.16 0 0 1-5.002-1.472c.262.03.515.04.787.04a6.495 6.495 0 0 0 4.044-1.4A3.266 3.266 0 0 1 1.944 9.39c.202.03.404.05.615.05.293 0 .585-.04.857-.111A3.274 3.274 0 0 1 .805 6.112V6.07c.433.244.937.396 1.472.416a3.283 3.283 0 0 1-1.452-2.73c0-.61.161-1.168.444-1.656a9.238 9.238 0 0 0 6.715 3.432 3.727 3.727 0 0 1-.08-.751c0-1.807 1.452-3.28 3.257-3.28a3.24 3.24 0 0 1 2.38 1.036 6.386 6.386 0 0 0 2.067-.792 3.266 3.266 0 0 1-1.432 1.807 6.494 6.494 0 0 0 1.876-.507 7.029 7.029 0 0 1-1.634 1.695Z"
										/>
									</g>
									<defs>
										<path d="M.16 0H16.05v16H.16z" />
									</defs>
								</svg>
							</button>
						</nav>
					</div>
				</section>
        </footer>
</div>
);
}

export default Basket;