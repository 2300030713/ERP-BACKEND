const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const students = [
    { id: 1, name: 'JAYATHI' },
    { id: 2, name: 'NIHARIKA' }
  ];
  const faculty = [
    { id: 1, name: 'BHARGAVI' },
    { id: 2, name: 'JEEVANI' }
  ];
  const courses = [
    { id: 1, title: 'JAVA', ltps: 'Lecture and Practical' },
    { id: 2, title: 'PYTHON', ltps: 'Lecture and Lab' }
  ];
  const feedback = [
    { id: 1, comment: 'Great course!' },
    { id: 2, comment: 'Needs improvement.' }
  ];
  const assignments = [
    { id: 1, title: 'JAVA Assignment 1' },
    { id: 2, title: 'PYTHON Lab Report' }
  ];
  app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
  app.get('/students/:id/:name', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentName = req.params.name;
    const student = students.find(s => s.id === studentId && s.name === studentName);
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  });
  app.get('/faculty/:id/:name', (req, res) => {
    const facultyId = parseInt(req.params.id);
    const facultyName = req.params.name;
    const facultyMember = faculty.find(f => f.id === facultyId && f.name === facultyName);
    
    if (facultyMember) {
      res.json(facultyMember);
    } else {
      res.status(404).send('Faculty not found');
    }
  });
  app.get('/courses', (req, res) => {
    res.json(courses);
  });
  app.get('/feedback', (req, res) => {
    res.json(feedback);
  });
  app.get('/assignments', (req, res) => {
    res.json(assignments);
  });
  app.get('/handout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'MSWD HANDOUT.pdf'));
});
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Scenary.jpg'));
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/campus',(req, res) =>{
  const imageId = req.params.id;
res.sendFile(path.join(__dirname,'/uploads','public','kl.jpg'));
res.sendFile(imagePath);
});
app.get('/Tour-of-campus',(req, res) =>{
  res.sendFile(path.join(__dirname,'public','video.mp4'))
  });
  
 app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});
   

