//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Wahoo!"
compliments[1]="Super!"
compliments[2]="Amazing!"
compliments[3]="AWESOME."
compliments[4]="Perfect!"
compliments[5]="Yippee!"
compliments[6]="Yessss!"
compliments[7]="You're on FIRE!"
compliments[8]="FABULOUS!"
compliments[9]="You ROCK!"
compliments[10]="Yabadabadoo!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What is the largest ocean in the world?"
choice1[1]="The Pacific Ocean"
choice1[2]="The Atlantic Ocean"
choice1[3]="The Indian Ocean"
choice1[4]="The Arctic Ocean"

question[2]="What is the world's tallest mountain range?"
choice2[1]="The Himalayas"
choice2[2]="The Rocky Mountains"
choice2[3]="The Ural Mountains"
choice2[4]="The Andes"

question[3]="What is the world's most populous country?"
choice3[1]="Indonesia"
choice3[2]="India"
choice3[3]="United States"
choice3[4]="China"

question[4]="What is the capital of France?"
choice4[1]="Vienna"
choice4[2]="Paris"
choice4[3]="London"
choice4[4]="Moscow"

question[5]="Which country borders Russia?"
choice5[1]="Germany"
choice5[2]="Italy"
choice5[3]="Finland"
choice5[4]="Pakistan"

question[6]="What is the capital of Brazil?"
choice6[1]="Brasilia"
choice6[2]="Rio de Janeiro"
choice6[3]="Sao Paulo"
choice6[4]="Fortaleza"

question[7]="What is the world's largest country by area?"
choice7[1]="Argentina"
choice7[2]="Australia"
choice7[3]="Russia"
choice7[4]="Canada"

question[8]="What continent is home to the Nile River?"
choice8[1]="Asia"
choice8[2]="South America"
choice8[3]="Europe"
choice8[4]="Africa"

question[9]="What is the world's southernmost continent?"
choice9[1]="Asia"
choice9[2]="Australia"
choice9[3]="Antarctica"
choice9[4]="Africa"

question[10]="In what country is Machu Picchu located"
choice10[1]="Chile"
choice10[2]="Peru"
choice10[3]="Argentina"
choice10[4]="Bolivia"

solution[1]="a"
solution[2]="a"
solution[3]="d"
solution[4]="b"
solution[5]="c"
solution[6]="a"
solution[7]="c"
solution[8]="d"
solution[9]="c"
solution[10]="b"
