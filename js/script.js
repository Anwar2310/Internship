document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Arrow drawing animation
    gsap.to(".scroll-arrow path", {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".list-intro-container",
            start: "center bottom",
            end: "center center",
            scrub: true,
        }
    });



    /*-----------------------------------------------------*/
    // 2. Intro text animation
    const introText = document.querySelector('.intro-text');
    gsap.to(introText, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    });



    /*-----------------------------------------------------*/
    // 3. Welcome section animations
    gsap.from(".welcome-image", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".welcome-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".welcome-text", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: ".welcome-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from("#main-title", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });




    /*-----------------------------------------------------*/
    // 4. Teacher data
    const teachers = [
        { name: "Alice Johnson", subject: "Mathematics", image: "https://i.pinimg.com/564x/49/72/48/497248b6fb31e69edf238babafa7a9cb.jpg" },
        { name: "Bob Smith", subject: "Physics", image: "https://i.pinimg.com/564x/dd/2d/ba/dd2dbab29d154359584f33258a2bfa11.jpg" },
        { name: "Carol Davis", subject: "Chemistry", image: "https://i.pinimg.com/564x/17/fa/44/17fa44e8d7f0d4a341f078b6c94a31ef.jpg" },
        { name: "David Brown", subject: "Biology", image: "https://i.pinimg.com/564x/6f/2b/c6/6f2bc637d6e4a7d8d03c7f322f8e20bf.jpg" },
        { name: "Eva Williams", subject: "History", image: "https://i.pinimg.com/564x/bc/fd/81/bcfd81f7bf336b4de0c8d85925cd9ef1.jpg" },
        { name: "Frank Thompson", subject: "Geography", image: "https://i.pinimg.com/564x/e5/80/2a/e5802acedee3f85bd46fdf1105a4933b.jpg" },
        { name: "Grace Miller", subject: "English", image: "https://i.pinimg.com/564x/aa/f4/45/aaf44580d5c933fc862f8afc51b30e33.jpg" },
        { name: "Henry Wilson", subject: "Economics", image: "https://i.pinimg.com/564x/14/2c/38/142c38d264ab220f066644278f7b97cf.jpg" },
        { name: "Isabel Martinez", subject: "Computer Science", image: "https://i.pinimg.com/564x/8c/cd/6a/8ccd6a890398cc6b4d0999dea7a3b7dd.jpg" },
        { name: "Jack Anderson", subject: "Art", image: "https://i.pinimg.com/564x/fd/49/bf/fd49bff8fa06fa1cbcc9e1e1d06151db.jpg" },
        { name: "Karen Lee", subject: "Music", image: "https://i.pinimg.com/564x/7f/08/ab/7f08ab61d503210bad53538d90ecf591.jpg" },
        { name: "Leo Garcia", subject: "Physical Education", image: "https://i.pinimg.com/564x/14/17/91/141791e52c8b60893c1f8874460f1ef5.jpg" }
    ];

    const teacherList = document.getElementById("teacher-list");



    /*-----------------------------------------------------*/
    // 5. Generate teacher cards + animation
    teachers.forEach(teacher => {
        const teacherCard = document.createElement("div");
        teacherCard.classList.add("teacher-card");

        teacherCard.innerHTML = `
            <img src="${teacher.image}" alt="${teacher.name}">
            <h2>${teacher.name}</h2>
            <p>Subject: ${teacher.subject}</p>
            <button class="book-button" onclick="alert('Booking feature coming soon!')">Book Class</button>
        `;

        teacherList.appendChild(teacherCard);

        gsap.from(teacherCard, {
            opacity: 0,
            y: 30, // Slide up from below
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: teacherCard,
                start: "top 80%", // Trigger when the top of the card hits 80% of the viewport height
                toggleActions: "play none none reverse",
            }
        });
    });



});
