//change 5 to the total number of questions
var total=15
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]= "Congratulations!"
compliments[1]= "Well done!"
compliments[2]= "Awesome job!"
compliments[3]= "Brilliant."
compliments[4]= "Perfect!"
compliments[5]= "Great Job!"
compliments[6]= "Wonderful!"
compliments[7]= "You're a scholar!"
compliments[8]= "You know your stuff!"
compliments[9]= "Correct!"
compliments[10]= "No-one can stop you!"
compliments[11]= "Keep up the good work!"
compliments[12]= "You're a literary wiz!"
compliments[13]= "Yes!"
compliments[14]= "Spectacular!"
compliments[15]= "You're a genius!"



/*Below lists the questions, its choices, and finally, the solution to each question. Follow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]= "Which March sister dreams of becoming a writer in Louisa May Alcott's Little Women?"
choice1[1]= "Meg"
choice1[2]= "Jo"
choice1[3]= "Beth"
choice1[4]= "Amy"

question[2]= "Who is the youngest sister in Little Women?"
choice2[1]= "Meg"
choice2[2]= "Beth"
choice2[3]= "Amy"
choice2[4]= "Jo"

question[3]= "What is the name of the sisters' neighbor ?"
choice3[1]= "Laurie"
choice3[2]= "John"
choice3[3]= "Franz"
choice3[4]= "Friedrich"

question[4]= "What is the name of the heroine in Jane Austen's Pride and Prejudice?"
choice4[1]= "Jane"
choice4[2]= "Charlotte"
choice4[3]= "Lydia"
choice4[4]= "Elizabeth"

question[5]= "What is the name of Mr. Darcy's Estate?"
choice5[1]= "Morland"
choice5[2]= "Mansfield Park"
choice5[3]= "Pemberley"
choice5[4]= "Rosings"

question[6]= "What is Mr. Darcy's first name?"
choice6[1]= "Charles"
choice6[2]= "Elliot"
choice6[3]= "William"
choice6[4]= "Fitzwilliam"

question[7]= "Who is Anne Elliot's ex-fiancé in Jane Austen's Persuasion?"
choice7[1]= "Captain Wentworth"
choice7[2]= "Captain Benwick"
choice7[3]= "Admiral Croft"
choice7[4]= "Admiral Baldwin"

question[8]= "Who persuaded Anne to break off her engagement?"
choice8[1]= "Mary"
choice8[2]= "Lady Dairymple"
choice8[3]= "Penelope"
choice8[4]= "Lady Russel"

question[9]= "In Charles Dickens' Little Dorrit, where was Amy Dorrit born?"
choice9[1]= "A workhouse"
choice9[2]= "An orphanage"
choice9[3]= "A debtor's prison"
choice9[4]= "A parsonage"

question[10]= "Who befriends Amy Dorrit?"
choice10[1]= "Arthur"
choice10[2]= "John"
choice10[3]= "Henry"
choice10[4]= "Daniel"

question[11]= "In Discken's David Copperfield, what is the name of David's stepfather?"
choice11[1]= "Mr. Micawber"
choice11[2]= "Mr. Murdstone"
choice11[3]= "Mr. Wickfield"
choice11[4]= "Mr. Peggotty"

question[12]= "Who is David's Great-Aunt?"
choice12[1]= "Clara Peggoty"
choice12[2]= "Mrs. Gummidge"
choice12[3]= "Betsey Trotwood"
choice12[4]= "Agnes Wickfield"

question[13]= "In Shakespeare's Twelfth Night, What name does Viola use disguised as a man?"
choice13[1]= "Sebastian"
choice13[2]= "Orsino"
choice13[3]= "Antonio"
choice13[4]= "Cesario"

question[14]= "Who is Olivia's steward?"
choice14[1]= "The Fool"
choice14[2]= "Malvolio"
choice14[3]= "Feste"
choice14[4]= "Fabian"

question[15]= "Who disguises herseld as a lawyer to defend Antonion in The Merchant of Venice?"
choice15[1]= "Olivia"
choice15[2]= "Viola"
choice15[3]= "Portia"
choice15[4]= "Nerissa"

solution[1]="b"
solution[2]="c"
solution[3]="a"
solution[4]="d"
solution[5]="c"
solution[6]="d"
solution[7]="a"
solution[8]="d"
solution[9]="c"
solution[10]="a"
solution[11]="b"
solution[12]="c"
solution[13]="d"
solution[14]="b"
solution[15]="c"
