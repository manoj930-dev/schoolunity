import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Schoolunity ERP | Ek School, Ek System</title>
        <meta
          name="description"
          content="Schoolunity ERP by MSP IT Solutions – Complete School Management Software for students, staff, fees, attendance, transport and accounts."
        />
        <meta
          name="keywords"
          content="School ERP, School Management Software, Schoolunity ERP, MSP IT Solutions"
        />
      </Helmet>

      {/* HEADER */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="/schoolunity.png" alt="Schoolunity ERP" height="40" />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="menu" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#plans">Plans</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why">Why Us</a>
              </li>
              <li className="nav-item ms-lg-3">
                <a className="btn btn-green" href="#contact">Request Demo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="section-padding bg-blue text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">
                Ek School, <span className="text-green">Ek System</span>
              </h1>
              <p className="mt-3">
                Schoolunity ERP – Students, Staff, Fees, Attendance,
                Accounts, Transport aur Reports sab kuch ek hi platform par.
              </p>
              <p className="small text-light">
                Designed & Developed by MSP IT Solutions
              </p>
              <a href="#plans" className="btn btn-green btn-lg mt-3">
                View Plans
              </a>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/schoolunity.png"
                className="img-fluid"
                alt="School ERP Software"
                style={{ maxHeight: 320 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-blue mb-5">Core Features</h2>

          <div className="row g-4">
            {[
              "Student Management",
              "Staff Management",
              "Fee Collection",
              "Attendance System",
              "Accounts & Reports",
              "Transport & Hostel",
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="fw-bold text-green">{item}</h5>
                    <p className="text-muted small">
                      {item} ko easily, securely aur digitally manage karein.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="fw-bold text-blue text-center mb-4">
            What Schoolunity ERP Can Do?
          </h2>

          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Online Admission & Student Records</li>
                <li>Parent & Student Login Panel</li>
                <li>Exam, Result & Report Card</li>
                <li>Expense & Income Management</li>
                <li>School Website & ID Card</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>QR / Biometric Attendance</li>
                <li>Staff Salary Management</li>
                <li>Transport & Hostel System</li>
                <li>Multi-User Admin Panel</li>
                <li>Secure Cloud Data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BETTER */}
      <section id="why" className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-blue mb-4">
            Why Schoolunity ERP is Better?
          </h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="shadow-sm p-3 h-100">
                <h6 className="fw-bold text-green">Low Cost</h6>
                <p className="small text-muted">
                  Affordable per-student pricing.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow-sm p-3 h-100">
                <h6 className="fw-bold text-green">Easy to Use</h6>
                <p className="small text-muted">
                  Non-technical staff ke liye bhi easy.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow-sm p-3 h-100">
                <h6 className="fw-bold text-green">All-in-One</h6>
                <p className="small text-muted">
                  Alag software ki zarurat nahi.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="shadow-sm p-3 h-100">
                <h6 className="fw-bold text-green">Indian Support</h6>
                <p className="small text-muted">
                  Fast Hindi & English support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="section-padding">
        <div className="container text-center">
          <h2 className="fw-bold text-blue mb-5">Pricing Plans</h2>

          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="card shadow h-100">
                <div className="card-body text-start">
                  <h4 className="text-blue fw-bold">₹100 / Student</h4>
                  <ul>
                    <li>ID Cards</li>
                    <li>School Website</li>
                    <li>Admin, Staff, Parent, Student Panel</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card shadow h-100 border-success">
                <div className="card-body text-start">
                  <h4 className="text-green fw-bold">₹150 / Student</h4>
                  <ul>
                    <li>All ₹100 Features</li>
                    <li>QR + Biometric Attendance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-padding bg-blue text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Contact Us</h2>
          <p className="fw-bold">MSP IT Solutions</p>
          <p>📞 9306487930 | 8901517890</p>
          <p>✉️ monuyadav4772@gmail.com</p>
          <a href="mailto:monuyadav4772@gmail.com" className="btn btn-green mt-2">
            Request Demo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3">
        © {new Date().getFullYear()} Schoolunity ERP | MSP IT Solutions
      </footer>
    </>
  );
};

export default Home;
