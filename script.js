  document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // Close on nav-link OR mobile contact button click
    document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn-contact")
      .forEach((el) => {
        el.addEventListener("click", () => {
          bsCollapse.hide();
        });
      });

    // Toggle hamburger ↔ cross
    const toggler = document.querySelector(".navbar-toggler");
    const icon = toggler.querySelector(".navbar-toggler-icon");
    const cross = toggler.querySelector(".toggler-cross");

    toggler.addEventListener("click", function () {
      icon.classList.toggle("d-none");
      cross.classList.toggle("d-none");
    });

    // Reset to hamburger when collapsed
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
      icon.classList.remove("d-none");
      cross.classList.add("d-none");
    });
  });



    // for success message

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop normal form submit

    let formData = new FormData(this);

    fetch("sendmail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Show SweetAlert success message
        if(data.status === "success"){
            Swal.fire({
                icon: 'success',
                title: 'Sent!',
                text: data.message,
                confirmButtonColor: '#3085d6'
            });
            // Optionally, reset the form
            document.getElementById("contactForm").reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message,
            });
        }
    })
    .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Try again.',
        });
    });
});




    // play video cards

function togglePlay(button) {
  const card = button.closest('.video-card');
  const video = card.querySelector('.video-player');
  const icon = button.querySelector('i');

  console.log("Clicked button for video:", video);

  // Pause all other videos
  document.querySelectorAll('.video-player').forEach(v => {
    if (v !== video) {
      v.pause();
      v.closest('.video-card')
        .querySelector('.play-button i')
        .classList.replace('fa-pause', 'fa-play');
    }
  });

  // Play or pause current video
  if (video.paused) {
    video.play().then(() => {
      console.log("Video playing...");
      icon.classList.replace('fa-play', 'fa-pause');
    }).catch(err => {
      console.error("Play failed:", err);
    });
  } else {
    video.pause();
    console.log("Video paused...");
    icon.classList.replace('fa-pause', 'fa-play');
  }

  // Reset when video ends
  video.onended = () => {
    icon.classList.replace('fa-pause', 'fa-play');
  };
}




// module cards

