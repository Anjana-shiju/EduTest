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
              <Nav.Link href="#" className="text-secondary small fw-medium py-2">Home</Nav.Link>
              <Nav.Link href="#" className="text-secondary small fw-medium d-flex align-items-center gap-1 py-2">
                Courses <ChevronDown size={14} />
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary small fw-medium py-2">My Learning</Nav.Link>
              <Nav.Link href="#" className="text-primary small fw-bold py-2" style={{ borderBottom: '2px solid #007bff' }}>
                Test Practice
              </Nav.Link>
              <Nav.Link href="#" className="text-secondary small fw-medium py-2">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- MAIN CONTENT --- */}
      <Container className="py-4 py-md-5 flex-grow-1" style={{ maxWidth: '900px' }}>
        
        {/* Title, Date and Small Button */}
        <div className="mb-4">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
            <div>
              <h1 className="fw-bold fs-4 fs-md-3 mb-1" style={{ color: '#0f172a' }}>Physics Model Exam</h1>
              <p className="text-muted small mb-0">Completed on 1/15/2024</p>
            </div>
            
            <Button 
              variant="outline-dark" 
              className="d-flex align-items-center gap-2 px-3 py-1 fw-medium mt-2 mt-sm-0"
              style={{ fontSize: '0.75rem', borderRadius: '6px', border: '1px solid #dee2e6' }}
            >
              <Download size={14} /> Download Report
            </Button>
          </div>
        </div>

        {/* TAB SELECTOR */}
        <div className="p-1 rounded-3 d-flex mb-4 mb-md-5 border shadow-sm" style={{ backgroundColor: '#eff3f7' }}>
          <Button variant="link" className="flex-grow-1 text-decoration-none text-muted small fw-medium py-2 d-flex align-items-center justify-content-center gap-2 text-nowrap">
            <BarChart3 size={14} strokeWidth={2} />
            <span className="d-none d-sm-inline">Results & Analysis</span>
            <span className="d-sm-none">Results</span>
          </Button>

          <Button variant="white" className="flex-grow-1 shadow-sm small fw-bold py-2 border-0 bg-white rounded-2 text-dark d-flex align-items-center justify-content-center gap-2 text-nowrap">
            <FileText size={14} strokeWidth={2} />
            <span className="d-none d-sm-inline">Review Solutions</span>
            <span className="d-sm-none">Solutions</span>
          </Button>
        </div>

        <div className="d-flex justify-content-between mb-3 align-items-center">
          <h5 className="fw-bold text-dark opacity-75 mb-0">Review Solutions</h5>
          <Badge bg="light" text="dark" className="border rounded-pill fw-bold" style={{ fontSize: '0.7rem' }}>3 Questions</Badge>
        </div>

        {/* Questions Loop (TINTED BACKGROUND) */}
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
                  <Badge bg="orange" className="px-2 py-1" style={{ fontSize: '9px', backgroundColor: '#fd7e14' }}>4 marks</Badge>
                </div>
              </div>

              <p className="fw-medium text-dark mb-4" style={{fontSize: '0.95rem'}}>{item.question}</p>

              <div className="d-grid gap-2 mb-4">
                {item.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isCorrectOption = letter === item.correctAns;
                  const isUserWrong = letter === item.userAns && !item.isCorrect;

                  let cardStyle = "p-3 border rounded-3 d-flex justify-content-between align-items-center ";
                  if (isCorrectOption) cardStyle += "bg-success bg-opacity-10 border-success text-success fw-bold";
                  else if (isUserWrong) cardStyle += "bg-danger bg-opacity-10 border-danger text-danger fw-bold";
                  else cardStyle += "bg-white border-light-subtle shadow-sm";

                  return (
                    <div key={idx} className={cardStyle} style={{ fontSize: '0.85rem' }}>
                      <span>{letter}. {opt}</span>
                      {isCorrectOption && <CheckCircle size={14} />}
                      {isUserWrong && <XCircle size={14} />}
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-top border-secondary border-opacity-10 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                <small className="text-muted">Your answer: <b>{item.userAns}</b> | Correct: <b className="text-success">{item.correctAns}</b></small>
                <Button variant="white" size="sm" className="d-flex align-items-center gap-1 px-3 py-1 border shadow-sm justify-content-center" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                  <Eye size={14} /> Show Explanation
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>

      {/* --- FOOTER --- */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8' }} className="pt-5 pb-3 mt-auto">
        <Container>
          <Row className="gy-5 pb-5 border-bottom border-secondary border-opacity-25 row-cols-1 row-cols-sm-2 row-cols-lg-4">
            <Col>
              <div className="d-flex align-items-center gap-2 mb-3">
                <GraduationCap size={24} color="#3b82f6" />
                <span className="text-white fw-bold fs-5">EduPlatform</span>
              </div>
              <p className="small lh-lg mb-4">Empowering students with quality education through comprehensive online programs.</p>
              <div className="d-flex gap-3">
                <Facebook size={18} className="text-white opacity-50" />
                <Twitter size={18} className="text-white opacity-50" />
                <Instagram size={18} className="text-white opacity-50" />
                <Youtube size={18} className="text-white opacity-50" />
              </div>
            </Col>
            <Col>
              <h6 className="text-white fw-bold mb-3 small text-uppercase">Quick Links</h6>
              <ul className="list-unstyled small d-grid gap-2">
                <li>School Tuition</li><li>College Tuition</li><li>Entrance Coaching</li><li>Government Exams</li>
              </ul>
            </Col>
            <Col>
              <h6 className="text-white fw-bold mb-3 small text-uppercase">Support</h6>
              <ul className="list-unstyled small d-grid gap-2">
                <li>Help Center</li><li>FAQ</li><li>Contact Us</li><li>Privacy Policy</li>
              </ul>
            </Col>
            <Col>
              <h6 className="text-white fw-bold mb-3 small text-uppercase">Contact Info</h6>
              <ul className="list-unstyled small d-grid gap-3">
                <li className="d-flex align-items-center gap-2 small"><Mail size={14} className="text-info"/> support@eduplatform.com</li>
                <li className="d-flex align-items-center gap-2 small"><Phone size={14} className="text-info"/> +91 98765 43210</li>
                <li className="d-flex align-items-start gap-2 small"><MapPin size={14} className="text-info mt-1"/> Mumbai, India</li>
              </ul>
            </Col>
          </Row>
          <div className="text-center pt-4 pb-2" style={{ fontSize: '10px', opacity: '0.5' }}>
            © 2024 EduPlatform. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default ReviewPage;