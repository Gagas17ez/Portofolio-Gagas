import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SanberTodo from "../../Assets/Projects/SanberTodo.png";
import MyAnimeForum from "../../Assets/Projects/myAnimeForum.png";
import Laxena from "../../Assets/Projects/Laxena.png";
import RakitPC from "../../Assets/Projects/RakitPC.png";
import JuandaTracking from "../../Assets/Projects/Magang JuandaTracking.png";
import SimPens from "../../Assets/Projects/SimPENS.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RakitPC}
              isBlog={false}
              title="RakitPC"
              description="Aplikasi yang berguna membantu pengguna mendapatkan komputernya sesuai dengan budget dan kebutuhan yang dimiliki, dengan atau tanpa pengalaman di dalam bidang komputer. Telah digunakan lebih dari 1.500 user."
              ghLink="https://gitlab.com/p1"
              demoLink="https://play.google.com/store/apps/details?id=com.rakitpc.rakitpc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JuandaTracking}
              isBlog={false}
              title="Juanda Tracking Service"
              description="Web Tracking Penerbangan untuk penumpang Bandara Internasional Juanda yang berguna membantu penumpang tetap update tentang Status Penerbangan Terbaru, Delay, Perubahan Jam ataupun Gate. Merupakan hasil Produk Magang di PT Angakasa Pura I Juanda dan Terdeploy di koneksi jaringan Bandara Juanda Terminal I & II."
              ghLink="https://github.com/Gagas17ez/AngkasaPuraTrackingFlight"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Laxena}
              isBlog={false}
              title="Laxena"
              description="Produk Freelance Untuk perusahaan kitchenware PT. LAXENA Mobile App "
              ghLink="https://github.com/Gagas17ez/L"
              demoLink="https://play.google.com/store/apps/details?id=com.laxena"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SanberTodo}
              isBlog={false}
              title="SanberTodo"
              description="Project Latihan Flutter Android membuat TODO Reminder App untuk me-list Task yang harus dikerjakan dan memberi notifikasi jika mendekati jatuh tempo Waktu Task."
              ghLink="https://gitlab.com/dmaxz/flutter_todo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyAnimeForum}
              isBlog={false}
              title="MyAnime Forum"
              description="Project Latihan Laravel WebApp membuat MyAnime Forum untuk post & diskusi mengenai Anime Terbaru dan Terupdate"
              ghLink="https://gitlab.com/GagasAmukti/myanime_clone"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SimPens}
              isBlog={false}
              title="SIM Penilaian Akademik PENS"
              description="Project Web SIM Akademik Mahasiswa PENS untuk memudahkan Dosen Menilai & Merubah Nilai ataupun Data diri Mahasiswa. Project menggunakan PHP dan Oracle."
              demoLink="https://youtu.be/mvX6HeHIhEs"    
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
