interface Card {
  name: string;
  score: number;
  color: string[];
  pickOrder: number;
}

class Pack {

  availableCards: Card[];
  cardsInPack: Card[];

  constructor(availableCards: Card[]) {
    this.availableCards = availableCards;
    this.cardsInPack = [];
  }

  addCard = (partialCardName: string): boolean => {
    const matches = this.availableCards.filter((availableCard: Card) => {
      return availableCard.name.indexOf(partialCardName) !== -1;
    });
    const uniqueMatch = matches.length == 1;

    if (uniqueMatch) {
      const card = matches[0];
      console.log(card.name);
      this.cardsInPack.push(card);
    }
    return uniqueMatch;
  }

  list = () => {
    console.log(this.cardsInPack.sort((a: Card, b: Card) => {
      return a.pickOrder < b.pickOrder ? -1 : 1;
    }));
  }

}

export default Pack;
