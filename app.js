const timeline = [{ year: 1846, description: "On October 6th, 1846, Thomas Edison, inventor of the lightbulb and employer of Nikola Tesla, was born."}, { year: 1847, description:"On February 11th, 1847, George Westinghouse, friend and investor of Nikola Tesla, was born."}, { year: 1856, description:"On the night of July 9th, Nikola Tesla was born in Smiljan, Austrian Empire (modern day Croatia) sometime during midnight. It is unclear whether he was born on the 9th or 10th."}, { year: 1865, description:"George Westinghouse, friend and investor of Nikola Tesla, received a patient for a rotary steam engine."},  { year: 1875, description:"Nikola Tesla studied electrical engineering at the Austrian Polytechnic in Graz."},  { year: 1879, description:"Thomas Edison invented the lightbulb."},  { year: 1880, description:"Nikola Tesla attended the Charles-Ferdinand branch of the University of Prague."},  { year: 1880, description:"Nikola Tesla’s father’s death."},  { year: 1881, description:"Nikola Tesla moved to Budapest, Hungary."},  { year: 1882, description:"Nikola Tesla moved to Paris to work as an engineer for the Continental Edison Company."}, { year: 1882, description:"Nikola Tesla came up with the induction motor. He also started to work with more devices that use rotating magnetic fields."},  { year: 1882, description:"Nikola Tesla was with his mother when she died."},  { year: 1884, description:"Nikola Tesla immigrated to the United States."}, { year: 1886, description:"Nikola Tesla created his company Tesla Electric Light And Manufacturing."},  { year: 1886, description:"Nikola Tesla worked as a common laborer to feed himself and get more money for his next project."}, { year: 1887, description:"Nikola Tesla began investigating what would later become X-Rays."},  { year: 1887, description:"Nikola Tesla constructed the initial brushless alternating current induction motor."},  { year: 1888, description:"Nikola Tesla demonstrated his initial brushless alternating current induction motor at the American Institute of Electrical Engineers."},  { year: 1888, description:"Nikola Tesla got patents for devices that use rotating magnetic fields."},  { year: 1891, description:"Nikola Tesla became a U.S. citizen."},  { year: 1892, description:"Nikola Tesla served as vice president of the American Institute of Electrical Engineers."}, { year: 1895, description:"A fire destroyed Nikola Tesla's lab."}, { year: 1895, description:"Nikola Tesla and Edison attended the National Electrical Exposition in Philadelphia."}, { year: 1896, description:"Buffalo started to use the alternating current energy from Niagara Falls (invented by Nikola Tesla)."}, { year: 1897, description:"Nikola Tesla researched radiation, which later set up the basic formulation of cosmic rays."}, { year: 1897, description:"Nikola Tesla filed radio patents."}, { year: 1898, description:"Nikola Tesla demonstrated a radio controlled boat to the public during the electrical exhibition in Madison Square Garden."}, { year: 1897, description:"Nikola Tesla started research at Colorado Springs."}, { year: 1900, description:"Marconi attempted to stop Nikola Tesla’s radio patents."}, { year: 1900, description:"On July 7th, Nikola Tesla left Colorado Springs."}, { year: 1912, description:"Nikola Tesla was nominated for a Nobel Prize."}, { year: 1914, description:"Start of World War 2."}, { year: 1914, description:"George Westinghouse died."}, { year: 1917, description:"Nikola Tesla first established principles regarding power level for the first radar units."}, { year: 1931, description:"Nikola Tesla celebrated his 75th birthday. Time Magazine had him on the cover."}, { year: 1931, description:"Thomas Edison dies."}, { year: 1936, description:"Nikola Tesla writes a treatise entitled The Art of Projecting Concentrated Non-dispersive Energy through the Natural Media. This was about charged particle beams."}, { year: 1939, description:"Start of World War 2."}, { year: 1943, description:"Nikola Tesla dies of heart failure at the age of 86 in the New Yorker Hotel. It is unclear when he died. He died sometime from January 5th to January 8th."}, { year: 1943, description:"Nikola Tesla had his funeral at the Cathedral of Saint John the Divine in Manhattan on January 12th."}, { year: 1943, description:"The Supreme Court ruled in favor to credit Nikola Tesla as the creator of the radio."}, { year: 1957, description:"Nikola Tesla’s ashes were taken to the Nikola Tesla Museum in Belgrade."}, { year: 1960, description:"The unit that measures magnetic flux density was named the Tesla after Nikola Tesla."}, { year: 2003, description:"Elon Musk started Tesla, an electric car company named after Nikola Tesla because of his breakthroughs in electricity."}]

const year = document.getElementById("year");
const description = document.getElementById("description");
const image = document.getElementById("image");
//`images/${timeline[counter].year}.jpeg`
const descriptionContainer = document.getElementById("text-container");
const back = document.getElementById("back");
const forward = document.getElementById("forward");
let counter = 0;

year.innerText = timeline[0].year;
description.innerText = timeline[0].description;
year.style.color = '#fcdf9f';

function goForward() {
    if (counter <= timeline.length - 2) {
        console.log('go forward works')
        counter++
        year.innerText = timeline[counter].year;
        description.innerText = timeline[counter].description;
        if (timeline[counter].description.includes('Thomas Edison')) {
            year.style.color = '#fcdf9f';
        } else if (timeline[counter].description.includes('Westinghouse')) {
            year.style.color = '#fcdf9f';
        } else if (timeline[counter].year === 1960 || timeline[counter].year === 2003 || timeline[counter].year === 1957) {
            year.style.color = '#bcf5f1';
        } else {
            year.style.color = 'white';
        }
    }
}

function goBack() {
    if (counter != timeline.length && counter < timeline.length && counter != 0) {
        console.log('go back works')
        counter -= 1;
        year.innerText = timeline[counter].year;
        description.innerText = timeline[counter].description;

        if (timeline[counter].description.includes('Thomas Edison')) {
            year.style.color = '#fcdf9f';
        } else if (timeline[counter].description.includes('Westinghouse')) {
            year.style.color = '#fcdf9f';
        } else {
            year.style.color = 'white';
        }
    }
}

forward.addEventListener("onclick", goForward())
back.addEventListener("onclick", goBack())
document.addEventListener("keydown", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key == "ArrowRight") {
        //call function
        goForward()
    } else if (event.key === "ArrowLeft" && counter != 0) {
      
        //call function
        goBack()
    }
  });