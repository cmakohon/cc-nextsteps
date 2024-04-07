import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProgress = create(
    persist(
        (set) => {
            return {
                currentStep: -1,
                incrCurrentStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
                decrCurrentStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
                reset: () => set(() => ({ currentStep: -1 })),
            };
        }, {
        name: 'formProgress'
    }));
