let res = "S";
let i = Number(0);
let StudentsList = [];
function Students(StudentName, n1, n2) {
  this.StudentName = StudentName;
  this.n1 = n1;
  this.n2 = n2;
  this.result = Number((n1 + n2) / 2);
}

while (res === "S") {
  let nome = prompt("Digite o nome do estudante: ");
  let n1 = Number(prompt("Digite qual foi a primeira nota: "));
  let n2 = Number(prompt("Digite qual foi a segunda nota: "));
  StudentsList[i] = new Students(nome, n1, n2);
  res = prompt("Você deseja continuar? [S/N]");
  i++;
}
let j = Number(0);
while (j <= StudentsList.length - 1) {
  if (StudentsList[j].result >= 7) {
    alert(
      `Parabéns ${StudentsList[j].StudentName}! Sua média foi ${StudentsList[j].result}, você está aprovado.`
    );
  } else {
    alert(
      `Poxa vida ${StudentsList[j].StudentName}. Sua média foi ${StudentsList[j].result}, não foi dessa vez.`
    );
  }
  j++;
}
