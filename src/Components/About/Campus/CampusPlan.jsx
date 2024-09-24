import './CampusPlan.css'; // Import the CSS file for additional styling

const CampusPlan = () => {
  return (
    <div className="campus-plan-container">
      {/* Title for the Campus Plan */}
      <h1 className="campus-title">Campus</h1>

      {/* Introductory paragraph describing the location and general campus features */}
      <p className="campus-description">
        Located in the heart of Mangalore city, the Karnataka Govt Polytechnic spans over 18 acres with a spacious building and comprehensive facilities that support a quality educational environment. Below are the key infrastructural highlights of the campus:
      </p>

      {/* List of Infrastructural Facilities with each feature as a list item */}
      <ul className="campus-facilities-list">
        <li><strong>Spacious classrooms and drawing halls:</strong> Well-designed rooms for theoretical and practical education.</li>
        <li><strong>Well-equipped laboratories:</strong> Each branch has modern laboratories to train students with the latest technologies.</li>
        <li><strong>Computer labs with internet facility:</strong> Multiple computer labs offering internet access for research and assignments.</li>
        <li><strong>Comprehensive library:</strong> A library with over 25,000 volumes covering all branches of Science and Engineering.</li>
        <li><strong>Hostel facilities:</strong> Boys' hostels with a capacity of 150 and girls' hostels for 100 students, both near the campus.</li>
        <li><strong>Canteen for students and staff:</strong> A hygienic and well-maintained canteen serving food to students and staff.</li>
        <li><strong>Seminar Hall and Model Classroom:</strong> Facilities for workshops, presentations, and special lectures.</li>
        <li><strong>Vehicle parking:</strong> Designated parking areas for students and staff.</li>
        <li><strong>Sports facilities:</strong> Indoor and outdoor sports equipment and areas to support physical education.</li>
        <li><strong>Auditorium and playground:</strong> An auditorium and a large playground for events and extracurricular activities.</li>
      </ul>

      {/* Image showing the campus plan */}
      <img src="/assets/flowcharts/collegeCampus.jpg" alt="Campus Plan" className="full-screen-image" />
    </div>
  );
};

export default CampusPlan;
