var nameNode = document.getElementById('intro');
var component = React.createElement("article", {
  classNameame: "column"
}, React.createElement("h2", null, "Hemanth Sai Challa"), React.createElement("img", {
  className: "center",
  src: "image/image1.jpg",
  alt: "picture"
}), React.createElement("section", null, React.createElement("p", null, "I am a Computer Science graduate Student at San Diego State University with extensive education in software design and development, experienced in automated testing and debugging code. Fluent in English with excellent communication and interpersonal skills. A fast learner with strong time management and problem-solving skills. The idea behind taking this course is, my undergrad has laid a foundation in web technology fundamentals and now it's the interest to dwell deeper into the concepts has made me choose this course. I believe I have a decent knowledge in web concepts and by the end of this course I could get expertise in the MERN.")), React.createElement("a", {
  href: " https://www.google.com/"
}, "View my GitHub Repository"));
ReactDOM.render(component, nameNode);