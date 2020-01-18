export const RECEIVESTEPS = 'RECEIVESTEPS';
export const RECEIVESTEP = 'RECEIVESTEP';
export const REMOVESTEP = 'REMOVESTEP';

export const receiveSteps = steps => ({
  type: RECEIVESTEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVESTEP,
  step
});

export const removeStep = step => ({
  type: REMOVESTEP,
  step
});