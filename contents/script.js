        
        let sample_space; 
        let distribution_type;
        let known_standard_deviation;
        let correct_answer;
        let situation;
        let situation_random;
        let standard_deviation;
        let distribution;
        let toggle_state;
        let standard_deviation_text;
        let distribution_text;
        
        
        function random_number(min, max) {
         return Math.floor(Math.random() * (max - min) ) + min;
        }
        
        function game_execute() {
            let means = [
                250, 3, 266, 50, 90, 18, 80, 25
            ];
            sample_space = random_number(10,70);
            distribution_type = random_number(0,2);
            known_standard_deviation = random_number(0,2);
            situation_random = random_number (0,8);
            console.log(situation_random);
            standard_deviation = random_number (means[situation_random]*.1 , means[situation_random]*0.2);
            standard_deviation = standard_deviation.toFixed(1);
            if (known_standard_deviation == 0) {
                standard_deviation_text = "";
            }
            else {
                standard_deviation_text = " with a standard deviation of " + standard_deviation;
            }
            if (distribution_type == 1) {
                distribution_text = " and is normally distributed";
            }
            else {
                distribution_text = "";
            }

            
            let situations = [
                "The Euan's Theater chain has studied its movie customers to determine how much money they spend on concessions. The study revealed that the spending distribution has a mean of Php 250.00" + standard_deviation_text + distribution_text + ". With a sample of " + sample_space + ", what percentage of customers will spend less than Php 160.00 on concessions?",
                "The CEO of battery manufacturing company claims that an average battery lasts 3 days. A researcher randomly selects " + sample_space + " batteries for testing. The sampled bulbs last an average of 2.5 days" + distribution_text + standard_deviation_text + ". If the CEO's claim were true, what is the probability that 15 randomly selected batteries would have an average life of no more than 2.5 days?",
                "The length of human pregnancies from conception to birth has a mean of 266 days" + standard_deviation_text + distribution_text + ". Taking a sample of " + sample_space + ", what proportion of pregnancies will last between 240 and 270 days?",
                "For some computers, the time period between charges of the battery" + standard_deviation_text + " has a mean of 50 hours" + distribution_text + ". Maki, a seller, has " + sample_space + " of these computers and needs to know the probability that their average time period will be between 50 and 70 hours.",
                "The speeds of cars are measured using a radar unit on a motorway. The speeds has a mean of 90 km/hr" + standard_deviation_text + distribution_text + ". What is the probability that " + sample_space + " cars selected at chance will, on average, have an average of more than 100 km/hr?",
               "The time taken to assemble a car in a certain plant is a random variable having a mean of 18 hours" + standard_deviation_text + distribution_text + ". What is the probability that a car can be assembled at this plant in a period of time less than 17.5 hours taking a sample of " + sample_space + " cars?",
               "A large group of students took a test in Statistics, the final grades have a mean of 80" + standard_deviation_text + distribution_text + ". Taking a sample of " + sample_space + ", what percent of the students scored higher than 85?",
               "The scores on Probability and Statistics periodical test have a mean of 25" + standard_deviation_text + distribution_text + ". Suppose " + sample_space + " people are randomly selected and tested. What is the probability that the average test score in the sample group will be at most 30?"
            ];




             //The list of situations (i hated encoding them :c)

            if (distribution_type == 0) {
                distribution = "Unknown";
            }
            else {
                distribution = "Normal";
            }
            if (known_standard_deviation == 0) {
                standard_deviation = "Unknown";
            }
            else {
            }                                                                                                                                        
            //Sets the text for Illustration


            if (distribution_type == 1 && known_standard_deviation == 1) { 
                correct_answer = "Z-test";
            }
            else if (sample_space <= 30 && (known_standard_deviation == 0  || distribution_type == 0)) {
                correct_answer = "T-test";
            }
            else {
                correct_answer = "Either";
            }                                                                                                                                         
            // Sets the correct answer based on the randomness generator
            // S ∧ (K V D)

            var qstn = document.getElementById("question");
            qstn.innerText = situations[situation_random];
            var illus = document.getElementById("illustration");
            illus.innerText = "Population Standard Deviation: " +standard_deviation + "\nDistribution: " + distribution + "\n Sample Space: " + sample_space;
            let toggle_state_transfer = sessionStorage.getItem("toggle_state");                                                                     
            //Handles if illustration will appear or not

            if (toggle_state_transfer == 1) {                                                                                                       
                illus.style.opacity = 0;
            }
            else if (toggle_state_transfer == 0) {
                illus.style.opacity = 1;
            }
            return
            
        }                                                                                                                                           
        // randomness generator 

        function checking() {
            var answertxt = document.getElementById("answer");
            answertxt.innerText = correct_answer + " Is the correct answer";
            return;
        }

        function your_answer(answer) {
            if (answer == correct_answer) {
                if (confirm("Congratulations! That was the correct answer! (Click cancel to review your answer)") == true) {
                    location.reload();
                  } else {
                    var illus = document.getElementById("illustration");                                    
                    illus.style.opacity = 1;
                  }
            }
            else {
                alert('That was the wrong answer');
            }
        }

        function toggle_load() {
            sessionStorage.clear();
            toggle_state = 0;
            sessionStorage.setItem("toggle_state", 0);
            return;
        }

        function toggle() {
            var confirmation = document.getElementById("button_toggle");

            if (toggle_state == 1) {
                sessionStorage.clear();
                sessionStorage.setItem("toggle_state", 0);
                toggle_state = 0;
                console.log(toggle_state);
                confirmation.style.backgroundColor = "green";
                return;
            } 
            else {
                sessionStorage.clear();
                sessionStorage.setItem("toggle_state", 1);
                toggle_state = 1;
                console.log(toggle_state);
                confirmation.style.backgroundColor = "red";
                return;
            }
                        
        }

        function About() {
            alert("The developers of this website are Chris Euan De Leon and Lawrence Adio. The website's main objective is to teach users on how to properly choose when to use a Z-distribution and a T-distribution when faced with certain probabilistic problems involving sampling distribution of the sample means. The website caters to those who prefer the 'discuss and then practice immediately approach' and those who like to go on their own pace. It has two main pages which are the 'Learn' page and the 'Game' page. The Learn page discusses the topic at hand and teaches the user while the Game page lets the user take into practice what they have learned by having them answer a set of questions each with a randomized sample space, standard deviation, and type of distribution.");
        }

        function load() {
            location.href = 'contents/main game.html';
        }
