import { MitosisNode } from '../types/mitosis-node';

export const createMitosisNode = (
  options: Partial<MitosisNode>,
): MitosisNode => ({
  '@type': '@builder.io/mitosis/node',
  name: 'div',
  meta: {},
  properties: {},
  bindings: {},
  children: [],
  ...options,
});
