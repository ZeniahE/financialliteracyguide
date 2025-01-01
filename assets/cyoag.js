let age = 18;
let money = 0;
let salary = 0;
let hasJob = false;
const ageCounter = document.getElementById("age-counter");
const moneyCounter = document.getElementById("money-counter");
const salaryCounter = document.getElementById("salary-counter");
const storyElement = document.getElementById("story");
const choicesContainer = document.querySelector(".choices");

function darkenColor() {
  const lightness = 94 - (age - 18) * 5;
  const newColor = `hsl(0, 0%, ${Math.max(lightness, 20)}%)`;
  ageCounter.style.backgroundColor = newColor;
}

function manageFinances() {
  if (!hasJob) return;

  const expenses = Math.floor(salary * 0.3); // 30% of salary as expenses
  money -= expenses;
  alert(
    `Your yearly expenses are $${expenses}. Your remaining money is $${money}.`
  );

  const choices = prompt(
    "How would you like to allocate your money?\n1. Save\n2. Invest\n3. Make a Purchase",
    "1"
  );

  switch (choices) {
    case "1":
      alert("You saved a portion of your money.");
      break;
    case "2":
      alert("You invested in stocks and mutual funds.");
      break;
    case "3":
      alert("You made a purchase to improve your quality of life.");
      break;
    default:
      alert("No action taken.");
  }
}

function applyScholarship() {
  const scholarship = Math.floor(Math.random() * 5000) + 1000; // Scholarship amount between $1000-$6000
  money += scholarship;
  alert(
    `Congratulations! You received a scholarship of $${scholarship}. Your current money is $${money}.`
  );
}

