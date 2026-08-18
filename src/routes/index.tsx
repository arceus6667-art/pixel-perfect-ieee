import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IEEE Student Branch | M.H. Saboo Siddik College Of Engineering" },
      {
        name: "description",
        content:
          "IEEE student branch at M.H. Saboo Siddik College of Engineering, Byculla, Mumbai — committee members, activities and gallery.",
      },
      { property: "og:title", content: "IEEE Student Branch | M.H. Saboo Siddik College Of Engineering" },
      {
        property: "og:description",
        content:
          "IEEE student branch at M.H. Saboo Siddik College of Engineering, Byculla, Mumbai — committee members, activities and gallery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IEEEPage,
});

const BASE = "https://www.mhssce.ac.in/";

const committee: [string, string][] = [
  ["Muzzammil Amrelia", "Chairperson"],
  ["Mahek Mukadam", "Vice-Chairperson"],
  ["Samiya Qureshi", "Secretary"],
  ["Azzam Anas", "Joint Secretary"],
  ["Umme Hani Shaikh", "Treasurer"],
  ["Alkaseem Malik", "Joint Treasurer"],
  ["Khalid Saifullah", "Webmaster"],
  ["Mustafa Ansari", "Joint Webmaster"],
  ["Prof. Amar S Pawade", "Branch Counselor"],
];

const gallery = [
  {
    src: BASE + "images/IEEE%20gallery/1.jpg",
    title:
      "Blood donation drive organised by department of Electronics, IEEE-MHSSCOE on19th March 2019.",
  },
  {
    src: BASE + "images/IEEE%20gallery/2.jpg",
    title:
      "PCB designing workshop under IEEE-SKEP on 12th February, 2019 by  Dr. Y. S. Rao ,Vice principal, SPIT, Mumbai.",
  },
  {
    src: BASE + "images/IEEE%20gallery/3.jpg",
    title:
      "FPGAs & Soft Processors workshop under IEEE-SKEP on20th January, 2018 conducted by  Mr. Mandar saraf ,Scientific Officer (D), and Colleagues TIFR, Mumbai.",
  },
  {
    src: BASE + "images/IEEE%20gallery/4.jpg",
    title:
      "Seminar on “Programming and applications of Robotics” under IEEE-SKEP, on September 28, 2017 conducted by Mr. Quentin D’souza, CEO of Quantum Designs, Mumbai",
  },
  { src: BASE + "images/IEEE%20gallery/5.jpg", title: "Tech-fest 2018 - Technical paper presentation" },
  { src: BASE + "images/IEEE%20gallery/6.jpg", title: "Tech-fest 2018 - minute to win it" },
  { src: BASE + "images/IEEE%20gallery/7.jpg", title: "Tech-fest 2018 - LIVE CS" },
  { src: BASE + "images/IEEE%20gallery/8.jpg", title: "Tech-fest 2018 - " },
];

function IEEEPage() {
  const [active, setActive] = useState<number | null>(null);
  const item = active === null ? null : gallery[active];

  return (
    <div className="mhs-page">
      <SiteHeader />

      <main className="main-content">
        <section className="inner-header">
          <div className="mhs-container">
            <h1 className="inner-title">IEEE</h1>
          </div>
        </section>

        <section className="mhs-section">
          <div className="mhs-container">
            <p className="font-15">
              IEEE - <b>Institute of Electrical and Electronics Engineers</b> - is the world’s largest technical
              professional organization dedicated to advancing technology for the benefit of humanity. The IEEE is a
              non-profit professional organization founded by a handful of engineers in 1884 for the purpose of
              consolidating ideas dealing with electro-technology. The IEEE plays a significant role in publishing
              technical works, sponsoring conferences and seminars, accreditation, and standards development. IEEE
              membership can help the students members and professional members to accelerate their career plans and
              help to grow as a technology professional as it offers access to technical innovation, cutting-edge
              information, networking opportunities, and exclusive member benefits. Members support IEEE&apos;s mission
              to advance technology for humanity and the profession, while memberships build a platform to introduce
              careers in technology around the world.
            </p>
          </div>
        </section>

        <section className="mhs-section">
          <div className="mhs-container">
            <h2 className="line-bottom-edu">Committee</h2>
            <div className="table-half">
              <div className="table-scroll">
                <table className="mhs-table">
                  <tbody>
                    <tr className="bg-light">
                      <th scope="col">Name</th>
                      <th scope="col">Designation</th>
                    </tr>
                    {committee.map(([name, role]) => (
                      <tr key={name}>
                        <td>{name}</td>
                        <td>{role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mhs-section">
          <div className="mhs-container">
            <h2 className="line-bottom-edu">Gallery</h2>
            <p className="gallery-note">Click on the photo for information.</p>
            <div className="gallery-grid">
              {gallery.map((g, i) => (
                <button
                  key={g.src}
                  type="button"
                  className="gallery-item"
                  title={g.title}
                  onClick={() => setActive(i)}
                >
                  <img src={g.src} alt={g.title} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <Dialog open={item !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="lightbox">
          {item && (
            <>
              <DialogTitle className="sr-only">Gallery photo</DialogTitle>
              <img src={item.src} alt={item.title} />
              <DialogDescription className="lightbox-caption">{item.title}</DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
