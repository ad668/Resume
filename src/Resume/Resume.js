// import React from "react";
import React, { useRef } from "react";
import "./resume.css"; 
import html2pdf from "html2pdf.js";

const Resume = () => {

  const resumeRef = useRef(null);
  const handlePrint = () => {
    const element = resumeRef.current;

    const options = {
     
      filename: "Aditya_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  // const handlePrint = () => {
  //   const printContent = resumeRef.current.innerHTML;
  //   const printWindow = window.open("", "", "width=800,height=1500");
  //   const styles = Array.from(document.styleSheets)
  //     .map((styleSheet) => {
  //       try {
  //         return Array.from(styleSheet.cssRules || [])
  //           .map((rule) => rule.cssText)
  //           .join("\n");
  //       } catch (e) {
  //         console.warn("Could not access stylesheet", styleSheet);
  //         return "";
  //       }
  //     })
  //     .join("\n");

  //   const htmlContent = `
  //     <html>
  //       <head>
  //         <title>Aditya_Resume</title>
  //         <style>${styles}</style>
  //       </head>
  //       <body>${printContent}</body>
  //     </html>
  //   `;

  //   printWindow.document.open();
  //   printWindow.document.write(htmlContent);
  //   printWindow.document.close();
  //   printWindow.focus();
  //   setTimeout(() => {
  //     printWindow.print();
  //     printWindow.close();
  //   }, 50);
  // };

    return (
      <div>
          <button onClick={handlePrint} className="download-btn">Download as PDF</button>
          <div ref={resumeRef} className="container">

        {/* Header section */}
            <div className="header">
                <div className="left">
                    <h1>Aditya Maurya</h1>

                    <p><span className="bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/aditya-maurya-0497b822b" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/aditya-maurya-0497b822b</a></p>
                    <p><span className="bold">Github:</span> <a href="https://github.com/ad668" target="_blank" rel="noopener noreferrer">https://github.com/ad668</a></p>
                </div>
                <div className="right">
                    <p><span className="bold">Mobile:</span> +91 93241 07269</p>
                    <p><span className="bold">Email:</span> adityamorya560@gmail.com</p>
                </div>
            </div>

          {/* Education */}
            <div className="section">
                <h2>EDUCATION</h2>
                <div className="education">
                    <p><span className="bold">Chikitsak Samuha’s Patkar Varde College of Arts, Science & Commerce Goregaon (W)</span><br/>
                    Bachelor of Science – Information Technology; <span className="bold">CGPA: 9.15</span></p>
                    <p>Mumbai, India<br/>2021 - 2024</p>
                </div>
                <div className="education">
                    <p><span className="bold">Chikitsak Samuha’s Patkar Varde College of Arts, Science & Commerce Goregaon (W)</span><br/>
                    HSC – Science; <span className="bold">Marks: 85.83%</span></p>
                    <p>Mumbai, India<br/>2020 - 2021</p>
                </div>
            </div>


            {/* Skill Summary */}
            <div className="section">
                <h2>SKILL SUMMARY</h2>
                <ul>
                    <li><span className="bold">Language:</span> Python, Java, HTML, CSS, JavaScript, Node.js</li>
                    <li><span className="bold">Library:</span> Machine Learning library (NumPy, Matplotlib, Pandas, SciPy, etc), React.js</li>
                    <li><span className="bold">Platform:</span> PyCharm, Visual Studio Code, Jupyter Notebook, NetBeans</li>
                    <li><span className="bold">Other:</span> MySQL, MS SQL Server 2019, MongoDB, Data Structure, OOPs Concept, Node.js, .NET</li>
                    <li><span className="bold">Soft Skills:</span> Self-confident, hardworking, positive mindset</li>
                </ul>
            </div>

          {/* Work Experience */}
            <div className="section">
                <h2>WORK EXPERIENCE</h2>
                <p><span className="bold">Engineer || Tata Consultancy Services</span> <span className="duration">(January 2025 – Present)</span></p>
                <ul>
                    <li>I work as a backend development engineer, focusing on Microsoft SQL Server 2019 and VB.NET.</li>
                    <li>My role involves writing and debugging code, optimizing database queries, troubleshooting technical issues, implementing effective solutions, and ensuring seamless backend integration.</li>
                </ul>
                <p><span className="bold">Graduate Trainee || Tata Consultancy Services</span><span className="duration">(August 2024 – January 2025)</span></p>
                <ul>
                    <li>Python, AI & ML, Java, Web Development, Docker, Git, etc.</li>
                    <li>Practical experience in technologies like Machine Learning, Agile & DevOps tools.</li>
                </ul>
                <p><span className="bold">Web Development Intern || LearnWik Pvt. Limited</span><span className="duration">(June 2023 – August 2023)</span></p>
                <ul>
                      <li>Python, AI & ML, Java, Web Development, Docker, Git etc.</li>
                      <li>Gained practical experience in many technologies such as Machine Learning, AI, Python, Java, Web Development, Agile & DevOps tools.</li>
                </ul>
            </div>

            {/* Project */}
            <div className="section">
                <h2>PROJECTS</h2>
                <p><span className="bold">Movie Recommendation System <a href="https://github.com/ad668/MovieRecommendSystem.git" target="_blank" rel="noopener noreferrer"> Link </a></span> </p>
                <ul>
                    <li>This project is a basic Movie Recommendation System that utilizes various machine learning techniques to suggest similar movies based on user input.</li>
                    <li>The system performs data preprocessing, including vectorization, stopwords removal, and stemming, to enhance the accuracy of recommendations. </li>
				            <li>When a user types a movie name in the input box, the model suggests five similar movies based on the processed data.  </li>
                </ul>
                <p><span className="bold">Image Editing Platform <a href="https://github.com/ad668/AnimateimageEdit.git" target="_blank" rel="noopener noreferrer"> Link </a></span> </p>
                <ul>
                    <li>This project is designed in Python and some library of python such as OpenCV, numpy etc. </li>
                    <li>In this project user can upload his image and according his requirement they can change or modify his image. </li>
                </ul>
                <p><span className="bold">My Portfolio Website <a href="https://adityamaurya12.netlify.app/" target="_blank" rel="noopener noreferrer"> Link </a></span> </p>
                <ul>
                    <li>This project is designed in Reactjs. </li>
                    <li>In this project we have mention all about myself such as education, skill experience etc. </li>
                </ul>
            </div>

          {/* External Certificate */}
            <div className="section">
                <h2>CERTIFICATES</h2>
                <ol>
                    <li><span className="bold">Machine Learning Foundations: Statistics</span> (LinkedIn Learning)</li>
                    <li><span className="bold">Amazon Web Services Machine Learning Essential Training</span> (LinkedIn Learning)</li>
                    <li><span className="bold">Introduction to OpenAI API & ChatGPT API for Developers</span> (Udemy)</li>
                    <li><span className="bold">Prompt Engineering for AI Bootcamp</span> (Udemy)</li>
                    <li><span className="bold">SQL With Python Basis</span></li>
                    <li><span className="bold">Basic Cyber Security Program</span></li>
                </ol>
            </div>
          </div>
        </div>
    );
};

export default Resume;

