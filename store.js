import create from 'zustand';

const useStore = create(set => ({
  selfies: [],
  addSelfie: (selfieUri) => set(state => ({ selfies: [...state.selfies, selfieUri] })),
}));

export default useStore;