import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header2({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>

			{/* Header */}
			<header className="tf-header style-2">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/">
											<Image
												width="139"
												height="39"
												// sizes="100vw"
												style={{ width: "110%", height: "auto" }}
												id="logo_header" src="/images/logo/bisways-logo.png" data-retina="./images/logo/logo-2@2x.png" alt="" />
										</Link>
									</div>
								</div>
								<div className="header-center">
									<nav className="main-nav">
										<Menu />
									</nav>
								</div>
								<div className="header-right">

								</div>
							</div>
							<div className={isMobileMenu ? "mobile-nav-wrap active" : "	mobile-nav-wrap"} style={{color:"#0b1972"}}>
								
								
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
