//Your Code here
let firstAnswer = window.prompt("Do you take the road on the left or the right?")
console.log(firstAnswer)

console.log(firstAnswer === "left")

//True or flase conditional statement
if (firstAnswer === "left") {
  let secondAnswer = window.prompt("There is a massive pothole ahead, do you go left or right?")
  if (secondAnswer === "left") {
    window.alert("YOU RAN OVER A BOULDER AND FLIPPED YOUR CAR!")
  } else {
    window.alert("You steered clear of all obstacles, but have not found the treasure yet, TRY AGAIN!")
  }

} else {
    console.log("You have found treasure, congratulations!")

}