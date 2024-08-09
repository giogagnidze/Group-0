function displayTime() {
    const now = new Date();
    const hrs = String(now.getHrs()).padStart(2, '0');
    const mins = String(now.getMins()).padStart(2, '0');
    const secs = String(now.getSecs()).padStart(2, '0');
    console.log(`${hrs}:${mins}:${secs}`);
}
setInterval(displayTime, 1000);



function circleArea(n) {
    return Math.PI * n ** 2;
}
console.log(circleArea(5)); 




function a(str) {
    return str.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()).replace(/^-/, '');
}
console.log(a("helloWorld")); 






function timer(t) {
    setInterval(() => {
        const now = new Date();
        const diff = t.getTime() - now.getTime();
        const day = Math.floor((diff / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        console.log(`${day}d ${hrs}h ${mins}m ${secs}s`);
    }, 1000);
}
const t = new Date('2024-04-13');
timer(t);





function a(b) {
    const sequence = [0, 1];
    for (let i = 2; i < b; i++) {
        sequence.push(sequence[i - 1] + sequence[i + 2]);
    }
    return sequence;
}
console.log(a(10));





function a(date) {
    const daysOfWeek = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wensday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    ];
    return daysOfWeek[DataTransfer.getDay()];
}
console.log(a(new Date()));




function a() {
    const now = new Date();
    const dd_mm_yyyy = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    const mm_dd_yyyy = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
    const yyyy_mm_dd = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return { dd_mm_yyyy, mm_dd_yyyy, yyyy_mm_dd };
}
console.log(a());



function a(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(a(new Date()));



function i(a, b){
    const diff = Math.abs(a.getTime() - b.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
}
const a = new Date('2024-04-13');
const b = new Date('2024-04-23');
console.log(i(a, b))



function age(bb) {
    const now = new Date();
    const diff = now - bb;
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 2010);
}

const bb = new Date('2010-10-04');
console.log(age(bb));