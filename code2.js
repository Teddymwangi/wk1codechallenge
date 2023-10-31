function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;

    if (speed < speedLimit + 5) {
        return "Ok";
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPer5KmOver;
        if (demeritPoints >= 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// Example usage
let speed = parseFloat(prompt("Enter the car speed (in km/h):"));

if (isNaN(speed)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    let result = calculateDemeritPoints(speed);
    console.log(result);
}