const doctors = [
  {
    name: "Dr. Y K Mishra",
    location: "New Delhi, India",
    hospital: "Manipal Hospitals Dwarka, Delhi",
    role: "Cardiac Surgeon",
    exp: "44+ Year of experience",
    img: "/images/model-1-logo-1.svg",
    desc: "Dr. Y.K. Mishra is a distinguished Cardiac Surgeon, recognised as a pioneer in minimally invasive cardiac surgery in India."
  },
  {
    name: "Dr. T S Kler",
    location: "New Delhi, India",
    hospital: "BLK-Max Super Specialty Hospital, Delhi",
    role: "Cardiac Surgeon",
    exp: "48 Year of experience",
    img: "/images/model-1-doctor-2.svg",
    desc: "Dr. T.S. Kler is a renowned cardiologist and a pioneer in electrophysiology, revolutionising cardiac rhythm management in India."
  },
  {
    name: "Dr. Ajay Kaul",
    location: "Noida, India",
    hospital: "Fortis Hospital, Noida",
    role: "Cardiac Surgeon",
    exp: "38+ Year of experience",
    img: "/images/model-1-doc-3.svg",
    desc: "Dr. Ajay Kaul is recognised among the top cardiac surgeons in India, with more than 20,000 surgeries performed."
  },
  {
    name: "Dr. Naresh Trehan",
    location: "Gurgaon, India",
    hospital: "Medanta-The Medicity, Gurgaon",
    role: "Cardiac Surgeon",
    exp: "56+ Year of experience",
    img: "/images/model-1-doc-4.svg",
    desc: "Founder of Medanta, Dr. Naresh Trehan has performed over 48,000 cardiac surgeries with unmatched expertise."
  },
  {
    name: "Dr. Z S Meharwal",
    location: "New Delhi, India",
    hospital: "Fortis Escorts Health Institute, New Delhi",
    role: "Cardiac Surgeon",
    exp: "42+ Year of experience",
    img: "/images/model-1-doc-5.svg",
    desc: "Dr. Z.S. Meharwal has performed more than 30,000 cardiac surgeries and is regarded among the best bypass surgeons in India."
  },

  {name:"Dr. Anil Behl",
   location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute",
    role: "Cosmetic Surgeon",
    exp: "48+ Year of experience",
    img: "/images/model-2-docr-1.svg",
    desc: "Dr. Z.S. Meharwal has performed more than 30,000 cardiac surgeries and is regarded among the best bypass surgeons in India."
  },

   {name:"Dr. Indrapati Singh",
   location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    role: "Cosmetic Surgeon",
    exp: "57+ Year of experience",
    img: "/images/model-2-docr-2.svg",
    desc: "Dr. Indrapati Singh is a well-known and experienced Plastic Surgeon with a vast experience of 51 years in this field. Dr. Singh has performed many plastic surgical procedures with a high success rate. He is the founder member of the Aesthetic Society of India and is also a member of the Australasian Craniofacial Society. "
  },

   {name:"Dr. Vipul Nanda",
   location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute",
    role: "Cosmetic Surgeon",
    exp: "31+ Year of experience",
    img: "/images/model-2-docr-3.svg",
    desc: "Dr. Vipul Nanda is one of India's best Plastic & Cosmetic Surgeons. He has 23 years of experience in his field. He did his MBBS & M.S. frM.S. AIIMS and M.Ch from PGI Chandigarh. He did his MRCS from the U.K. DU.K Nanda undertook advanced fellowships under world leaders in cosmetic and plastic surgery in Spain, Japan, U.K. U.K.A."
  },

   {name:"Dr.Senthil Kumaran",
   location: "Chennai, India",
    hospital: "MIOT International, Chennai",
    role: "Cosmetic Surgeon",
    exp: "24+ Year of experience",
    img: "/images/model-2-docr-4.svg",
    desc: "Dr. Senthil Kumaran is a well-known Plastic Surgeon with more than 24 years of experience. His areas of expertise are hand and wrist surgery, limb reconstruction procedures, and developmental abnormality correction. He did MBBS in 2000 and MS (General Surgery) in 2003 from Coimbatore Medical College, Tamil Nadu."
  },

   {name:"Dr. Charu Sharma",
   location: "New Delhi, India",
    hospital: "Gorzeous Looks Cosmetic / Plastic Surgery & Hair Transplant Centre",
    role: "Cosmetic Surgeon",
    exp: "56+ Year of experience",
    img: "/images/model-2-docr-5.svg",
    desc: "Dr. Charu Sharma is one of India's well-recognized Cosmetic and Plastic Surgeons with 28 years of experience. She is a known professional to provide unsurpassed care to her patients. She is dedicated to offering her patients the latest innovations in non-surgical and surgical procedures for face and body cosmetic surgery. She strongly believes in empowering her patients with facts about plastic surgery and answering any queries they may have before, during, or after a procedure."
  },

  {
    name: "Dr. Aruna Kalra ",
    location: "Gurgaon, India",
    hospital: " CK Birla Hospital, Gurgaon",
    role: "Gynaecologist",
    exp: "28+ Year of experience",
    img: "/images/model-3-dr-1.svg",
    desc: "Dr. Aruna Kalra is a distinguished obstetrician, gynaecologist, and robotic surgeon with over three decades of experience. A champion of patient-centred care, she is renowned for her expertise in minimally invasive and scarless surgical techniques, enabling women to achieve optimal health."
  },

  {
    name: "Dr. Alka Kriplani ",
    location: "Gurgaon, India",
    hospital: " Paras Hospitals, Gurgaon",
    role: "Gynaecologist",
    exp: "44+ Year of experience",
    img: "/images/model-3-dr-2.svg",
    desc: "Dr. Alka Kriplani is a distinguished gynaecologist, gyne-lap surgeon, and fertility expert with over 40 years of experience. A recipient of the Padma Shri, the fourth highest civilian award of India, Dr. Kriplani is a beacon of excellence in women's healthcare, renowned for her expertise, leadership, and dedication to advancing the field."
  },
  {
    name: "Dr. Aswati Nair",
    location: "New Delhi, India",
    hospital: "NOVA IVI Fertility, New Delhi",
    role: "Gynaecologist",
    exp: "20+ Year of experience",
    img: "/images/model-3-dr-3.svg",
    desc: "Dr Aswati Nair is a well-known Infertility Specialist and Reproductive Health Specialist dedicated to helping couples achieve their dreams of parenthood. With 20 years of expertise, Dr Nair brings a wealth of knowledge and a compassionate approach to every patient’s journey."
  },
  {
    name: "Dr. Sulbha Arora",
    location: "Mumbai, India",
    hospital: "NOVA IVI Fertility, Mumbai",
    role: "Gynaecologist",
    exp: "26+ Year of experience",
    img: "/images/model-3-dr-4.svg",
    desc: "Dr. Sulbha Arora is a distinguished Gynaecologist and Fertility Specialist with over 26 years of experience dedicated to IVF and Assisted Reproductive Technologies. Trained by pioneers in India and abroad, Dr Arora brings a wealth of knowledge and compassionate care to help individuals and couples achieve their dreams of parenthood."
  },
  {
    name: "Dr. Shakti Bhan Khanna ",
    location: "Noida, India",
    hospital: " Indraprastha Apollo Hospital, New Delhi",
    role: "Gynaecologist",
    exp: "66+ Year of experience",
    img: "/images/model-3-dr-5.svg",
    desc: "Dr. Shakti Bhan Khanna is a highly respected Obstetrician and Gynaecologist in Delhi with an impressive six decades dedicated to women's health. A luminary in her field, Dr. Khanna is renowned for her clinical expertise, contributions to surgical innovation, and unwavering commitment to women's health across generations."
  },

   {
    name: "Dr. Rahul Bhargava ",
    location: "Gurgaon, India",
    hospital: "  Fortis Memorial Research Institute, Gurgaon",
    role: "Hematology",
    exp: "24+ Year of experience",
    img: "/images/model-4-dr-1.svg",
    desc: "Dr. Rahul Bhargava is a renowned Haematologist and Stem Cell Transplant specialist in India. With over 24 years of extensive experience, he has successfully performed over 1500 stem cell transplants, offering renewed hope and life-saving treatments to patients facing complex haematological conditions."
  },
   {
    name: "Dr. Ashish Dixit  ",
    location: "Bangalore, India",
    hospital: " Manipal Hospital (Old Airport Road) Bangalore",
    role: "Hematology",
    exp: "30+ Year of experience",
    img: "/images/model-4-dr-2.svg",
    desc: "Dr. Ashish Dixit is a renowned Haematologist with more than 30 years of expertise in Haemato-Oncology and Bone Marrow Transplantation. He has treated a wide range of benign and malignant haematological conditions, offering life-saving treatments and hope to countless patients."
  },
   {
    name: "Dr. Satya Prakash Yadav ",
    location: "Gurgaon, India",
    hospital: " Medanta - The Medicity, Gurgaon",
    role: "Hematology",
    exp: "66+ Year of experience",
    img: "/images/model-4-dr-3.svg",
    desc: "Dr. Satya Prakash Yadav is one the leading hematologists with specialization in the field of pediatrics and oncology with bone marrow transplant. With over 30 years of experience, he has carried out more than 400 blood marrow transplants, among which 50 were unrelated donor/cord transplants and 50 were haploidentical bone marrow transplants."
  },
   {
    name: "Dr. TPR Bharadwaj ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Hematology",
    exp: "66+ Year of experience",
    img: "/images/model-4-dr-4.png",
    desc: "Dr. TPR Bharadwaj is a renowned Haematologist, with over 52 years of dedicated service and leadership in the field of Haematology. He has become a cornerstone of haematological care, providing expert diagnosis and treatment for a wide range of blood disorders."
  },
   {
    name: "Dr. Gaurav Dixit",
    location: "Gurgaon, India",
    hospital: " Artemis Hospital, Gurgaon",
    role: "Hematology",
    exp: "66+ Year of experience",
    img: "/images/model-4-dr-5.svg",
    desc: "Dr. Gaurav Dixit is a leading haematologist with over 15 years of experience in haemato-oncology. He is dedicated to providing outstanding care and innovative treatments for patients with blood disorders and is particularly known for his expertise in bone marrow transplantation and his commitment to improving patient lives."
  },

   {
    name: "Dr. Shakti Bhan Khanna ",
    location: "Noida, India",
    hospital: " Indraprastha Apollo Hospital, New Delhi",
    role: "IVF & Infertility",
    exp: "66+ Year of experience",
    img: "/images/model-3-dr-5.svg",
    desc: "Dr. Shakti Bhan Khanna is a highly respected Obstetrician and Gynaecologist in Delhi with an impressive six decades dedicated to women's health. A luminary in her field, Dr. Khanna is renowned for her clinical expertise, contributions to surgical innovation, and unwavering commitment to women's health across generations."
  },
  {
    name: "Dr. Sulbha Arora",
    location: "Mumbai, India",
    hospital: "NOVA IVI Fertility, Mumbai",
    role: "IVF & Infertility",
    exp: "26+ Year of experience",
    img: "/images/model-3-dr-4.svg",
    desc: "Dr. Sulbha Arora is a distinguished Gynaecologist and Fertility Specialist with over 26 years of experience dedicated to IVF and Assisted Reproductive Technologies. Trained by pioneers in India and abroad, Dr Arora brings a wealth of knowledge and compassionate care to help individuals and couples achieve their dreams of parenthood."
  },
  {
    name: "Dr. Alka Kriplani ",
    location: "Gurgaon, India",
    hospital: " Paras Hospitals, Gurgaon",
    role: "IVF & Infertility",
    exp: "44+ Year of experience",
    img: "/images/model-3-dr-2.svg",
    desc: "Dr. Alka Kriplani is a distinguished gynaecologist, gyne-lap surgeon, and fertility expert with over 40 years of experience. A recipient of the Padma Shri, the fourth highest civilian award of India, Dr. Kriplani is a beacon of excellence in women's healthcare, renowned for her expertise, leadership, and dedication to advancing the field."
  },
 {
    name: "Dr. Aswati Nair",
    location: "New Delhi, India",
    hospital: "NOVA IVI Fertility, New Delhi",
    role: "IVF & Infertility",
    exp: "20+ Year of experience",
    img: "/images/model-3-dr-3.svg",
    desc: "Dr Aswati Nair is a well-known Infertility Specialist and Reproductive Health Specialist dedicated to helping couples achieve their dreams of parenthood. With 20 years of expertise, Dr Nair brings a wealth of knowledge and a compassionate approach to every patient’s journey."
  },
  {
    name: "Dr. Ramya Mishra",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "IVF & Infertility",
    exp: "44+ Year of experience",
    img: "/images/dr-mishra-img.svg",
    desc: "Dr. Ramya Mishra is a dedicated Obstetrician and Gynaecologist based in Delhi, specialising in IVF and reproductive medicine. With over 16 years of experience, she is committed to providing comprehensive and personalised care, supporting women in achieving their motherhood goals and maintaining optimal gynaecological health."
  },

  {
    name: "Dr. Sandeep Vaishya",
    location: "Gurgaon, India",
    hospital: " Fortis Memorial Research Institute, Gurgaon",
    role: "Neurosurgery",
    exp: "38+ Year of experience",
    img: "/images/model-6-dr-1.svg",
    desc: "Dr. Sandeep Vaishya is a distinguished neurosurgeon with over 36 years of experience, recognised for his expertise in complex brain and spine surgeries. Having performed over 15,000 successful surgeries and treated patients from over 110 countries, Dr. Vaishya brings a world-class level of skill and dedication to his patients."
  },
  {
    name: "Dr. Sudhir Tyagi ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Neurosurgery",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-2.svg",
    desc: "Dr. Sudhir Kumar Tyagi is a renowned Neurosurgeon in New Delhi with over 32 years of experience dedicated to providing cutting-edge neurosurgical care. With over 15,000 successful brain and spine surgeries to his credit, he brings unparalleled skill and precision to every procedure."
  },
  {
    name: "Dr. Aditya Gupta ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Neurosurgery",
    exp: "50+ Year of experience",
    img: "/images/model-6-dr-3.svg",
    desc: "Dr. Aditya Gupta is a highly respected brain surgeon in India, bringing over 30 years of experience to his practice. Renowned for his expertise in complex brain tumour surgeries and advanced radiosurgery techniques, Dr. Gupta has transformed the lives of thousands of patients."
  },
  {
    name: "Dr. Ravi Bhatia",
    location: "New Delhi, India",
    hospital: "   Indraprastha Apollo Hospital, New Delhi",
    role: "Neurosurgery",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-4.svg",
    desc: "Dr. Ravi Bhatia is a highly respected neurosurgeon with a remarkable 55-year career dedicated to advancing neurosurgical care. His experience encompasses a wide spectrum of complex neurosurgical procedures, offering specialised treatments and improved outcomes for patients."
  },
  {
    name: "Dr. Siddhartha Ghosh",
    location: "Chennai, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Neurosurgery",
    exp: "34+ Year of experience",
    img: "/images/model-6-dr-5.svg",
    desc: "Dr. Siddhartha Ghosh is one of India’s most distinguished neurosurgeons, bringing over 40 years of unparalleled experience to his practice. He is renowned for performing over 20,000 successful neurosurgeries on the brain, spine, and peripheral nerves and is especially celebrated for his expertise in complex brain and spine tumour removal."
  },

  {
    name: "Dr. Vinod Raina",
    location: "Chennai, India",
    hospital: "  Fortis Memorial Research Institute, Gurgaon",
    role: "Oncology",
    exp: "44+ Year of experience",
    img: "/images/model-7-dr-1.svg",
    desc: "Dr. Vinod Raina is one of India's foremost Medical Oncologists, bringing over 40 years of experience to the fight against cancer."
  },

  {
    name: "Dr. Ramesh Sarin ",
    location: "New Delhi, India",
    hospital: "  Indraprastha Apollo Hospital, New Delhi",
    role: "Oncology",
    exp: "44+ Year of experience",
    img: "/images/model-7-dr-2.svg",
    desc: "Dr. Ramesh Sarin is a prominent Surgical Oncology Expert in New Delhi with an extraordinary career spanning over 40 years, dedicated to providing compassionate care and pioneering advancements in the fight against cancer."
  },
  {
    name: "Dr. Vikram Pratap Singh",
    location: "New Delhi",
    hospital: " Indraprastha Apollo Hospital, New Delhi",
    role: "Oncology",
    exp: "64+ Year of experience",
    img: "/images/model-7-dr-3.svg",
    desc: "Dr. Vikram Pratap Singh is one of the best Surgical Oncologists in India, bringing over 50 years of experience to the field."
  },
  {
    name: "Dr. Kaustubh Patel",
    location: "Ahmedabad, India",
    hospital: " HCG Cancer Centre, Ahmedabad",
    role: "Oncology",
    exp: "59+ Year of experience",
    img: "/images/model-7-dr-4.png",
    desc: "Dr. Kaustubh Patel is a highly experienced and certified Surgical Oncologist dedicated to providing cutting-edge care for patients with Head & Neck cancers. He is particularly recognised for his expertise in thyroid, parathyroid, and salivary gland surgeries, as well as advanced organ-preserving techniques for cancers of the mandible (jaw) and larynx (voice box), including TOLS (Trans Oral Laser Surgery) in complex situations."
  },
  {
    name: "Dr. Niranjan Naik",
    location: "Gurgaon, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Oncology",
    exp: "27+ Year of experience",
    img: "/images/model-7-dr-5.svg",
    desc: "Dr. Niranjan Naik is a highly experienced surgical oncologist with over 27 years of expertise in cancer surgery. He is considered one of the best GI, Thoracic & Head and Neck Cancer Surgeons in India.."
  },

  {
    name: "Dr. IPS Oberoi k",
    location: "mumbai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Orthopaedic",
    exp: "40+ Year of experience",
    img: "/images/model-8-dr-1.svg.png",
    desc: " Dr. IPS Oberoi is a leading Orthopaedic and Joint Replacement Surgeon in India and a pioneer in advanced orthopaedic procedures. With over three decades of experience, Dr. Oberoi has successfully performed over 7,000 joint replacement surgeries with a remarkable 97% success rate, offering renewed mobility and improved quality of life to patients. He is renowned as one of the best ligament tear surgeons in India, specialising in complex knee ligament reconstruction."
  },

   {
    name: "Dr. Jayant Arora",
    location: "bengglore, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Orthopaedic",
    exp: "50+ Year of experience",
    img: "/images/model-8-dr-2.svg.png",
    desc: " Dr. Jayant Arora is a renowned Orthopaedic Specialist in Gurgaon and a leading Joint Replacement Surgeon with over 29 years of experience. He is recognised for his expertise in minimally invasive, robot-assisted, and computer-navigated orthopaedic surgeries."
  },
   {
    name: "Dr. Manoj Miglani ",
    location: "Gurgaon, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Orthopaedic",
    exp: "29+ Year of experience",
    img: "/images/model-8-dr-3.svg.png",
    desc: " Dr. Manoj Miglani is a senior consultant Orthopaedic Surgeon with extensive experience in performing a wide range of spinal and joint replacement surgeries, from the simple to the most complex. This renowned surgeon is highly regarded by his patients for his expertise and his approachable manner."
  },
   {
    name: "Dr. Billy Paul Wilson",
    location: "Chennai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Orthopaedic",
    exp: "25+ Year of experience",
    img: "/images/model-8-dr-4.svg.png",
    desc: " Dr. Billy Paul Wilson is a well-known Orthopaedic and Joint Replacement Specialist in Chennai having more than 26 years of experience. He specialises in treating limited mobility in the knee, hips, elbow, shoulder, and other joints and is a top orthopaedic doctor for meniscus injuries in Chennai."
  },
   {
    name: "Dr. (Prof) Raju Vaishya",
    location: "delhi, India",
    hospital: "  Indraprastha Apollo Hospital, New Delhi",
    role: "Orthopaedic",
    exp: "34+ Year of experience",
    img: "/images/model-8-dr-5.png",
    desc: " Dr. (Prof) Raju Vaishya is a distinguished Orthopaedic and Joint Replacement Specialist in New Delhi, bringing over 42 years of expertise as a hip and knee replacement surgeon. He is a renowned expert in arthroscopic surgery and sports medicine."
  },


   {
    name: "Dr. Ravichandran G ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Dermatologist",
    exp: "38+ Year of experience",
    img: "/images/model-9-dr-1.png",
    desc: "Dr. Ravichandran G is a dermatologist with 32+ years of experience. He specializes in treating Vitiligo and has conducted more than 2000 operations. He is a member of IADVL, Association of Cutaneous Surgeons India, Indian Medical Association and Indian Association of Dermatologists."
  },
   {
    name: "Dr. Murlidhar Rajagopalan ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Dermatologist",
    exp: "30+ Year of experience",
    img: "/images/model-9-dr-2.png",
    desc: "Dr. Murlidhar Rajagopalan is a dermatologist with 30+ years of experience. He is a member of Tamil Nadu Medical Council; Indian Association of Dermatologists, Venereologists and Leprologists (IADVL); INT Member EADV and INT Member EAACI. He has expertise in skin checks, skin care, hardening of the skin and Skin Polishing."
  },
   {
    name: "Dr. Jyotirmay Bharti",
    location: "Gurgaon, India",
    hospital: " Marengo Asia Hospitals Formerly W Pratiksha Hospital, Gurgaon",
    role: "Dermatologist",
    exp: "38+ Year of experience",
    img: "/images/model-9-dr-4.png",
    desc: "Dr. Jyotirmay Bharti is an eminent Dermatologist, Cosmetologist & Hair Transplant Surgeon. She is an active member of the Cosmetology Society of India (CSI), International Society of Dermatology.  Indian Academy of Dermatology, Venereology & Leprologist. and the American Academy of Dermatology. Dr. Bharti has expertise over the Dermatology, Venereology & Leprosy. "
  },
   {
    name: "Dr. Anil K. Agarwal",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Dermatologist",
    exp: "25+ Year of experience",
    img: "/images/model-9-dr-3.png",
    desc: "Dr. Anil K. Agarwal is a dermatologist with 32+ years of experience. He specializes in treating Vitiligo and has conducted more than 2000 operations. He is a member of IADVL, Association of Cutaneous Surgeons India, Indian Medical Association and Indian Association of Dermatologists."
  },
   {
    name: "Dr. Pooja Aggarwal ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Dermatologist",
    exp: "30+ Year of experience",
    img: "/images/model-9-dr-5.png",
    desc: "Dr. Pooja Aggarwal is a well-established dermatologist, trichologist, dermatosurgeon and cosmetologist with an experience of 9 years. She deals with all kinds of skin, hair and nail issues.  She has successfully managed extremely difficult cases of clinical dermatology. Dr. Pooja has attended numerous seminars and conferences globally to keep herself updated with latest developments of the field. She is actively involved in Clinical Research and has presented her studies in national and international conferences of several esteemed Medical Associations. She did her MBBS from College of Medical Sciences, Bharatpur, Nepal,MD in Dermatology, Leprosy and Venereology from AIIMS, New Delhi and training from AIIMS."
  },

   {
    name: "Dr. Sandeep Vaishya",
    location: "Gurgaon, India",
    hospital: " Fortis Memorial Research Institute, Gurgaon",
    role: "Spine surgery",
    exp: "38+ Year of experience",
    img: "/images/model-6-dr-1.svg",
    desc: "Dr. Sandeep Vaishya is a distinguished neurosurgeon with over 36 years of experience, recognised for his expertise in complex brain and spine surgeries. Having performed over 15,000 successful surgeries and treated patients from over 110 countries, Dr. Vaishya brings a world-class level of skill and dedication to his patients."
  },
  {
    name: "Dr. Sudhir Tyagi ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Spine surgery",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-2.svg",
    desc: "Dr. Sudhir Kumar Tyagi is a renowned Neurosurgeon in New Delhi with over 32 years of experience dedicated to providing cutting-edge neurosurgical care. With over 15,000 successful brain and spine surgeries to his credit, he brings unparalleled skill and precision to every procedure."
  },
  {
    name: "Dr. Aditya Gupta ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Spine surgery",
    exp: "50+ Year of experience",
    img: "/images/model-6-dr-3.svg",
    desc: "Dr. Aditya Gupta is a highly respected brain surgeon in India, bringing over 30 years of experience to his practice. Renowned for his expertise in complex brain tumour surgeries and advanced radiosurgery techniques, Dr. Gupta has transformed the lives of thousands of patients."
  },
  {
    name: "Dr. Ravi Bhatia",
    location: "New Delhi, India",
    hospital: "   Indraprastha Apollo Hospital, New Delhi",
    role: "Spine surgery",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-4.svg",
    desc: "Dr. Ravi Bhatia is a highly respected neurosurgeon with a remarkable 55-year career dedicated to advancing neurosurgical care. His experience encompasses a wide spectrum of complex neurosurgical procedures, offering specialised treatments and improved outcomes for patients."
  },
  {
    name: "Dr. Siddhartha Ghosh",
    location: "Chennai, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Spine surgery",
    exp: "34+ Year of experience",
    img: "/images/model-6-dr-5.svg",
    desc: "Dr. Siddhartha Ghosh is one of India’s most distinguished neurosurgeons, bringing over 40 years of unparalleled experience to his practice. He is renowned for performing over 20,000 successful neurosurgeries on the brain, spine, and peripheral nerves and is especially celebrated for his expertise in complex brain and spine tumour removal."
  },

   {
    name: "Dr. Rahul Bhargava ",
    location: "Gurgaon, India",
    hospital: "  Fortis Memorial Research Institute, Gurgaon",
    role: "Transplant surgery",
    exp: "24+ Year of experience",
    img: "/images/model-11-dr-1.png",
    desc: "Dr. Rahul Bhargava is a renowned Haematologist and Stem Cell Transplant specialist in India. With over 24 years of extensive experience, he has successfully performed over 1500 stem cell transplants, offering renewed hope and life-saving treatments to patients facing complex haematological conditions."
  },
   {
    name: "Dr. Ashish Dixit  ",
    location: "Bangalore, India",
    hospital: " Manipal Hospital (Old Airport Road) Bangalore",
    role: "Transplant surgery",
    exp: "30+ Year of experience",
    img: "/images/model-11-dr-2.png",
    desc: "Dr. Ashish Dixit is a renowned Haematologist with more than 30 years of expertise in Haemato-Oncology and Bone Marrow Transplantation. He has treated a wide range of benign and malignant haematological conditions, offering life-saving treatments and hope to countless patients."
  },
   {
    name: "Dr. Satya Prakash Yadav ",
    location: "Gurgaon, India",
    hospital: " Medanta - The Medicity, Gurgaon",
    role: "Transplant surgery",
    exp: "66+ Year of experience",
    img: "/images/model-11-dr-3.png",
    desc: "Dr. Satya Prakash Yadav is one the leading hematologists with specialization in the field of pediatrics and oncology with bone marrow transplant. With over 30 years of experience, he has carried out more than 400 blood marrow transplants, among which 50 were unrelated donor/cord transplants and 50 were haploidentical bone marrow transplants."
  },
   {
    name: "Dr. TPR Bharadwaj ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Transplant surgery",
    exp: "66+ Year of experience",
    img: "/images/model-11-dr-4.png",
    desc: "Dr. TPR Bharadwaj is a renowned Haematologist, with over 52 years of dedicated service and leadership in the field of Haematology. He has become a cornerstone of haematological care, providing expert diagnosis and treatment for a wide range of blood disorders."
  },
   {
    name: "Dr. Gaurav Dixit",
    location: "Gurgaon, India",
    hospital: " Artemis Hospital, Gurgaon",
    role: "Transplant surgery",
    exp: "66+ Year of experience",
    img: "/images/model-11-dr-5.png",
    desc: "Dr. Gaurav Dixit is a leading haematologist with over 15 years of experience in haemato-oncology. He is dedicated to providing outstanding care and innovative treatments for patients with blood disorders and is particularly known for his expertise in bone marrow transplantation and his commitment to improving patient lives."
  },

    {
    name: "Dr. Rakesh Mahajan",
    location: "mumbai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Vascular surgery",
    exp: "40+ Year of experience",
    img: "/images/model-12-dr-1.png",
    desc: " Dr. Rakesh Mahajan is a leading Orthopaedic and Joint Replacement Surgeon in India and a pioneer in advanced orthopaedic procedures. With over three decades of experience, Dr. Oberoi has successfully performed over 7,000 joint replacement surgeries with a remarkable 97% success rate, offering renewed mobility and improved quality of life to patients. He is renowned as one of the best ligament tear surgeons in India, specialising in complex knee ligament reconstruction."
  },

   {
    name: "Dr. Rajiv Parakh ",
    location: "bengglore, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Vascular surgery",
    exp: "50+ Year of experience",
    img: "/images/model-12-dr-2.png",
    desc: " Dr. Rajiv Parakh  is a renowned Orthopaedic Specialist in Gurgaon and a leading Joint Replacement Surgeon with over 29 years of experience. He is recognised for his expertise in minimally invasive, robot-assisted, and computer-navigated orthopaedic surgeries."
  },
   {
    name: "Dr. Manoj Miglani ",
    location: "Gurgaon, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Vascular surgery",
    exp: "29+ Year of experience",
    img: "/images/model-12-dr-3.png",
    desc: " Dr. Manoj Miglani is a senior consultant Orthopaedic Surgeon with extensive experience in performing a wide range of spinal and joint replacement surgeries, from the simple to the most complex. This renowned surgeon is highly regarded by his patients for his expertise and his approachable manner."
  },
   {
    name: "Dr. Suhail Naseem Bukhari ",
    location: "Chennai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Vascular surgery",
    exp: "26+ Year of experience",
    img: "/images/model-12-dr-4.png",
    desc: " Dr. Suhail Naseem Bukhari  is a well-known Orthopaedic and Joint Replacement Specialist in Chennai having more than 26 years of experience. He specialises in treating limited mobility in the knee, hips, elbow, shoulder, and other joints and is a top orthopaedic doctor for meniscus injuries in Chennai."
  },
   {
    name: "Dr. (Prof) Raju Vaishya",
    location: "delhi, India",
    hospital: "  Indraprastha Apollo Hospital, New Delhi",
    role: "Vascular surgery",
    exp: "34+ Year of experience",
    img: "/images/model-12-dr-5.png",
    desc: " Dr. (Prof) Raju Vaishya is a distinguished Orthopaedic and Joint Replacement Specialist in New Delhi, bringing over 42 years of expertise as a hip and knee replacement surgeon. He is a renowned expert in arthroscopic surgery and sports medicine."
  },

  {
    name: "Dr. Y K Mishra",
    location: "New Delhi, India",
    hospital: "Manipal Hospitals Dwarka, Delhi",
    role: "Urology treatment",
    exp: "44+ Year of experience",
    img: "/images/model-1-logo-1.svg",
    desc: "Dr. Y.K. Mishra is a distinguished Cardiac Surgeon, recognised as a pioneer in minimally invasive cardiac surgery in India."
  },
  {
    name: "Dr. T S Kler",
    location: "New Delhi, India",
    hospital: "BLK-Max Super Specialty Hospital, Delhi",
    role: "Urology treatment",
    exp: "48 Year of experience",
    img: "/images/model-1-doctor-2.svg",
    desc: "Dr. T.S. Kler is a renowned cardiologist and a pioneer in electrophysiology, revolutionising cardiac rhythm management in India."
  },
  {
    name: "Dr. Ajay Kaul",
    location: "Noida, India",
    hospital: "Fortis Hospital, Noida",
    role: "Urology treatment",
    exp: "38+ Year of experience",
    img: "/images/model-1-doc-3.svg",
    desc: "Dr. Ajay Kaul is recognised among the top cardiac surgeons in India, with more than 20,000 surgeries performed."
  },
  {
    name: "Dr. Naresh Trehan",
    location: "Gurgaon, India",
    hospital: "Medanta-The Medicity, Gurgaon",
    role: "Urology treatment",
    exp: "56+ Year of experience",
    img: "/images/model-1-doc-4.svg",
    desc: "Founder of Medanta, Dr. Naresh Trehan has performed over 48,000 cardiac surgeries with unmatched expertise."
  },
  {
    name: "Dr. Z S Meharwal",
    location: "New Delhi, India",
    hospital: "Fortis Escorts Health Institute, New Delhi",
    role: "Urology treatment",
    exp: "42+ Year of experience",
    img: "/images/model-1-doc-5.svg",
    desc: "Dr. Z.S. Meharwal has performed more than 30,000 cardiac surgeries and is regarded among the best bypass surgeons in India."
  },

  {name:"Dr. Anil Behl",
   location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute",
    role: "Routine check-up",
    exp: "48+ Year of experience",
    img: "/images/model-2-docr-1.svg",
    desc: "Dr. Z.S. Meharwal has performed more than 30,000 cardiac surgeries and is regarded among the best bypass surgeons in India."
  },

   {name:"Dr. Indrapati Singh",
   location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    role: "Routine check-up",
    exp: "57+ Year of experience",
    img: "/images/model-2-docr-2.svg",
    desc: "Dr. Indrapati Singh is a well-known and experienced Plastic Surgeon with a vast experience of 51 years in this field. Dr. Singh has performed many plastic surgical procedures with a high success rate. He is the founder member of the Aesthetic Society of India and is also a member of the Australasian Craniofacial Society. "
  },

   {name:"Dr. Vipul Nanda",
   location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute",
    role: "Routine check-up",
    exp: "31+ Year of experience",
    img: "/images/model-2-docr-3.svg",
    desc: "Dr. Vipul Nanda is one of India's best Plastic & Cosmetic Surgeons. He has 23 years of experience in his field. He did his MBBS & M.S. frM.S. AIIMS and M.Ch from PGI Chandigarh. He did his MRCS from the U.K. DU.K Nanda undertook advanced fellowships under world leaders in cosmetic and plastic surgery in Spain, Japan, U.K. U.K.A."
  },

   {name:"Dr.Senthil Kumaran",
   location: "Chennai, India",
    hospital: "MIOT International, Chennai",
    role: "Routine check-up",
    exp: "24+ Year of experience",
    img: "/images/model-2-docr-4.svg",
    desc: "Dr. Senthil Kumaran is a well-known Plastic Surgeon with more than 24 years of experience. His areas of expertise are hand and wrist surgery, limb reconstruction procedures, and developmental abnormality correction. He did MBBS in 2000 and MS (General Surgery) in 2003 from Coimbatore Medical College, Tamil Nadu."
  },

   {name:"Dr. Charu Sharma",
   location: "New Delhi, India",
    hospital: "Gorzeous Looks Cosmetic / Plastic Surgery & Hair Transplant Centre",
    role: "Routine check-up",
    exp: "56+ Year of experience",
    img: "/images/model-2-docr-5.svg",
    desc: "Dr. Charu Sharma is one of India's well-recognized Cosmetic and Plastic Surgeons with 28 years of experience. She is a known professional to provide unsurpassed care to her patients. She is dedicated to offering her patients the latest innovations in non-surgical and surgical procedures for face and body cosmetic surgery. She strongly believes in empowering her patients with facts about plastic surgery and answering any queries they may have before, during, or after a procedure."
  },

  {
    name: "Dr. Aruna Kalra ",
    location: "Gurgaon, India",
    hospital: " CK Birla Hospital, Gurgaon",
    role: "Rheumatology",
    exp: "28+ Year of experience",
    img: "/images/model-3-dr-1.svg",
    desc: "Dr. Aruna Kalra is a distinguished obstetrician, gynaecologist, and robotic surgeon with over three decades of experience. A champion of patient-centred care, she is renowned for her expertise in minimally invasive and scarless surgical techniques, enabling women to achieve optimal health."
  },

  {
    name: "Dr. Alka Kriplani ",
    location: "Gurgaon, India",
    hospital: " Paras Hospitals, Gurgaon",
    role: "Rheumatology",
    exp: "44+ Year of experience",
    img: "/images/model-3-dr-2.svg",
    desc: "Dr. Alka Kriplani is a distinguished gynaecologist, gyne-lap surgeon, and fertility expert with over 40 years of experience. A recipient of the Padma Shri, the fourth highest civilian award of India, Dr. Kriplani is a beacon of excellence in women's healthcare, renowned for her expertise, leadership, and dedication to advancing the field."
  },
  {
    name: "Dr. Aswati Nair",
    location: "New Delhi, India",
    hospital: "NOVA IVI Fertility, New Delhi",
    role: "Rheumatology",
    exp: "20+ Year of experience",
    img: "/images/model-3-dr-3.svg",
    desc: "Dr Aswati Nair is a well-known Infertility Specialist and Reproductive Health Specialist dedicated to helping couples achieve their dreams of parenthood. With 20 years of expertise, Dr Nair brings a wealth of knowledge and a compassionate approach to every patient’s journey."
  },
  {
    name: "Dr. Sulbha Arora",
    location: "Mumbai, India",
    hospital: "NOVA IVI Fertility, Mumbai",
    role: "Rheumatology",
    exp: "26+ Year of experience",
    img: "/images/model-3-dr-4.svg",
    desc: "Dr. Sulbha Arora is a distinguished Gynaecologist and Fertility Specialist with over 26 years of experience dedicated to IVF and Assisted Reproductive Technologies. Trained by pioneers in India and abroad, Dr Arora brings a wealth of knowledge and compassionate care to help individuals and couples achieve their dreams of parenthood."
  },
  {
    name: "Dr. Shakti Bhan Khanna ",
    location: "Noida, India",
    hospital: " Indraprastha Apollo Hospital, New Delhi",
    role: "Rheumatology",
    exp: "66+ Year of experience",
    img: "/images/model-3-dr-5.svg",
    desc: "Dr. Shakti Bhan Khanna is a highly respected Obstetrician and Gynaecologist in Delhi with an impressive six decades dedicated to women's health. A luminary in her field, Dr. Khanna is renowned for her clinical expertise, contributions to surgical innovation, and unwavering commitment to women's health across generations."
  },

   {
    name: "Dr. Rahul Bhargava ",
    location: "Gurgaon, India",
    hospital: "  Fortis Memorial Research Institute, Gurgaon",
    role: "Pulmonology",
    exp: "24+ Year of experience",
    img: "/images/model-4-dr-1.svg",
    desc: "Dr. Rahul Bhargava is a renowned Haematologist and Stem Cell Transplant specialist in India. With over 24 years of extensive experience, he has successfully performed over 1500 stem cell transplants, offering renewed hope and life-saving treatments to patients facing complex haematological conditions."
  },
   {
    name: "Dr. Ashish Dixit  ",
    location: "Bangalore, India",
    hospital: " Manipal Hospital (Old Airport Road) Bangalore",
    role: "Pulmonology",
    exp: "30+ Year of experience",
    img: "/images/model-4-dr-2.svg",
    desc: "Dr. Ashish Dixit is a renowned Haematologist with more than 30 years of expertise in Haemato-Oncology and Bone Marrow Transplantation. He has treated a wide range of benign and malignant haematological conditions, offering life-saving treatments and hope to countless patients."
  },
   {
    name: "Dr. Satya Prakash Yadav ",
    location: "Gurgaon, India",
    hospital: " Medanta - The Medicity, Gurgaon",
    role: "Pulmonology",
    exp: "66+ Year of experience",
    img: "/images/model-4-dr-3.svg",
    desc: "Dr. Satya Prakash Yadav is one the leading hematologists with specialization in the field of pediatrics and oncology with bone marrow transplant. With over 30 years of experience, he has carried out more than 400 blood marrow transplants, among which 50 were unrelated donor/cord transplants and 50 were haploidentical bone marrow transplants."
  },
   {
    name: "Dr. TPR Bharadwaj ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Pulmonology",
    exp: "66+ Year of experience",
    img: "/images/model-4-dr-4.png",
    desc: "Dr. TPR Bharadwaj is a renowned Haematologist, with over 52 years of dedicated service and leadership in the field of Haematology. He has become a cornerstone of haematological care, providing expert diagnosis and treatment for a wide range of blood disorders."
  },
   {
    name: "Dr. Gaurav Dixit",
    location: "Gurgaon, India",
    hospital: " Artemis Hospital, Gurgaon",
    role: "Pulmonology",
    exp: "66+ Year of experience",
    img: "/images/model-4-dr-5.svg",
    desc: "Dr. Gaurav Dixit is a leading haematologist with over 15 years of experience in haemato-oncology. He is dedicated to providing outstanding care and innovative treatments for patients with blood disorders and is particularly known for his expertise in bone marrow transplantation and his commitment to improving patient lives."
  },

  {
    name: "Dr. Sandeep Vaishya",
    location: "Gurgaon, India",
    hospital: " Fortis Memorial Research Institute, Gurgaon",
    role: "Endocrinology",
    exp: "38+ Year of experience",
    img: "/images/model-6-dr-1.svg",
    desc: "Dr. Sandeep Vaishya is a distinguished neurosurgeon with over 36 years of experience, recognised for his expertise in complex brain and spine surgeries. Having performed over 15,000 successful surgeries and treated patients from over 110 countries, Dr. Vaishya brings a world-class level of skill and dedication to his patients."
  },
  {
    name: "Dr. Sudhir Tyagi ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Endocrinology",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-2.svg",
    desc: "Dr. Sudhir Kumar Tyagi is a renowned Neurosurgeon in New Delhi with over 32 years of experience dedicated to providing cutting-edge neurosurgical care. With over 15,000 successful brain and spine surgeries to his credit, he brings unparalleled skill and precision to every procedure."
  },
  {
    name: "Dr. Aditya Gupta ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Endocrinology",
    exp: "50+ Year of experience",
    img: "/images/model-6-dr-3.svg",
    desc: "Dr. Aditya Gupta is a highly respected brain surgeon in India, bringing over 30 years of experience to his practice. Renowned for his expertise in complex brain tumour surgeries and advanced radiosurgery techniques, Dr. Gupta has transformed the lives of thousands of patients."
  },
  {
    name: "Dr. Ravi Bhatia",
    location: "New Delhi, India",
    hospital: "   Indraprastha Apollo Hospital, New Delhi",
    role: "Endocrinology",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-4.svg",
    desc: "Dr. Ravi Bhatia is a highly respected neurosurgeon with a remarkable 55-year career dedicated to advancing neurosurgical care. His experience encompasses a wide spectrum of complex neurosurgical procedures, offering specialised treatments and improved outcomes for patients."
  },
  {
    name: "Dr. Siddhartha Ghosh",
    location: "Chennai, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Endocrinology",
    exp: "34+ Year of experience",
    img: "/images/model-6-dr-5.svg",
    desc: "Dr. Siddhartha Ghosh is one of India’s most distinguished neurosurgeons, bringing over 40 years of unparalleled experience to his practice. He is renowned for performing over 20,000 successful neurosurgeries on the brain, spine, and peripheral nerves and is especially celebrated for his expertise in complex brain and spine tumour removal."
  },

  {
    name: "Dr. Vinod Raina",
    location: "Chennai, India",
    hospital: "  Fortis Memorial Research Institute, Gurgaon",
    role: "Dental Treatment",
    exp: "44+ Year of experience",
    img: "/images/model-7-dr-1.svg",
    desc: "Dr. Vinod Raina is one of India's foremost Medical Oncologists, bringing over 40 years of experience to the fight against cancer."
  },

  {
    name: "Dr. Ramesh Sarin ",
    location: "New Delhi, India",
    hospital: "  Indraprastha Apollo Hospital, New Delhi",
    role: "Dental Treatment",
    exp: "44+ Year of experience",
    img: "/images/model-7-dr-2.svg",
    desc: "Dr. Ramesh Sarin is a prominent Surgical Oncology Expert in New Delhi with an extraordinary career spanning over 40 years, dedicated to providing compassionate care and pioneering advancements in the fight against cancer."
  },
  {
    name: "Dr. Vikram Pratap Singh",
    location: "New Delhi",
    hospital: " Indraprastha Apollo Hospital, New Delhi",
    role: "Dental Treatment",
    exp: "64+ Year of experience",
    img: "/images/model-7-dr-3.svg",
    desc: "Dr. Vikram Pratap Singh is one of the best Surgical Oncologists in India, bringing over 50 years of experience to the field."
  },
  {
    name: "Dr. Kaustubh Patel",
    location: "Ahmedabad, India",
    hospital: " HCG Cancer Centre, Ahmedabad",
    role: "Dental Treatment",
    exp: "59+ Year of experience",
    img: "/images/model-7-dr-4.png",
    desc: "Dr. Kaustubh Patel is a highly experienced and certified Surgical Oncologist dedicated to providing cutting-edge care for patients with Head & Neck cancers. He is particularly recognised for his expertise in thyroid, parathyroid, and salivary gland surgeries, as well as advanced organ-preserving techniques for cancers of the mandible (jaw) and larynx (voice box), including TOLS (Trans Oral Laser Surgery) in complex situations."
  },
  {
    name: "Dr. Niranjan Naik",
    location: "Gurgaon, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Dental Treatment",
    exp: "27+ Year of experience",
    img: "/images/model-7-dr-5.svg",
    desc: "Dr. Niranjan Naik is a highly experienced surgical oncologist with over 27 years of expertise in cancer surgery. He is considered one of the best GI, Thoracic & Head and Neck Cancer Surgeons in India.."
  },

  {
    name: "Dr. Sabir Hussain Ansari ",
    location: "mumbai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "ENT Surgery",
    exp: "40+ Year of experience",
    img: "/images/model-19-dr-1.png",
    desc: " Dr. Sabir Hussain Ansari  is a leading Orthopaedic and Joint Replacement Surgeon in India and a pioneer in advanced orthopaedic procedures. With over three decades of experience, Dr. Oberoi has successfully performed over 7,000 joint replacement surgeries with a remarkable 97% success rate, offering renewed mobility and improved quality of life to patients. He is renowned as one of the best ligament tear surgeons in India, specialising in complex knee ligament reconstruction."
  },

   {
    name: "Dr. E.V. Raman ",
    location: "bengglore, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "ENT Surgery",
    exp: "50+ Year of experience",
    img: "/images/model-19-dr-2.png",
    desc: " Dr. E.V. Raman  is a renowned Orthopaedic Specialist in Gurgaon and a leading Joint Replacement Surgeon with over 29 years of experience. He is recognised for his expertise in minimally invasive, robot-assisted, and computer-navigated orthopaedic surgeries."
  },
   {
    name: "Dr. Sanjay Kumar Gudwani ",
    location: "Gurgaon, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "ENT Surgery",
    exp: "29+ Year of experience",
    img: "/images/model-19-dr-3.png",
    desc: " Dr. Sanjay Kumar Gudwani is a senior consultant Orthopaedic Surgeon with extensive experience in performing a wide range of spinal and joint replacement surgeries, from the simple to the most complex. This renowned surgeon is highly regarded by his patients for his expertise and his approachable manner."
  },
   {
    name: "Dr. Atul Kumar Mittal",
    location: "Chennai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "ENT Surgery",
    exp: "25+ Year of experience",
    img: "/images/model-19-dr-4.png",
    desc: " Dr. Atul Kumar Mittal is a well-known Orthopaedic and Joint Replacement Specialist in Chennai having more than 26 years of experience. He specialises in treating limited mobility in the knee, hips, elbow, shoulder, and other joints and is a top orthopaedic doctor for meniscus injuries in Chennai."
  },
   {
    name: "Dr. P. L. Dhingra ",
    location: "delhi, India",
    hospital: "  Indraprastha Apollo Hospital, New Delhi",
    role: "ENT Surgery",
    exp: "34+ Year of experience",
    img: "/images/model-19-dr-5.png",
    desc: " Dr. P. L. Dhingra  is a distinguished Orthopaedic and Joint Replacement Specialist in New Delhi, bringing over 42 years of expertise as a hip and knee replacement surgeon. He is a renowned expert in arthroscopic surgery and sports medicine."
  },


   {
    name: "Dr. Ravichandran G ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Gastroentrology",
    exp: "38+ Year of experience",
    img: "/images/model-20-dr-1.png",
    desc: "Dr. Ravichandran G is a dermatologist with 32+ years of experience. He specializes in treating Vitiligo and has conducted more than 2000 operations. He is a member of IADVL, Association of Cutaneous Surgeons India, Indian Medical Association and Indian Association of Dermatologists."
  },
   {
    name: "Dr. Murlidhar Rajagopalan ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Gastroentrology",
    exp: "30+ Year of experience",
    img: "/images/model-20-dr-2.png",
    desc: "Dr. Murlidhar Rajagopalan is a dermatologist with 30+ years of experience. He is a member of Tamil Nadu Medical Council; Indian Association of Dermatologists, Venereologists and Leprologists (IADVL); INT Member EADV and INT Member EAACI. He has expertise in skin checks, skin care, hardening of the skin and Skin Polishing."
  },
   {
    name: "Dr. Jyotirmay Bharti",
    location: "Gurgaon, India",
    hospital: " Marengo Asia Hospitals Formerly W Pratiksha Hospital, Gurgaon",
    role: "Gastroentrology",
    exp: "38+ Year of experience",
    img: "/images/model-20-dr-4.png",
    desc: "Dr. Jyotirmay Bharti is an eminent Dermatologist, Cosmetologist & Hair Transplant Surgeon. She is an active member of the Cosmetology Society of India (CSI), International Society of Dermatology.  Indian Academy of Dermatology, Venereology & Leprologist. and the American Academy of Dermatology. Dr. Bharti has expertise over the Dermatology, Venereology & Leprosy. "
  },
   {
    name: "Dr. Anil K. Agarwal",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Gastroentrology",
    exp: "25+ Year of experience",
    img: "/images/model-20-dr-3.png",
    desc: "Dr. Anil K. Agarwal is a dermatologist with 32+ years of experience. He specializes in treating Vitiligo and has conducted more than 2000 operations. He is a member of IADVL, Association of Cutaneous Surgeons India, Indian Medical Association and Indian Association of Dermatologists."
  },
   {
    name: "Dr. Pooja Aggarwal ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Gastroentrology",
    exp: "30+ Year of experience",
    img: "/images/model-20-dr-5.png",
    desc: "Dr. Pooja Aggarwal is a well-established dermatologist, trichologist, dermatosurgeon and cosmetologist with an experience of 9 years. She deals with all kinds of skin, hair and nail issues.  She has successfully managed extremely difficult cases of clinical dermatology. Dr. Pooja has attended numerous seminars and conferences globally to keep herself updated with latest developments of the field. She is actively involved in Clinical Research and has presented her studies in national and international conferences of several esteemed Medical Associations. She did her MBBS from College of Medical Sciences, Bharatpur, Nepal,MD in Dermatology, Leprosy and Venereology from AIIMS, New Delhi and training from AIIMS."
  },

  {
    name: "Dr. Manoj Miglani ",
    location: "Gurgaon, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Nephrology",
    exp: "29+ Year of experience",
    img: "/images/model-8-dr-3.svg.png",
    desc: " Dr. Manoj Miglani is a senior consultant Orthopaedic Surgeon with extensive experience in performing a wide range of spinal and joint replacement surgeries, from the simple to the most complex. This renowned surgeon is highly regarded by his patients for his expertise and his approachable manner."
  },
   {
    name: "Dr. Billy Paul Wilson",
    location: "Chennai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Nephrology",
    exp: "25+ Year of experience",
    img: "/images/model-8-dr-4.svg.png",
    desc: " Dr. Billy Paul Wilson is a well-known Orthopaedic and Joint Replacement Specialist in Chennai having more than 26 years of experience. He specialises in treating limited mobility in the knee, hips, elbow, shoulder, and other joints and is a top orthopaedic doctor for meniscus injuries in Chennai."
  },
   {
    name: "Dr. (Prof) Raju Vaishya",
    location: "delhi, India",
    hospital: "  Indraprastha Apollo Hospital, New Delhi",
    role: "Nephrology",
    exp: "34+ Year of experience",
    img: "/images/model-8-dr-5.png",
    desc: " Dr. (Prof) Raju Vaishya is a distinguished Orthopaedic and Joint Replacement Specialist in New Delhi, bringing over 42 years of expertise as a hip and knee replacement surgeon. He is a renowned expert in arthroscopic surgery and sports medicine."
  },


   {
    name: "Dr. Ravichandran G ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Nephrology",
    exp: "38+ Year of experience",
    img: "/images/model-9-dr-1.png",
    desc: "Dr. Ravichandran G is a dermatologist with 32+ years of experience. He specializes in treating Vitiligo and has conducted more than 2000 operations. He is a member of IADVL, Association of Cutaneous Surgeons India, Indian Medical Association and Indian Association of Dermatologists."
  },
   {
    name: "Dr. Murlidhar Rajagopalan ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Nephrology",
    exp: "30+ Year of experience",
    img: "/images/model-9-dr-2.png",
    desc: "Dr. Murlidhar Rajagopalan is a dermatologist with 30+ years of experience. He is a member of Tamil Nadu Medical Council; Indian Association of Dermatologists, Venereologists and Leprologists (IADVL); INT Member EADV and INT Member EAACI. He has expertise in skin checks, skin care, hardening of the skin and Skin Polishing."
  },
   {
    name: "Dr. Jyotirmay Bharti",
    location: "Gurgaon, India",
    hospital: " Marengo Asia Hospitals Formerly W Pratiksha Hospital, Gurgaon",
    role: "Hepatology",
    exp: "38+ Year of experience",
    img: "/images/model-9-dr-4.png",
    desc: "Dr. Jyotirmay Bharti is an eminent Dermatologist, Cosmetologist & Hair Transplant Surgeon. She is an active member of the Cosmetology Society of India (CSI), International Society of Dermatology.  Indian Academy of Dermatology, Venereology & Leprologist. and the American Academy of Dermatology. Dr. Bharti has expertise over the Dermatology, Venereology & Leprosy. "
  },
   {
    name: "Dr. Anil K. Agarwal",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Hepatology",
    exp: "25+ Year of experience",
    img: "/images/model-9-dr-3.png",
    desc: "Dr. Anil K. Agarwal is a dermatologist with 32+ years of experience. He specializes in treating Vitiligo and has conducted more than 2000 operations. He is a member of IADVL, Association of Cutaneous Surgeons India, Indian Medical Association and Indian Association of Dermatologists."
  },
   {
    name: "Dr. Pooja Aggarwal ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Hepatology",
    exp: "30+ Year of experience",
    img: "/images/model-9-dr-5.png",
    desc: "Dr. Pooja Aggarwal is a well-established dermatologist, trichologist, dermatosurgeon and cosmetologist with an experience of 9 years. She deals with all kinds of skin, hair and nail issues.  She has successfully managed extremely difficult cases of clinical dermatology. Dr. Pooja has attended numerous seminars and conferences globally to keep herself updated with latest developments of the field. She is actively involved in Clinical Research and has presented her studies in national and international conferences of several esteemed Medical Associations. She did her MBBS from College of Medical Sciences, Bharatpur, Nepal,MD in Dermatology, Leprosy and Venereology from AIIMS, New Delhi and training from AIIMS."
  },

   {
    name: "Dr. Sandeep Vaishya",
    location: "Gurgaon, India",
    hospital: " Fortis Memorial Research Institute, Gurgaon",
    role: "Hepatology",
    exp: "38+ Year of experience",
    img: "/images/model-6-dr-1.svg",
    desc: "Dr. Sandeep Vaishya is a distinguished neurosurgeon with over 36 years of experience, recognised for his expertise in complex brain and spine surgeries. Having performed over 15,000 successful surgeries and treated patients from over 110 countries, Dr. Vaishya brings a world-class level of skill and dedication to his patients."
  },
  {
    name: "Dr. Sudhir Tyagi ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Hepatology",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-2.svg",
    desc: "Dr. Sudhir Kumar Tyagi is a renowned Neurosurgeon in New Delhi with over 32 years of experience dedicated to providing cutting-edge neurosurgical care. With over 15,000 successful brain and spine surgeries to his credit, he brings unparalleled skill and precision to every procedure."
  },
  {
    name: "Dr. Aditya Gupta ",
    location: "Gurgaon, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Opthalmology",
    exp: "50+ Year of experience",
    img: "/images/model-6-dr-3.svg",
    desc: "Dr. Aditya Gupta is a highly respected brain surgeon in India, bringing over 30 years of experience to his practice. Renowned for his expertise in complex brain tumour surgeries and advanced radiosurgery techniques, Dr. Gupta has transformed the lives of thousands of patients."
  },
  {
    name: "Dr. Ravi Bhatia",
    location: "New Delhi, India",
    hospital: "   Indraprastha Apollo Hospital, New Delhi",
    role: "Opthalmology",
    exp: "44+ Year of experience",
    img: "/images/model-6-dr-4.svg",
    desc: "Dr. Ravi Bhatia is a highly respected neurosurgeon with a remarkable 55-year career dedicated to advancing neurosurgical care. His experience encompasses a wide spectrum of complex neurosurgical procedures, offering specialised treatments and improved outcomes for patients."
  },
  {
    name: "Dr. Siddhartha Ghosh",
    location: "Chennai, India",
    hospital: "  Apollo Fertility Center, Lajpat Nagar",
    role: "Opthalmology",
    exp: "34+ Year of experience",
    img: "/images/model-6-dr-5.svg",
    desc: "Dr. Siddhartha Ghosh is one of India’s most distinguished neurosurgeons, bringing over 40 years of unparalleled experience to his practice. He is renowned for performing over 20,000 successful neurosurgeries on the brain, spine, and peripheral nerves and is especially celebrated for his expertise in complex brain and spine tumour removal."
  },

   {
    name: "Dr. Rahul Bhargava ",
    location: "Gurgaon, India",
    hospital: "  Fortis Memorial Research Institute, Gurgaon",
    role: "Opthalmology",
    exp: "24+ Year of experience",
    img: "/images/model-11-dr-1.png",
    desc: "Dr. Rahul Bhargava is a renowned Haematologist and Stem Cell Transplant specialist in India. With over 24 years of extensive experience, he has successfully performed over 1500 stem cell transplants, offering renewed hope and life-saving treatments to patients facing complex haematological conditions."
  },
   {
    name: "Dr. Ashish Dixit  ",
    location: "Bangalore, India",
    hospital: " Manipal Hospital (Old Airport Road) Bangalore",
    role: "Opthalmology",
    exp: "30+ Year of experience",
    img: "/images/model-11-dr-2.png",
    desc: "Dr. Ashish Dixit is a renowned Haematologist with more than 30 years of expertise in Haemato-Oncology and Bone Marrow Transplantation. He has treated a wide range of benign and malignant haematological conditions, offering life-saving treatments and hope to countless patients."
  },
   {
    name: "Dr. Satya Prakash Yadav ",
    location: "Gurgaon, India",
    hospital: " Medanta - The Medicity, Gurgaon",
    role: "Pediatric cardiology",
    exp: "66+ Year of experience",
    img: "/images/model-11-dr-3.png",
    desc: "Dr. Satya Prakash Yadav is one the leading hematologists with specialization in the field of pediatrics and oncology with bone marrow transplant. With over 30 years of experience, he has carried out more than 400 blood marrow transplants, among which 50 were unrelated donor/cord transplants and 50 were haploidentical bone marrow transplants."
  },
   {
    name: "Dr. TPR Bharadwaj ",
    location: "Chennai, India",
    hospital: " Apollo Hospitals, Greams Road, Chennai",
    role: "Pediatric cardiology",
    exp: "66+ Year of experience",
    img: "/images/model-11-dr-4.png",
    desc: "Dr. TPR Bharadwaj is a renowned Haematologist, with over 52 years of dedicated service and leadership in the field of Haematology. He has become a cornerstone of haematological care, providing expert diagnosis and treatment for a wide range of blood disorders."
  },
   {
    name: "Dr. Gaurav Dixit",
    location: "Gurgaon, India",
    hospital: " Artemis Hospital, Gurgaon",
    role: "Pediatric cardiology",
    exp: "66+ Year of experience",
    img: "/images/model-11-dr-5.png",
    desc: "Dr. Gaurav Dixit is a leading haematologist with over 15 years of experience in haemato-oncology. He is dedicated to providing outstanding care and innovative treatments for patients with blood disorders and is particularly known for his expertise in bone marrow transplantation and his commitment to improving patient lives."
  },

    {
    name: "Dr. Rakesh Mahajan",
    location: "mumbai, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Pediatric cardiology",
    exp: "40+ Year of experience",
    img: "/images/model-12-dr-1.png",
    desc: " Dr. Rakesh Mahajan is a leading Orthopaedic and Joint Replacement Surgeon in India and a pioneer in advanced orthopaedic procedures. With over three decades of experience, Dr. Oberoi has successfully performed over 7,000 joint replacement surgeries with a remarkable 97% success rate, offering renewed mobility and improved quality of life to patients. He is renowned as one of the best ligament tear surgeons in India, specialising in complex knee ligament reconstruction."
  },

   {
    name: "Dr. Rajiv Parakh ",
    location: "bengglore, India",
    hospital: "   Fortis Memorial Research Institute, Gurgaon",
    role: "Pediatric cardiology",
    exp: "50+ Year of experience",
    img: "/images/model-12-dr-2.png",
    desc: " Dr. Rajiv Parakh  is a renowned Orthopaedic Specialist in Gurgaon and a leading Joint Replacement Surgeon with over 29 years of experience. He is recognised for his expertise in minimally invasive, robot-assisted, and computer-navigated orthopaedic surgeries."
  },
   



];

