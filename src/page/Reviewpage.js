import React from 'react';
import { Container, Nav, Navbar, Button, Badge, Card, Row, Col } from 'react-bootstrap';
import { 
  GraduationCap, CheckCircle, XCircle, Eye, Download, 
  ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube,
  BarChart3, FileText
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReviewPage = () => {
  const examData = [
    { id: 1, question: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], userAns: "B", correctAns: "B", isCorrect: true },
    { id: 2, question: "What is the function of ribosomes?", options: ["DNA replication", "Protein synthesis", "Lipid synthesis", "ATP production"], userAns: "B", correctAns: "B", isCorrect: true },
    { id: 3, question: "Which process occurs in the chloroplasts?", options: ["Respiration", "Photosynthesis", "Fermentation", "Glycolysis"], userAns: "A", correctAns: "B", isCorrect: false }
  ];

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* --- NAVBAR --- */}
      <Navbar collapseOnSelect expand="lg" bg="white" className="border-bottom px-2 py-2 sticky-top shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
            <GraduationCap size={28} color="#0056b3" strokeWidth={2.5} />
            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
              EduPlatform
            </span>
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-2 order-lg-last">
             <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
              className="rounded-circle border" 
              width="35" height="35" alt="User" style={{ objectFit: 'cover' }}
            />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 p-0 ms-2" />
          </div>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-lg-4 mt-3 mt-lg-0">
              <Nav.Link href="#" className="text-secondary small fw-medium">Home</Nav.Link>
              <Nav.Link href="#" className="text-secondary small fw-medium d-flex align-items-center gap-1">
                Courses <ChevronDown size={14} />
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary small fw-medium">My Learning</Nav.Link>
              <Nav.Link href="#" className="text-primary small fw-bold" style={{ borderBottom: '2px solid #007bff' }}>
                Test Practice
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary small fw-medium">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- MAIN CONTENT --- */}
      <Container className="py-4 py-md-5 flex-grow-1" style={{ maxWidth: '900px' }}>
        
        {/* Header Section */}
        <div className="mb-4">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
            <div>
              <h1 className="fw-bold fs-4 fs-md-3 mb-1" style={{ color: '#0f172a' }}>Physics Model Exam</h1>
              <p className="text-muted small mb-0">Completed on 1/15/2024</p>
            </div>
            <Button 
              variant="white" 
              className="d-flex align-items-center gap-2 px-3 py-1 fw-bold shadow-sm border mt-2 mt-sm-0"
              style={{ fontSize: '0.75rem', borderRadius: '6px' }}
            >
              <Download size={14} /> Download Report
            </Button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="p-1 rounded-3 d-flex mb-4 mb-md-5 border shadow-sm" style={{ backgroundColor: '#eff3f7' }}>
          <Button variant="link" className="flex-grow-1 text-decoration-none text-muted small fw-medium py-2 d-flex align-items-center justify-content-center gap-2 text-nowrap">
            <BarChart3 size={14} />
            <span className="d-none d-sm-inline">Results & Analysis</span>
            <span className="d-sm-none">Results</span>
          </Button>

          <Button variant="white" className="flex-grow-1 shadow-sm small fw-bold py-2 border-0 bg-white rounded-2 text-dark d-flex align-items-center justify-content-center gap-2 text-nowrap">
            <FileText size={14} />
            <span className="d-none d-sm-inline">Review Solutions</span>
            <span className="d-sm-none">Solutions</span>
          </Button>
        </div>

        <div className="d-flex justify-content-between mb-3 align-items-center">
          <h5 className="fw-bold text-dark opacity-75 mb-0">Review Solutions</h5>
          <Badge bg="light" text="dark" className="border rounded-pill fw-bold" style={{ fontSize: '0.7rem' }}>3 Questions</Badge>
        </div>

        {/* Questions Loop */}
        {examData.map((item) => (
          <Card 
            key={item.id} 
            className="mb-4 border-0 shadow-sm" 
            style={{ borderRadius: '12px', backgroundColor: '#ebf3fb' }}
          >
            <Card.Body className="p-3 p-md-4">
              <div className="d-flex justify-content-between mb-3 flex-wrap gap-2">
                <div className="fw-bold d-flex align-items-center gap-2">
                  {item.isCorrect ? <CheckCircle size={18} className="text-success" /> : <XCircle size={18} className="text-danger" />}
                  Question {item.id}
                </div>
                <div className="d-flex gap-2">
                  <Badge bg="white" text="dark" className="text-uppercase border px-2 py-1" style={{ fontSize: '9px', fontWeight: '700' }}>physics</Badge>
                  <Badge className="px-2 py-1" style={{ fontSize: '9px', backgroundColor: '#fd7e14' }}>4 marks</Badge>
                </div>
              </div>

              <p className="fw-medium text-dark mb-4" style={{fontSize: '0.95rem'}}>{item.question}</p>

              <div className="d-grid gap-2 mb-4">
                {item.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isCorrectOption = letter === item.correctAns;
                  const isUserAns = letter === item.userAns;

                  let cardStyle = "p-3 border rounded-3 d-flex justify-content-between align-items-center ";
                  
                  if (isCorrectOption) {
                    cardStyle += "bg-success bg-opacity-10 border-success text-success fw-bold";
                  } else if (isUserAns && !item.isCorrect) {
                    cardStyle += "bg-danger bg-opacity-10 border-danger text-danger fw-bold";
                  } else {
                    cardStyle += "bg-white border-light-subtle shadow-sm";
                  }

                  return (
                    <div key={idx} className={cardStyle} style={{ fontSize: '0.85rem' }}>
                      <span>{letter}. {opt}</span>
                      {isCorrectOption && <CheckCircle size={14} />}
                      {(isUserAns && !item.isCorrect) && <XCircle size={14} />}
                    </div>
                  );
                })}
              </div>

              {/* Answer Footer (No Divider Line) */}
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mt-2">
                <small className="text-secondary" style={{ fontSize: '0.8rem' }}>
                  Your answer: <b>{item.userAns}</b> | Correct answer: <b>{item.correctAns}</b>
                </small>
                
                <Button 
                  variant="white" 
                  size="sm" 
                  className="d-flex align-items-center gap-2 px-3 py-2 border shadow-sm justify-content-center bg-white" 
                  style={{ fontSize: '0.75rem', fontWeight: '600', minWidth: '150px', borderRadius: '8px', color: '#334155' }}
                >
                  <Eye size={14} /> Show Explanation
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>

      {/* --- UPDATED FOOTER --- */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8' }} className="pt-5 pb-4 mt-auto">
        <Container>
          <Row className="gy-4 pb-4">
            {/* Logo & Description */}
            <Col lg={4} md={12} className="mb-4 mb-lg-0">
              <div className="d-flex align-items-center gap-2 mb-3">
                <GraduationCap size={24} color="#3b82f6" />
                <span className="text-white fw-bold fs-5">EduPlatform</span>
              </div>
              <p className="small lh-lg mb-4" style={{ maxWidth: '300px' }}>
                Empowering students with quality education through comprehensive online tuition and coaching programs.
              </p>
              <div className="d-flex gap-3">
                <Facebook size={18} className="text-white opacity-50 cursor-pointer" />
                <Twitter size={18} className="text-white opacity-50 cursor-pointer" />
                <Instagram size={18} className="text-white opacity-50 cursor-pointer" />
                <Youtube size={18} className="text-white opacity-50 cursor-pointer" />
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={4} sm={6} className="xs-6">
              <h6 className="text-white fw-bold mb-3 small">Quick Links</h6>
              <ul className="list-unstyled small d-grid gap-2">
                <li>School Tuition</li>
                <li>College Tuition</li>
                <li>Entrance Coaching</li>
                <li>Government Exams</li>
                <li>UPSC Coaching</li>
              </ul>
            </Col>

            {/* Support */}
            <Col lg={2} md={4} sm={6} className="xs-6">
              <h6 className="text-white fw-bold mb-3 small">Support</h6>
              <ul className="list-unstyled small d-grid gap-2">
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={4} md={4} sm={12}>
              <h6 className="text-white fw-bold mb-3 small">Contact Info</h6>
              <ul className="list-unstyled small d-grid gap-3">
                <li className="d-flex align-items-center gap-2">
                  <Mail size={16} className="text-info"/> 
                  <span>support@eduplatform.com</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Phone size={16} className="text-info"/> 
                  <span>+91 98765 43210</span>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <MapPin size={16} className="text-info mt-1"/> 
                  <span>Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Copyright Section */}
          <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
            <span style={{ fontSize: '11px', opacity: '0.6' }}>
              © 2024 EduPlatform. All rights reserved. | Designed for Excellence in Education
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default ReviewPage;