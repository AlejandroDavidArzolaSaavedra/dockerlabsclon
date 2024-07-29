import type { Machine as MachineType, MachinesData } from './Type.ts';
import machineData from '../../public/machines.json';

export const transformedMachineData: MachinesData = {
  data: machineData.data.map((data: any) => ({
    _id: data._id,
    name: data.name,
    size: data.size,
    difficulty: data.difficulty,
    downloadUrl: data.downloadUrl,
    writeUps: data.writeUps,
    status: data.status,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    __v: data.__v,
    owner: data.owner,
  })),
  msg: machineData.msg,
};

export function difficultyToText(difficulty: number): string {
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

export function filteredMachines(machines: MachineType[], filterName: string, filterDifficulty: string, filterCategory: string): MachineType[] {
  return machines.filter((machine: MachineType) => {
    const matchesName = machine.name.toLowerCase().includes(filterName.toLowerCase());
    const matchesDifficulty = filterDifficulty === '' || machine.difficulty.toString() === filterDifficulty;
    const matchesCategory = filterCategory === '' || machine.category === "1";
    return matchesName && matchesDifficulty && matchesCategory;
  });
}
