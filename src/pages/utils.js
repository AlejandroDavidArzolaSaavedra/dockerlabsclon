function difficultyToText(difficulty: number) {
    switch (difficulty) {
      case 0:
        return 'Fácil';
      case 1:
        return 'Medio';
      case 2:
        return 'Difícil';
      case 3:
        return 'Super Difícil';
      default:
        return 'Desconocido';
    }
  }

  export {difficultyToText}