const container = document.getElementById("doctorCards");
const exploreBtns = document.querySelectorAll(".explore-btn");

exploreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const speciality = btn.getAttribute("data-speciality"); // Get which type of doctor
    const filteredDocs = doctors.filter(doc => doc.role === speciality);

    container.innerHTML = filteredDocs.map(doc => `
    <div class="col-md-6 col-lg-4 d-flex">
  <div class="card profile-card flex-fill text-center p-3">
    <img src="${doc.img}" alt="${doc.name}" class="profile-img mb-3"/>
    <h5 class="card-title">${doc.name} 
      <span class="text-success"><i class="fas fa-check-circle"></i></span>
    </h5>
    <p class="text-muted mb-1">${doc.location}</p>
    <p><i class="fas fa-hospital"></i> ${doc.hospital}</p>
    <p><i class="fas fa-user-md"></i> ${doc.role}</p>
    <p><i class="fas fa-star"></i> ${doc.exp}</p>
    <p class="card-text small flex-grow-1">${doc.desc}</p>
    <div class="d-flex justify-content-center flex-wrap gap-2 mt-3">
      <a href="#" class="btn book-btn">Book Appointment</a>
      <a href="#" class="btn whatsapp-btn"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
    </div>
  </div>
</div>

    `).join("");
  });
});