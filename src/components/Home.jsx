import React from "react";
import { Helmet } from "react-helmet";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaFileAlt,
  FaUsers,
  FaBuilding,
  FaCalendarCheck,
  FaChartLine,
  FaBus,
  FaPenAlt,
  FaBookOpen,
  FaClock,
  FaLaptop,
  FaPlaneDeparture,
  FaVideo,
  FaWallet,
  FaPlusCircle
} from "react-icons/fa";
import {
  FaIdCard,
  FaFingerprint,
  FaMoneyCheckAlt,
  FaUserShield,
  FaCloud,
  FaCheckCircle, FaStar
} from "react-icons/fa";


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

      
          <div className="row mt-5 text-center g-4">
            <div className="col-md-4">
              <div className="stat-box">
                <h2>500+</h2>
                <p>Schools Using SchoolUnity</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <h2>100+</h2>
                <p>Automated Features</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <h2>99%</h2>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-blue"> Features of SchoolUnity</h2>
          <p>Powerful, easy-to-use tools to manage every part of your school.</p>

          <div className="row g-4 mt-3">
            {[
              {
                title: "Student Management",
                desc: "Complete student lifecycle: admission, ID, documents, academic records & promotion system.",
                icon: <FaUserGraduate />
              },
              {
                title: "Staff Management",
                desc: "Manage teachers & staff profiles, salary structure, roles and performance.",
                icon: <FaChalkboardTeacher />
              },
              {
                title: "Fee Collection",
                desc: "Online & offline fee payment, invoices, pending dues and automated receipts.",
                icon: <FaMoneyBillWave />
              },
              {
                title: "Enquiry Management",
                desc: "Track new enquiries, follow-ups, conversion reports & lead management.",
                icon: <FaQuestionCircle />
              },
              {
                title: "Test Report Management",
                desc: "Generate subject-wise tests, marks entry & downloadable student reports.",
                icon: <FaFileAlt />
              },
              {
                title: "Batch System Management",
                desc: "Create multiple batches, assign teachers & manage students easily.",
                icon: <FaUsers />
              },
              {
                title: "Multiple Branch System",
                desc: "Centralized control of multiple schools/branches in one dashboard.",
                icon: <FaBuilding />
              },
              {
                title: "Attendance System",
                desc: "Daily student & staff attendance with reports & SMS alerts.",
                icon: <FaCalendarCheck />
              },
              {
                title: "Accounts & Reports",
                desc: "Complete financial tracking: income, expenses, profit & yearly reports.",
                icon: <FaChartLine />
              },
              {
                title: "Transport & Hostel",
                desc: "Bus routes, hostel rooms, student allocation & fee management.",
                icon: <FaBus />
              },
              {
                title: "Examinations",
                desc: "Create exams, grading system, result publishing & performance analysis.",
                icon: <FaPenAlt />
              },
              {
                title: "Lesson Plan",
                desc: "Teacher lesson planning, syllabus tracking & subject progress.",
                icon: <FaBookOpen />
              },
              {
                title: "Time Table Management",
                desc: "Auto-generate class schedules for students and teachers.",
                icon: <FaClock />
              },
              {
                title: "Online Exam System",
                desc: "Conduct online tests with MCQ, auto results & secure login.",
                icon: <FaLaptop />
              },
              {
                title: "Leave Approval",
                desc: "Online leave request & approval system for staff & students.",
                icon: <FaPlaneDeparture />
              },
              {
                title: "Live Classes",
                desc: "Integrated live video classes with attendance & recordings.",
                icon: <FaVideo />
              },
              {
                title: "Expense System",
                desc: "Track daily expenses, vendor payments & monthly reports.",
                icon: <FaWallet />
              },
              {
                title: "100+ More Modules",
                desc: "Library, ID cards, certificates, notifications, SMS & more.",
                icon: <FaPlusCircle />
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="feature-card h-100">

                  <div className="count-badge">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* <div className="feature-icon">
              {item.icon}
            </div> */}

                  <h5 className="fw-bold text-green mt-3">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>

                  <button className="btn btn-sm btn-outline-primary mt-auto">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="features" className="section-padding bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold text-blue">Benefits of SchoolUnity</h2>
            <p className="text-muted">
              Powerful, easy-to-use tools to manage every part of your school.
            </p>
          </div>

          <div className="row align-items-center gy-5">

            {/* Left Image */}
            <div className="col-xl-6 text-center">
              <img
                src="../../assets/img/features.png"
                className="img-fluid "
                alt="SchoolUnity Features"
              />
            </div>

            {/* Right Benefits */}
            <div className="col-xl-6">
              <div className="row gy-4">

                {[
                  "Custom Development for Your School",
                  "Fully Responsive on Mobile & Tablet",
                  "Fast, Secure & Cloud-Based System",
                  "Scalable for Single or Multiple Branches",
                  "User-Friendly Interface for Everyone",
                  "24/7 Technical Support",
                  "Automated Reports & Analytics",
                  "Paperless Digital Management",
                  "Data Backup & Security",
                  "Improves Productivity & Saves Time"
                ].map((text, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="benefit-box">
                      <span className="benefit-icon">✔</span>
                      <span>{text}</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="features" className="section-padding bg-white">
        <div className="container text-center">
          <h2 className="fw-bold text-blue">Preview of Msp IT Solution Software & School Unity</h2>
          <p className="text-muted mt-2">
            A complete school management system to digitize your institute with
            smart tools for students, teachers, administration and parents.
          </p>


          <div className="row g-4 mt-3">

            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Dashboard.png" alt="Dashboard" />
                <div className="overlay">
                  <h5>Dashboard</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Admission-enquiry.png" alt="Admission" />
                <div className="overlay">
                  <h5>Admission Enquiry</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/StudentAdmission.png" alt="Studentadmission" />
                <div className="overlay">
                  <h5>Student Admission Online & Offline</h5>
                </div>
              </div>
            </div>
          </div>


          <div className="row g-4 mt-3">

            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Attendance.png" alt="Attendance" />
                <div className="overlay">
                  <h5>Attendance</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/AdmitCard.png" alt="AdmitCard" />
                <div className="overlay">
                  <h5>AdmitCard</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Examintions.png" alt="Examintions" />
                <div className="overlay">
                  <h5>Examintions</h5>
                </div>
              </div>
            </div>
          </div>


          <div className="row g-4 mt-3">

            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Accounts.png" alt="Accounts" />
                <div className="overlay">
                  <h5>Accounts Mangement</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/BalanceSheet.png" alt="BalanceSheet" />
                <div className="overlay">
                  <h5>BalanceSheet</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Comunite.png" alt="Comunite" />
                <div className="overlay">
                  <h5>Communicate</h5>
                </div>
              </div>
            </div>
          </div>




          <div className="row g-4 mt-3">

            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/FessCollection.png" alt="FessCollection" />
                <div className="overlay">
                  <h5>Fess Collection</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/HomeWork.png" alt="HomeWork" />
                <div className="overlay">
                  <h5>HomeWork</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Hostal.png" alt="Hostal" />
                <div className="overlay">
                  <h5>Hostal Mangemant</h5>
                </div>
              </div>
            </div>
          </div>


          <div className="row g-4 mt-3">

            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/IdCard.png" alt="IdCard" />
                <div className="overlay">
                  <h5>Id Card Mangement</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/Invortary.png" alt="Invortary" />
                <div className="overlay">
                  <h5>Inventory</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/LeaveApprove.png" alt="LeaveApprove" />
                <div className="overlay">
                  <h5>Leave Approve</h5>
                </div>
              </div>
            </div>
          </div>




          <div className="row g-4 mt-3">

            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/OnlineExam.png" alt="OnlineExam" />
                <div className="overlay">
                  <h5>Online Eaxm</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/TimeTable.png" alt="TimeTable" />
                <div className="overlay">
                  <h5>TimeTable</h5>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="img-card">
                <img src="../../assets/img/TransportFees.png" alt="Transport" />
                <div className="overlay">
                  <h5>TransportFess</h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

<section className="section-padding bg-white">
  <div className="container text-center">
    <h2 className="fw-bold text-blue mb-4">
      SchoolUnity ERP Dashboard
    </h2>
    <p className="text-muted mb-5">
      Explore real features that work inside SchoolUnity ERP software.
    </p>

    <div className="row align-items-center">

      {/* Left Features */}
      <div className="col-md-4 text-end feature-side">
        <div className="side-feature">Student Management</div>
        <div className="side-feature">Fee Collection</div>
        <div className="side-feature">Staff Attendance</div>
        <div className="side-feature">Expense System</div>
        <div className="side-feature">Income Reports</div>
        <div className="side-feature">Academic Calendar</div>
        <div className="side-feature">Homework</div>
      </div>

    
      <div className="col-md-4 text-center">
        <div className="dashboard-frame">
          <img 
            src="../../assets/img/scrrenphone.png"   
            alt="SchoolUnity Dashboard"
            className="img-fluid"
          />
        </div>
      </div>

   
      <div className="col-md-4 text-start feature-side">
        <div className="side-feature">Online Exams</div>
        <div className="side-feature">Class Management</div>
        <div className="side-feature">Library System</div>
        <div className="side-feature">Transport</div>
        <div className="side-feature">Hostel</div>
        <div className="side-feature">Face Attendance</div>
        <div className="side-feature">Communication</div>
      </div>

    </div>
  </div>
</section>





      {/* DETAILED FEATURES */}

      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="fw-bold text-blue text-center mb-4">
            What Schoolunity ERP Can Do?
          </h2>

          <p className="text-center text-muted mb-5">
            Schoolunity ERP aapke school ke har department ko digitally manage karne
            ke liye ek all-in-one solution hai.
          </p>

          <div className="row g-4">
            {[
              { text: "Online Admission & Student Records", icon: <FaUserGraduate /> },
              { text: "Parent & Student Login Panel", icon: <FaUsers /> },
              { text: "Exam, Result & Report Card", icon: <FaFileAlt /> },
              { text: "Expense & Income Management", icon: <FaWallet /> },
              { text: "School Website & ID Card", icon: <FaIdCard /> },
              { text: "QR / Biometric Attendance", icon: <FaFingerprint /> },
              { text: "Staff Salary Management", icon: <FaMoneyCheckAlt /> },
              { text: "Transport & Hostel System", icon: <FaBus /> },
              { text: "Multi-User Admin Panel", icon: <FaUserShield /> },
              { text: "Secure Cloud Data", icon: <FaCloud /> }
            ].map((item, i) => (
              <div className="col-md-6" key={i}>
                <div className="feature-list-card">
                  <span className="feature-icon-sm">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
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
              <div className="shadow-sm p-3 h-100 ">
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
      <section id="plans" className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-blue mb-2">Pricing Plans</h2>
          <p className="text-muted mb-5">
            Choose a plan that fits your school size and requirements.
          </p>

          <div className="row justify-content-center g-4">

            {/* Basic Plan */}
            <div className="col-md-5">
              <div className="pricing-card featured">
                <h6 className="plan-badge">Basic</h6>
                <h4 className="text-blue fw-bold">₹100 <span>/ Student</span></h4>

                <ul className="list-unstyled mt-3">
                  <li><FaCheckCircle /> ID Cards</li>
                  <li><FaCheckCircle /> School Website</li>
                  <li><FaCheckCircle /> Admin, Staff, Parent, Student Panel</li>
                  <li><FaCheckCircle /> Exams & Reports</li>
                  <li><FaCheckCircle /> Fee Management</li>
                </ul>

                <button className="btn btn-outline-primary w-100 mt-3">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="col-md-5 ms-3">
              <div className="pricing-card featured">
                <h6 className="plan-badge premium">
                  <FaStar /> Most Popular
                </h6>
                <h4 className="text-green fw-bold">₹150 <span>/ Student</span></h4>

                <ul className="list-unstyled mt-3">
                  <li><FaCheckCircle /> All Basic Features</li>
                  <li><FaCheckCircle /> QR + Biometric Attendance</li>
                  <li><FaCheckCircle /> Online Exams</li>
                  <li><FaCheckCircle /> Live Classes</li>
                  <li><FaCheckCircle /> Priority Support</li>
                </ul>

                <button className="btn btn-success w-100 mt-3">
                  Choose Plan
                </button>
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
