import { Phone, Mail, Globe, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const BASE = "https://www.mhssce.ac.in/";
const LOGIN = BASE + "mhsadmin/admin.php";

const loginLinks = ["Faculty", "Admin", "Dean Academics", "NAAC", "Alumni"];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mhs-container footer-top">
        <div className="footer-cols">
          <div className="footer-widget">
            <img className="footer-logo" src={BASE + "images/footer-logo.png"} alt="M.H. Saboo Siddik College of Engineering" />
            <p>8, Saboo Siddik Polytechnic Road, Byculla, Mumbai, Maharashtra 400008</p>
            <ul className="footer-contact">
              <li>
                <Phone aria-hidden className="fi" /> <a href="tel:+912223012922">(022) 23012922</a>
              </li>
              <li>
                <Mail aria-hidden className="fi" /> <a href="mailto:mhssce@yahoo.in">mhssce@yahoo.in</a>
              </li>
              <li>
                <Globe aria-hidden className="fi" />{" "}
                <a href="http://www.mhssce.ac.in" target="_blank" rel="noreferrer">
                  www.mhssce.ac.in
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-widget">
            <h4 className="widget-title">Google Map</h4>
            <iframe
              title="Google Map showing M.H. Saboo Siddik College of Engineering"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.160671485052!2d72.82883621489951!3d18.968510287149652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcfcacd%3A0x5d71ff22760f8e77!2sM.H.+Saboo+Siddik+College+of+Engineering!5e0!3m2!1sen!2sin!4v1564735028613!5m2!1sen!2sin"
              className="footer-map"
              loading="lazy"
            />
          </div>

          <div className="footer-widget">
            <h4 className="widget-title">Login</h4>
            <ul className="list-border">
              {loginLinks.map((l) => (
                <li key={l}>
                  <a href={LOGIN} target="_blank" rel="noreferrer">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="mhs-container footer-bottom-inner">
          <p className="copyright">
            Copyright ©2020 M.H. Saboo Siddik College Of Engineering. All Rights Reserved | Website design by{" "}
            <a href="http://www.hitechadvt.com/" target="_blank" rel="noreferrer">
              Hitech Advertising
            </a>
          </p>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/Aimhssce" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook aria-hidden />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <Twitter aria-hidden />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <Youtube aria-hidden />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <Instagram aria-hidden />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
