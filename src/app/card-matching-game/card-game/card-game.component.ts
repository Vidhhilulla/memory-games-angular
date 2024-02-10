import { Component } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent 
{
  id=1
  levelId=1
  cardNumbers!: number[];
  noOfCards=12
  colors!:any
  selectedColor!:String[];

  selectedObjects1!: any[];
  selectedObjects2!: any[];
  count:number=0
   myArray: Array<String> = [];













  selectedCard: number | null = null;

onCardClick(card: any): void 
{
  this.count =this.count+1;
  console.log(`Clicked on card ${card.number}`);
  this.selectedCard = card.number;
  this.myArray.push(card.color)
  


  card.isSelected = !card.isSelected; // Toggle the isSelected property
  if(this.count%2==0)
  {
    if(this.myArray[0]!=this.myArray[1])
    {
      console.log("Not equal")



    }
    else
    {
      console.log("equal")

    }
    this.myArray=[];

  }

}






  // id and level_id samjho peche se aaya
  // and by using some logic noOfCards bhi aaya






    

  constructor() {
    // Initialize the property in the constructor
    this.cardNumbers = Array.from({ length: this.noOfCards }, (_, index) => index + 1);
    console.log(this.cardNumbers);
    this.colors = this.generateRandomColors(this.noOfCards / 2);
    this.selectedObjects1 = this.generateObjectsForSet(this.noOfCards / 2 ,1,this.noOfCards / 2);
    this.selectedObjects2 = this.generateObjectsForSet(this.noOfCards / 2 ,this.noOfCards / 2,this.noOfCards);

    console.log(this.selectedObjects1)
    console.log(this.selectedObjects2)




  }

  private generateRandomColors(count: number): void
  {
     this.colors = ['#ffcc00', '#ff0000', '#00ff00', '#0000ff', '#ff6600', '#9900cc', '#cc00cc', '#0099cc', '#009900', '#ff6699'];
    this.selectedColor=Array.from({ length: count }, (_, index) => this.colors[index % this.colors.length]);
    console.log(this.selectedColor)
  }

  private generateObjectsForSet(count: number, startIndex: number, endIndex: number): any[] {
    const objects: any[] = [];
    const usedNumbers: Set<number> = new Set();
  
    for (let i = 0; i < count; i++) {
      let randomNumber: number;
  
      // Generate a unique random number within the specified range
      do {
        randomNumber = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;
      } while (usedNumbers.has(randomNumber));
  
      usedNumbers.add(randomNumber);
  
      const randomColor = this.selectedColor[i % this.selectedColor.length];
      objects.push({ number: randomNumber, color: randomColor, isSelected: false }); // Add isSelected property initialized to false
    }
  
    return objects;
  }
  





}

