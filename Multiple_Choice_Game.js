class Question{
	//Setup
	constructor(_prompt, _answer){
		this.prompt = _prompt;
		this.answer = _answer;
	}
}

//Array of question prompts. Note the types are strings, not questions since these are only the prompts
var question_prompts = [
	"What color is Ichigo's Bankai?\n(a) Black & White\n(b) Purple\n(c) Orange\n\n" , 
	"From whom does Luffy get his straw hat from?\n(a) Gold Roger\n(b) Zoro\n(c) Ace\n(d) Law\n\n",
	"What is the name of Killua's father?\n(a) Silva\n(b) Zeno\n(c) Kikyo\n(d) Milluki\n\n",
	"What is the second Pokemon that Ash Ketchum caught in Sinnoh?\n(a) Turtwig\n(b) Starly\n(c) Chimchar\n(d) Buizel\n\n",
	"In Attack on Titan, who was the first member of Levi's squad to be killed by Annie, the Female Titan?\n(a) Eld\n(b) Petra\n(c) Gunther\n(d) Oluo\n\n",
	"How many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams?\n(a) Three\n(b) Four\n(c) Five\n(d) Six\n\n",
	"What kind of animal was the Chimera Ant who became friends with Killua and helped him?\n(a) Cheetah\n(b) Chameleon\n(c) Octopus\n(d) Bear\n\n",
	"Who is the 8th division captain in Bleach?\n(a) Soifon\n(b) Shinsui Kyoraku\n(c) Sosuke Aizen\n(d) Ichimaru Gin\n\n",
	"In Attack on Titan, Jean and Annie compared Marlo to one person. Who is that person?\n(a) Bertolt\n(b) Armin\n(c) Reiner\n(d) Eren",
	"What Pokemon is exactly before Stantler in the national pokedex?\n(a) Porygon2\n(b) Smeargle\n(c) Phanpy\n(d) Magby\n\n"

];

//Another array named questions, which provides the question prompts from the array created above, as well as answers.
var questions = [
	Question(question_prompts[0], "a"),
	Question(question_prompts[1], "a"),
	Question(question_prompts[2], "a"),
	Question(question_prompts[3], "a"),
	Question(question_prompts[4], "c").
	Question(question_prompts[5], "c").
	Question(question_prompts[6], "c"),
	Question(question_prompts[7], "b"),
	Question(question_prompts[8], "d"),
	Question(question_prompts[9], "a"),
];

function run_test(questions){
	//keep track of score
	var score = 0;
	//for loop that runs until number of questions run out
	for(int i = 0; i < questions.size(); i++)
		//prompts the user to answer the question and stores it in the variable named answer
		var answer = window.prompt(question_prompts[i]);
		//if the answer is correct, score gets incremented by 1
		if(answer == question.answer){
			score += 1;
		}	
	//prints out final score 
	console.log("You got " + str(score) + "/" + questions.length() + " correct!" )

}

run_test(questions);