function makeChoice(choice) {
  age++;
  darkenColor();
  ageCounter.textContent = `Age: ${age}`;

  if (choice === "Go to college") {
    storyElement.textContent =
      "You chose to pursue higher education. What major will you choose?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Computer Science')">Computer Science</button>
                    <button onclick="makeChoice('Business')">Business</button>
                    <button onclick="makeChoice('Art')">Art</button>
                    <button onclick="applyScholarship()">Apply for a Scholarship</button>
                `;
  } else if (choice === "Computer Science") {
    storyElement.textContent =
      "You majored in Computer Science. What kind of job will you pursue after graduation?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Software Developer')">Software Developer</button>
                    <button onclick="makeChoice('Data Analyst')">Data Analyst</button>
                    <button onclick="makeChoice('Cybersecurity Expert')">Cybersecurity Expert</button>
                `;
  } else if (choice === "Software Developer") {
    salary = 90000;
    hasJob = true;
    storyElement.textContent =
      "You became a Software Developer. How will you advance your career?";
    choicesContainer.innerHTML = `
                      <button onclick="makeChoice('Seek a Promotion')">Seek a Promotion</button>
                      <button onclick="makeChoice('Start a Side Project')">Start a Side Project</button>
                      <button onclick="makeChoice('Learn New Technologies')">Learn New Technologies</button>
                      <button onclick="makeChoice('Contribute to Open Source')">Contribute to Open Source</button>
                  `;
  } else if (choice === "Seek a Promotion") {
    alert("Your boss said you deserve it! Your salary increased by 3%.");
    salary *= 1.03;
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Start a Side Project") {
    alert("Your project didn'r go as planned. You lost $10,000.");
    money -= 10000;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Learn New Technologies") {
    alert(
      "You learned cutting-edge technologies! You become a highly sought-after developer."
    );
    salary += 20000; // Increased salary from learning new tech
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Contribute to Open Source") {
    alert(
      "Your contributions to open-source projects get you noticed by top tech companies!"
    );
    salary += 25000; // Increased salary from open-source contributions
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Buy a Car") {
    if (money >= 20000) {
      money -= 20000;
      alert("You bought a car for $20,000.");
    } else {
      alert("You don’t have enough money to buy a car.");
    }
    moneyCounter.textContent = `Money: $${money}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Data Analyst") {
    salary = 75000;
    hasJob = true;
    storyElement.textContent =
      "You became a Data Analyst. How will you grow in your field?";
    choicesContainer.innerHTML = `
                      <button onclick="makeChoice('Learn Advanced Tools')">Learn Advanced Tools</button>
                      <button onclick="makeChoice('Apply for Senior Roles')">Apply for Senior Roles</button>
                      <button onclick="makeChoice('Build a Data Portfolio')">Build a Data Portfolio</button>
                      <button onclick="makeChoice('Offer Consulting Services')">Offer Consulting Services</button>
                  `;
  } else if (choice === "Build a Data Portfolio") {
    alert(
      "You built a strong portfolio of data analysis projects. Potential clients and employers are impressed."
    );
    salary += 15000; // Increased salary due to portfolio
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Offer Consulting Services") {
    alert(
      "Your consulting services are in demand! You land high-paying contracts."
    );
    salary += 20000; // Boost in salary from consulting
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Buy a House") {
    if (money >= 200000) {
      money -= 200000;
      alert("You bought a house for $200,000.");
    } else {
      alert("You don’t have enough money to buy a house.");
    }
    moneyCounter.textContent = `Money: $${money}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Cybersecurity Expert") {
    salary = 85000;
    hasJob = true;
    storyElement.textContent =
      "You became a Cybersecurity Expert. What will you focus on next?";
    choicesContainer.innerHTML = `
                      <button onclick="makeChoice('Specialize in Threat Analysis')">Specialize in Threat Analysis</button>
                      <button onclick="makeChoice('Develop Security Solutions')">Develop Security Solutions</button>
                      <button onclick="makeChoice('Offer Penetration Testing Services')">Offer Penetration Testing Services</button>
                      <button onclick="makeChoice('Start a Cybersecurity Firm')">Start a Cybersecurity Firm</button>
                  `;
  } else if (choice === "Offer Penetration Testing Services") {
    alert(
      "You offer penetration testing services to large corporations, helping them identify vulnerabilities."
    );
    salary += 30000; // Boost in salary from offering services
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Start a Cybersecurity Firm") {
    alert(
      "You start your own cybersecurity firm. Your business thrives as demand for cybersecurity grows."
    );
    salary += 50000; // Huge salary boost from starting a firm
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Business") {
    storyElement.textContent =
      "You majored in Business. What kind of career will you start?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Entrepreneur')">Entrepreneur</button>
                    <button onclick="makeChoice('Consultant')">Consultant</button>
                    <button onclick="makeChoice('Marketing Specialist')">Marketing Specialist</button>
                `;
  } else if (choice === "Invest in Insurance") {
    const insuranceCost = 5000;
    if (money >= insuranceCost) {
      money -= insuranceCost;
      alert(`You bought insurance for $${insuranceCost}.`);
    } else {
      alert("You don’t have enough money to buy insurance.");
    }
    moneyCounter.textContent = `Money: $${money}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Entrepreneur") {
    salary = 60000;
    hasJob = true;
    storyElement.textContent =
      "You started your own business. What will you prioritize?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Expand the Business')">Expand the Business</button>
                    <button onclick="makeChoice('Seek Investments')">Seek Investments</button>
                    <button onclick="makeChoice('Build an Online Presence')">Build an Online Presence</button>
                    <button onclick="makeChoice('Hire Employees')">Hire Employees</button>
                `;
  } else if (choice === "Expand the Business") {
    money -= 20000; // Expansion cost
    if (money < 0) {
      alert("You don’t have enough money to expand your business.");
      money += 20000; // Revert back
    } else {
      alert(
        "Your business expanded! You gain new clients and potential profits."
      );
      salary += 20000; // Increase in salary due to business growth
    }
    moneyCounter.textContent = `Money: $${money}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Seek Investments") {
    const investmentAmount = Math.floor(Math.random() * 50000) + 20000;
    money += investmentAmount;
    alert(
      `You secured an investment of $${investmentAmount}. Your current money is $${money}.`
    );
    moneyCounter.textContent = `Money: $${money}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Build an Online Presence") {
    alert(
      "Your social media presence grows! You attract more customers and opportunities."
    );
    salary += 15000; // Boost in salary due to increased visibility
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Hire Employees") {
    const hiringCost = 10000;
    if (money >= hiringCost) {
      money -= hiringCost;
      alert(
        "You hired employees to help with business operations. This will help you scale faster."
      );
      salary += 25000; // Increased salary due to more employees
    } else {
      alert("You don’t have enough money to hire employees.");
    }
    moneyCounter.textContent = `Money: $${money}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Consultant") {
    salary = 70000;
    hasJob = true;
    storyElement.textContent =
      "You became a Consultant. How will you attract more clients?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Build a Personal Brand')">Build a Personal Brand</button>
                    <button onclick="makeChoice('Network Extensively')">Network Extensively</button>
                    <button onclick="makeChoice('Offer Workshops')">Offer Workshops</button>
                    <button onclick="makeChoice('Specialize in a Niche')">Specialize in a Niche</button>
                `;
  } else if (choice === "Build a Personal Brand") {
    alert(
      "Your personal brand gains traction! You secure more high-paying clients."
    );
    salary += 20000; // Increase in salary due to brand recognition
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Network Extensively") {
    alert(
      "Networking opens up new opportunities! You gain more clients and grow your business."
    );
    salary += 15000; // Increase in salary due to networking success
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Offer Workshops") {
    alert(
      "You start offering workshops. Your reputation as an expert increases."
    );
    salary += 10000; // Additional income from workshops
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Specialize in a Niche") {
    alert(
      "You became known for your niche expertise, allowing you to charge premium rates."
    );
    salary += 30000; // Increased salary from niche specialization
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Marketing Specialist") {
    salary = 55000;
    hasJob = true;
    storyElement.textContent =
      "You became a Marketing Specialist. What strategy will you focus on?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Digital Marketing')">Digital Marketing</button>
                    <button onclick="makeChoice('Market Research')">Market Research</button>
                    <button onclick="makeChoice('Content Creation')">Content Creation</button>
                    <button onclick="makeChoice('Develop Campaigns')">Develop Campaigns</button>
                `;
  } else if (choice === "Digital Marketing") {
    alert(
      "Your digital marketing efforts pay off! You bring in more clients and higher revenue."
    );
    salary += 20000; // Increase in salary due to successful digital marketing campaigns
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Market Research") {
    alert(
      "Your market research leads to more effective strategies for your clients."
    );
    salary += 15000; // Increase in salary from market research expertise
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Content Creation") {
    alert(
      "You create viral content for clients, boosting their brand awareness."
    );
    salary += 10000; // Increase in salary due to content creation success
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Develop Campaigns") {
    alert(
      "Your campaigns bring impressive results, making your clients highly satisfied."
    );
    salary += 25000; // Increase in salary due to successful campaigns
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Art") {
    storyElement.textContent =
      "You majored in Art. How will you start your career?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Freelance Artist')">Freelance Artist</button>
                    <button onclick="makeChoice('Gallery Assistant')">Gallery Assistant</button>
                    <button onclick="makeChoice('Animator')">Animator</button>
                `;
  } else if (choice === "Freelance Artist") {
    salary = 40000;
    hasJob = true;
    storyElement.textContent =
      "You became a Freelance Artist. What will you focus on?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Build an Online Store')">Build an Online Store</button>
                    <button onclick="makeChoice('Offer Workshops')">Offer Workshops</button>
                    <button onclick="makeChoice('Create Merchandise')">Create Merchandise</button>
                `;
  } else if (choice === "Build an Online Store") {
    alert(
      "Your online store takes off! You begin earning additional income from art sales."
    );
    salary += 15000; // Extra income from online sales
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Offer Workshops") {
    alert("Your art workshops attract a growing following.");
    salary += 10000; // Income from workshops
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Create Merchandise") {
    alert(
      "You start selling merchandise with your art on it. Your income increases."
    );
    salary += 20000; // Extra income from merchandise sales
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Gallery Assistant") {
    salary = 35000;
    hasJob = true;
    storyElement.textContent =
      "You became a Gallery Assistant. How will you advance your career?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Curate Exhibits')">Curate Exhibits</button>
                    <button onclick="makeChoice('Network with Artists')">Network with Artists</button>
                    <button onclick="makeChoice('Open Your Own Gallery')">Open Your Own Gallery</button>
                `;
  } else if (choice === "Curate Exhibits") {
    alert(
      "Your exhibit curation skills shine! You become known in the art community."
    );
    salary += 10000; // Increase in salary from curating exhibits
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Network with Artists") {
    alert(
      "You make connections with top artists. Your career prospects improve."
    );
    salary += 15000; // Boost in salary from networking
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Open Your Own Gallery") {
    alert("You open your own gallery and start selling art.");
    salary += 20000; // Increased salary from owning a gallery
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Animator") {
    salary = 60000;
    hasJob = true;
    storyElement.textContent =
      "You became an Animator. What kind of projects will you work on?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Feature Films')">Feature Films</button>
                    <button onclick="makeChoice('Video Games')">Video Games</button>
                    <button onclick="makeChoice('Create Animated Shorts')">Create Animated Shorts</button>
                    <button onclick="makeChoice('Start an Animation Studio')">Start an Animation Studio</button>
                `;
  } else if (choice === "Feature Films") {
    alert(
      "You work on feature films and gain recognition in the animation industry."
    );
    salary += 30000; // Increased salary due to feature film success
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Video Games") {
    alert(
      "You work on animated characters for video games. Your work becomes highly popular."
    );
    salary += 20000; // Salary increase from video game work
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Create Animated Shorts") {
    alert("You create viral animated shorts and grow a large following.");
    salary += 15000; // Extra income from animated shorts
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Start an Animation Studio") {
    alert("You start your own animation studio and hire a team.");
    salary += 50000; // Huge salary boost from starting a studio
    salaryCounter.textContent = `Salary: $${salary}`;
    storyElement.textContent = "What would you like to do next?";
  } else if (choice === "Start working") {
    storyElement.textContent =
      "You chose to start working. What kind of job will you look for?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Retail Job')">Retail Job</button>
                    <button onclick="makeChoice('Construction Work')">Construction Work</button>
                    <button onclick="makeChoice('Start an Apprenticeship')">Start an Apprenticeship</button>
                    <button onclick="makeChoice('Freelance Work')">Freelance Work</button>
                `;
  } else if (choice === "Retail Job") {
    salary = 25000;
    hasJob = true;
    storyElement.textContent =
      "You started a job in retail. How will you manage your income?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Save for College')">Save for College</button>
                    <button onclick="makeChoice('Invest in Skills')">Invest in Skills</button>
                    <button onclick="makeChoice('Upgrade Lifestyle')">Upgrade Lifestyle</button>
                `;
  } else if (choice === "Construction Work") {
    salary = 40000;
    hasJob = true;
    storyElement.textContent =
      "You started working in construction. What's your next step?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Learn Specialized Skills')">Learn Specialized Skills</button>
                    <button onclick="makeChoice('Save for a Truck')">Save for a Truck</button>
                    <button onclick="makeChoice('Network for Better Contracts')">Network for Better Contracts</button>
                `;
  } else if (choice === "Start an Apprenticeship") {
    salary = 35000;
    hasJob = true;
    storyElement.textContent =
      "You joined an apprenticeship program. What will you focus on?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Master Your Trade')">Master Your Trade</button>
                    <button onclick="makeChoice('Start a Side Hustle')">Start a Side Hustle</button>
                    <button onclick="makeChoice('Plan Your Own Business')">Plan Your Own Business</button>
                `;
  } else if (choice === "Freelance Work") {
    salary = 30000;
    hasJob = true;
    storyElement.textContent =
      "You started freelancing. How will you expand your career?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Build a Portfolio')">Build a Portfolio</button>
                    <button onclick="makeChoice('Network for Clients')">Network for Clients</button>
                    <button onclick="makeChoice('Invest in Equipment')">Invest in Equipment</button>
                `;
  } else if (choice === "Save for College") {
    money += 5000; // Savings added
    storyElement.textContent =
      "You saved $5000 for college. What's your next goal?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Apply for Scholarships')">Apply for Scholarships</button>
                    <button onclick="makeChoice('Go to college')">Start College</button>
                    <button onclick="makeChoice('Continue Working')">Continue Working</button>
                `;
  } else if (choice === "Invest in Skills") {
    salary += 5000; // Skill investment raises salary
    storyElement.textContent =
      "You invested in learning new skills. Your salary increased! What's next?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Apply for a Promotion')">Apply for a Promotion</button>
                    <button onclick="makeChoice('Start a Side Hustle')">Start a Side Hustle</button>
                    <button onclick="makeChoice('Change Career Path')">Change Career Path</button>
                `;
  } else if (choice === "Upgrade Lifestyle") {
    money -= 3000; // Lifestyle upgrade costs money
    storyElement.textContent =
      "You upgraded your lifestyle and bought better clothes and gadgets. What will you do next?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Plan a Vacation')">Plan a Vacation</button>
                    <button onclick="makeChoice('Save for a House')">Save for a House</button>
                    <button onclick="makeChoice('Focus on Career Growth')">Focus on Career Growth</button>
                `;
  } else if (choice === "Learn Specialized Skills") {
    salary += 10000; // Specialized skills lead to better pay
    storyElement.textContent =
      "You learned specialized skills. Your earning potential increased! What's your next step?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Save for a Certification')">Save for a Certification</button>
                    <button onclick="makeChoice('Move to a Higher-Paying City')">Move to a Higher-Paying City</button>
                    <button onclick="makeChoice('Invest in Tools')">Invest in Tools</button>
                `;
  } else if (choice === "Save for a Truck") {
    money -= 15000; // Truck purchase
    storyElement.textContent =
      "You saved enough and bought a truck for work. This will help you take on better contracts. What's next?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Focus on Contracting')">Focus on Contracting</button>
                    <button onclick="makeChoice('Plan for a Business')">Plan for a Business</button>
                    <button onclick="makeChoice('Hire an Assistant')">Hire an Assistant</button>
                `;
  } else if (choice === "Network for Better Contracts") {
    salary += 8000; // Networking improves contracts and salary
    storyElement.textContent =
      "Your networking efforts paid off, and you're securing better contracts. What's your next move?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Expand Your Team')">Expand Your Team</button>
                    <button onclick="makeChoice('Invest in Marketing')">Invest in Marketing</button>
                    <button onclick="makeChoice('Save for New Equipment')">Save for New Equipment</button>
                `;
  } else if (choice === "Master Your Trade") {
    salary += 12000; // Becoming highly skilled increases salary
    storyElement.textContent =
      "You mastered your trade and are recognized as an expert. What's next?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Start Your Own Business')">Start Your Own Business</button>
                    <button onclick="makeChoice('Take on a Leadership Role')">Take on a Leadership Role</button>
                    <button onclick="makeChoice('Teach Others')">Teach Others</button>
                `;
  } else if (choice === "Start a Side Hustle") {
    money += 5000; // Side hustle adds extra income
    storyElement.textContent =
      "Your side hustle is bringing in extra money. What's your next goal?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Turn Side Hustle Into Business')">Turn Side Hustle Into Business</button>
                    <button onclick="makeChoice('Save for Investments')">Save for Investments</button>
                    <button onclick="makeChoice('Focus on Main Job')">Focus on Main Job</button>
                `;
  } else if (choice === "Plan Your Own Business") {
    storyElement.textContent =
      "You started planning your own business. What's your next step?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Secure Funding')">Secure Funding</button>
                    <button onclick="makeChoice('Find a Mentor')">Find a Mentor</button>
                    <button onclick="makeChoice('Launch Your Business')">Launch Your Business</button>
                `;
  } else if (choice === "Build a Portfolio") {
    salary += 4000; // Better portfolio increases opportunities
    storyElement.textContent =
      "Your portfolio is impressive, and you're attracting more clients. What's next?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Expand Client Base')">Expand Client Base</button>
                    <button onclick="makeChoice('Raise Rates')">Raise Rates</button>
                    <button onclick="makeChoice('Outsource Work')">Outsource Work</button>
                `;
  } else if (choice === "Network for Clients") {
    salary += 6000; // Networking grows client base
    storyElement.textContent =
      "Your networking efforts have expanded your client base. What's your next goal?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Launch a Brand')">Launch a Brand</button>
                    <button onclick="makeChoice('Hire Help')">Hire Help</button>
                    <button onclick="makeChoice('Specialize in a Niche')">Specialize in a Niche</button>
                `;
  } else if (choice === "Invest in Equipment") {
    money -= 5000; // Equipment investment
    storyElement.textContent =
      "You invested in top-notch equipment. This will help improve your output. What's next?";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Market Your Services')">Market Your Services</button>
                    <button onclick="makeChoice('Increase Productivity')">Increase Productivity</button>
                    <button onclick="makeChoice('Expand Offerings')">Expand Offerings</button>
                `;
  } else {
    storyElement.textContent =
      "Your adventure continues! Make your next decision.";
    choicesContainer.innerHTML = `
                    <button onclick="makeChoice('Go to college')">Go to college</button>
                    <button onclick="makeChoice('Start working')">Start working</button>
                    <button onclick="makeChoice('Take a gap year')">Take a gap year</button>
                `;
  }

  money += salary;
  manageFinances();
  salaryCounter.textContent = `Salary: $${salary}`;
  moneyCounter.textContent = `Money: $${money}`;
}
