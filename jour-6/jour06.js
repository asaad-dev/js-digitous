// Exo : 01 - Formats
console.log("============ Exo : 01 Formats ============");

function formatDate() {
    const d = new Date();

    // d.getFullYear();
    // console.log(d);

    // var todaysDate = new Date; 
    // todaysDate = todaysDate.toDateString(); 
    // console.log(todaysDate);

    let ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(d);
    console.log(`${ye}-${mo}-${da}`);
}

// formatDate();



// Exo : 01 - Age
console.log("============ Exo : 02 Age ============");

function calculateAge() {

}

// calculateAge();


