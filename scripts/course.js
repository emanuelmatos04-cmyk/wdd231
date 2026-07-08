// Array oficial de cursos
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML','CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML','CSS','JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML','CSS','JavaScript'],
        completed: false
    }
];

// Función para mostrar cursos
function displayCourses(filter) {
    const container = document.getElementById("courses");
    container.innerHTML = "";

    let filtered = courses;
    if (filter === "WDD") filtered = courses.filter(c => c.subject === "WDD");
    if (filter === "CSE") filtered = courses.filter(c => c.subject === "CSE");

    let total = 0;
    filtered.forEach(course => {
        const div = document.createElement("div");
        div.textContent = `${course.subject} ${course.number} - ${course.title} (${course.credits} credits)`;
        div.style.color = course.completed ? "green" : "black";
        container.appendChild(div);
        total += course.credits;
    });

    document.getElementById("totalCredits").textContent = total;
}

// Botones de filtro
document.getElementById("allBtn").addEventListener("click", () => displayCourses("ALL"));
document.getElementById("wddBtn").addEventListener("click", () => displayCourses("WDD"));
document.getElementById("cseBtn").addEventListener("click", () => displayCourses("CSE"));

// Mostrar todos por defecto
displayCourses("ALL");
